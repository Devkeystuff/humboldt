from fastapi import FastAPI, Query, Request
from fastapi.staticfiles import StaticFiles
from fastapi.staticfiles import StaticFiles
import stripe
from starlette.responses import Response
from models.requests.request_generate_design import RequestGenerateDesign
from models.requests.response_generate_design import (
    ResponseGenerateDesign,
)
from models.requests.request_get_design import RequestGetDesign
from models.requests.response_get_design import ResponseGetDesign
from models.requests.request_payment_intent import RequestPaymentIntent
from models.requests.response_payment_intent import ResponsePaymentIntent

from controllers.controller_requests import ControllerRequests
from controllers.controller_database import ControllerDatabase

from modules.logging_utils import LoggingUtils

from utils.checkout_utils import CheckoutUtils

server = FastAPI()

server.mount("/static", StaticFiles(directory="static"), name="static")


stripe.api_key = "sk_test_51KKSBJJHth7Mq4BApDC8xrMoUrcI4RcTrJphP5GjoGWVre0CYjj8jazXiY0Lh1m6fSgjeTBn7EzIhxs4XPj8blsS0049f68n0K"


@server.post("/test")
async def test(request: Request):
    try:
        print(request.user)
        ControllerDatabase.test_select()
    except Exception as e:
        LoggingUtils.log_exception(e)
    return Response(content="Hello world", media_type="text")


@server.post("/design", response_model=ResponseGenerateDesign)
async def generate_design(
    api_key: str = Query(...),
    is_preview: bool = Query(...),
    title: str = Query(...),
    description: str = Query(...),
    west: float = Query(...),
    north: float = Query(...),
    east: float = Query(...),
    south: float = Query(...),
):
    response = None
    try:
        request_generate_design = RequestGenerateDesign(
            api_key=api_key,
            title=title,
            description=description,
            east=east,
            north=north,
            south=south,
            west=west,
            is_preview=is_preview,
        )

        response = await ControllerRequests.generate_design(
            request=request_generate_design,
        )

    except Exception as e:
        LoggingUtils.log_exception(e)
    return Response(content=response.to_json(), media_type="application/json")


@server.get("/design", response_model=ResponseGetDesign)
async def get_design(api_key: str = "", design_uuid: str = ""):
    response = None
    try:
        request_get_design = RequestGetDesign(api_key=api_key, design_uuid=design_uuid)

        response = ControllerRequests.get_design(request=request_get_design)
    except Exception as e:
        LoggingUtils.log_exception(e)
    return response


@server.post("/create-payment-intent", response_model=ResponsePaymentIntent)
async def create_checkout_session():
    response = None
    try:
        response = ResponsePaymentIntent()
        request_checkout = RequestPaymentIntent()
        intent = stripe.PaymentIntent.create(
            amount=CheckoutUtils.calculate_order_amount(),
            currency="eur",
            automatic_payment_methods={"enabled": True},
        )
        response.client_secret = intent["client_secret"]
        response.is_success = True
    except Exception as e:
        LoggingUtils.log_exception(e)
    return response
