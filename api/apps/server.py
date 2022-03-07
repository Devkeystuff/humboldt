from fastapi import FastAPI, Query, Request, Depends, HTTPException, status
from fastapi.staticfiles import StaticFiles
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel

import stripe
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

from modules.auth_middleware import verify_authorization_header


server = FastAPI()


fake_users_db = {
    "johndoe": {
        "username": "bruh123",
        "email": "john.doe@gmail.com",
        "password_hash": "fakehashedsecret",
        "disabled": False,
    },
    "janedoe": {
        "username": "xxx360noscopexxx",
        "email": "jane.doe@gmail.com",
        "password_hash": "fakehashedsecret2",
        "disabled": True,
    },
}

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def fake_hash_password(password: str) -> str:
    return "fakehashed" + password


class User(BaseModel):
    username: str
    email: str | None = None
    disabled: bool | None = None


class DbUser(User):
    hashed_password: str


def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return DbUser(**user_dict)


def fake_decode_token(token):
    user = get_user(fake_users_db, token)
    return user


def get_current_user(token: str = Depends(oauth2_scheme)):
    user = fake_decode_token(token)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return user


def get_current_active_user(current_user: User = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user


server.mount("/static", StaticFiles(directory="static"), name="static")


stripe.api_key = "sk_test_51KKSBJJHth7Mq4BApDC8xrMoUrcI4RcTrJphP5GjoGWVre0CYjj8jazXiY0Lh1m6fSgjeTBn7EzIhxs4XPj8blsS0049f68n0K"


@server.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user_dict = fake_users_db.get(form_data.username)
    if not user_dict:
        raise HTTPException(
            status_code=400,
            detail="Incorrect username or password",
        )
    user = DbUser(**user_dict)
    hashed_password = fake_hash_password(form_data.password)
    if not hashed_password == user.hashed_password:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    return {"access_token": user.username, "token_type": "bearer"}


@server.post("/users/me")
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user


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
