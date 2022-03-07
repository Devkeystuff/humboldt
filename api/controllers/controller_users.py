import datetime
import hashlib
import jwt
import os
import json
from dotenv import load_dotenv
from models.requests.request_login_user import RequestLoginUser
from models.requests.response_login_user import ResponseLoginUser
from models.requests.request_register_user import RequestRegisterUser
from models.enums.enum_error_message import ErrorMessage

from controllers.controller_database import ControllerDatabase

load_dotenv()


class ControllerUsers:
    @staticmethod
    async def register_user(request: RequestRegisterUser):
        existing_user = ControllerDatabase.get_user_by_email(request.email)
        if existing_user is not None:
            raise Exception(ErrorMessage.EXISTING_USER)
        password_hash = request.password.encode()
        password_hash = hashlib.sha256(password_hash)
        print(password_hash)
        # ControllerDatabase.register_user()

    @staticmethod
    def login_user(request: RequestLoginUser) -> ResponseLoginUser:
        # Authorize user

        response = ResponseLoginUser()
        user = ControllerDatabase.get_user_by_email_and_password(
            email=request.email, password=request.password
        )
        if not user:
            raise Exception(ErrorMessage.INCORRECT_CREDENTIALS)
        elif user.password_hash != request.password:
            raise Exception(ErrorMessage.INCORRECT_CREDENTIALS)
        response.access_token = jwt.encode(
            {
                "email": request.email,
                "password": request.password,
                "exp": datetime.now()
                + datetime.datetime.now()
                + datetime.timedelta(seconds=10),
            },
            os.getenv("ACCESS_TOKEN_SECRET"),
            algorithm="HS256",
        )
        response.user_id = 100
        response.is_success = True
        return response
