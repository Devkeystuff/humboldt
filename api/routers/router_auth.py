from datetime import timedelta
import os
from api.models.common.token import Token
from models.requests.request_register_user import RequestRegisterUser
from models.requests.response_register_user import ResponseRegisterUser
from models.requests.request_login_user import RequestLoginUser
from models.requests.response_login_user import ResponseLoginUser

from controllers.controller_users import ControllerUsers

from fastapi import Depends, FastAPI, Query, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm

from api.models.db.db_user import DbUser


from fastapi import APIRouter, HTTPException


router = APIRouter()

fake_users_db = {
    "johndoe": {
        "username": "johndoe",
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


@router.post("/token", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = ControllerUsers.authenticate_user(
        fake_users_db, form_data.username, form_data.password
    )
    if not DbUser:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate"},
        )
    access_token_expires = timedelta(minutes=os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))
    access_token = ControllerUsers.create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@router.post("/users/me")
async def read_users_me(
    current_user: DbUser = Depends(ControllerUsers.get_current_active_user)
):
    return current_user


@router.post("/user/register", response_model=ResponseRegisterUser)
async def register_user(
    username: str = Query(...), email: str = Query(...), password: str = Query(...)
):
    response = None
    try:
        request_user_register = RequestRegisterUser()
        request_user_register.username = username
        request_user_register.email = email
        request_user_register.password = password

        response = await ControllerUsers.register_user(request=request_user_register)
    except Exception as e:
        raise HTTPException(status_code=400, detail="this works as expected")

    return response


@router.post("/user/login", response_model=ResponseLoginUser)
async def login_user(email: str = Query(...), password: str = Query(...)):
    response = None
    try:
        request_login_user = RequestLoginUser()
        request_login_user.email = email
        request_login_user.password = password

        response = ControllerUsers.login_user(request=request_login_user)

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    return response
