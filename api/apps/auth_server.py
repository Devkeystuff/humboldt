from models.requests.request_register_user import RequestRegisterUser
from models.requests.response_register_user import ResponseRegisterUser
from models.requests.request_login_user import RequestLoginUser
from models.requests.response_login_user import ResponseLoginUser

from controllers.controller_users import ControllerUsers

from fastapi import FastAPI, Query, HTTPException


auth_server = FastAPI()


@auth_server.post("/user/register", response_model=ResponseRegisterUser)
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


@auth_server.post("/user/login", response_model=ResponseLoginUser)
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
