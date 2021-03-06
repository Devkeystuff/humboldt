import os
import uuid
from PIL import Image
import PIL
from fastapi import UploadFile
from utils.generate_utils import ImageGenerator
from modules.consts import (
    HOST,
    PATH_3D_WORLD,
    PATH_PUBLIC,
    PATH_STATIC,
    PATH_STATIC_ABSOLUTE,
)

from models.enums.enum_error_code import ErrorCode
from models.enums.enum_error_message import ErrorMessage

from models.common.lat_lng_bounds import LatLngBounds

from modules.logging_utils import LoggingUtils

from controllers.controller_database import ControllerDatabase

from models.requests.request_generate_design import RequestGenerateDesign
from models.requests.response_generate_design import (
    ResponseGenerateDesign,
)
from models.requests.request_get_design import RequestGetDesign
from models.requests.response_get_design import ResponseGetDesign


class ControllerRequests:
    @staticmethod
    async def generate_design(
        request: RequestGenerateDesign,
    ) -> ResponseGenerateDesign:
        response = None
        try:
            response = ResponseGenerateDesign()
            if ControllerRequests.validate_request(request, response):
                request_uuid = str(uuid.uuid4())
                request.design_uuid = request_uuid

                save_path = f"{PATH_STATIC}/resources/{request_uuid}"

                bounds = LatLngBounds(
                    west=request.west,
                    north=request.north,
                    east=request.east,
                    south=request.south,
                )
                elevation_map_img = ImageGenerator.generate_elevation_map_img(bounds)

                os.mkdir(save_path)
                elevation_map_img.save(f"{save_path}/elevation.png", "PNG")

                qr_code_img = ImageGenerator.generate_qr_img(
                    f"{PATH_3D_WORLD}/{request.design_uuid}"
                )
                distorted_map_img = ImageGenerator.generate_distorted_map(
                    h_map=f"{save_path}/elevation.png"
                )
                bottom_text = ImageGenerator.get_bottom_text()
                design_img = ImageGenerator.generate_design_image(
                    location_name=request.title,
                    side_text=request.description,
                    map_img=distorted_map_img,
                    qr_code_img=qr_code_img,
                    bottom_title=bottom_text.title,
                    bottom_desc=bottom_text.description,
                )
                preview = ImageGenerator.generate_preview(
                    design_img, f"{PATH_PUBLIC}/images/shirt.png"
                )

                preview.save(f"{save_path}/preview.png", "PNG")
                design_img.save(f"{save_path}/design.png", "PNG")
                qr_code_img.save(f"{save_path}/qr.png", "PNG")
                distorted_map_img.save(f"{save_path}/distorted_map.png", "PNG")

                request.edition_title = bottom_text.title
                request.edition_desc = bottom_text.description
                request.qr_code_img = (
                    f"{PATH_STATIC_ABSOLUTE}/resources/{request_uuid}/qr.png"
                )
                request.elevation_map_img = (
                    f"{PATH_STATIC_ABSOLUTE}/resources/{request_uuid}/elevation.png"
                )
                request.shirt_img = (
                    f"{PATH_STATIC_ABSOLUTE}/resources/{request_uuid}/preview.png"
                )

                ControllerDatabase.insert_design(design=request)

                response.edition_title = bottom_text.title
                response.edition_desc = bottom_text.description
                response.qr_code_img = (
                    f"{PATH_STATIC_ABSOLUTE}/resources/{request_uuid}/qr.png"
                )
                response.shirt_img = (
                    f"{PATH_STATIC_ABSOLUTE}/resources/{request_uuid}/preview.png"
                )
                response.elevation_map_img = (
                    f"{PATH_STATIC_ABSOLUTE}/resources/{request_uuid}/elevation.png"
                )
                response.design_uuid = request_uuid
                response.is_success = True
        except Exception as e:
            LoggingUtils.log_exception(e)
        return response

    @staticmethod
    def get_design(request: RequestGetDesign) -> ResponseGetDesign:
        response = None
        try:
            response = ResponseGetDesign()
            if ControllerRequests.validate_request(request, response):
                design = ControllerDatabase.get_design_by_uuid(uuid=request.design_uuid)
                response.design_id = design.design_id
                response.design_uuid = design.design_uuid
                response.qr_code_img = design.qr_code_img
                response.elevation_map_img = design.elevation_map_img
                response.shirt_img = design.shirt_img
                response.title = design.title
                response.description = design.description
                response.edition_title = design.edition_title
                response.edition_desc = design.edition_desc

                response.is_success = True
        except Exception as e:
            LoggingUtils.log_exception(e)
        return response

    @staticmethod
    def validate_request(request, response) -> bool:
        status = False
        try:
            if ControllerRequests.check_api_key(request.api_key):
                status = True
            else:
                response.error_code = ErrorCode.WRONG_API_KEY.value
                response.error_desc = (
                    response.error_desc + ErrorMessage.WRONG_API_KEY.value
                )
        except Exception as e:
            LoggingUtils.log_exception(e)
        return status

    @staticmethod
    def validate_image_file(file: UploadFile, response):
        status = False
        try:
            file_extension = file.filename.split(".")[-1]
            if file_extension == "jpg" or "png":
                status = True
            else:
                response.error_code = ErrorCode.WRONG_FILE_FORMAT.value
                response.error_desc = (
                    response.error_desc + ErrorMessage.WRONG_FILE_FORMAT.value
                )
        except Exception as e:
            LoggingUtils.log_exception(e)
        return status

    @staticmethod
    def validate_tiff_file(file: UploadFile, response):
        status = False
        try:
            file_extension = file.filename.split(".")[-1]
            if file_extension == "tif":
                status = True
            else:
                response.error_code = ErrorCode.WRONG_FILE_FORMAT.value
                response.error_desc = (
                    response.error_desc + ErrorMessage.WRONG_FILE_FORMAT.value
                )
        except Exception as e:
            LoggingUtils.log_exception(e)
        return status

    @staticmethod
    def check_api_key(api_key: str) -> bool:
        status = False
        try:
            client = ControllerDatabase.get_client(api_key)
            if client is not None:
                status = True
        except Exception as e:
            LoggingUtils.log_exception(e)
        return status
