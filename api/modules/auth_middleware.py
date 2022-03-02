import os
import jwt
from typing import List, Tuple
from fastapi_auth_middleware import FastAPIUser
from fastapi import HTTPException
from starlette.authentication import BaseUser


def verify_authorization_header(auth_header: str) -> Tuple[List[str], BaseUser]:
    # token = auth_header.split(" ")
    # if len(token) < 2:
    #     raise HTTPException(status_code=400, detail="Token not present")
    # token = token[1]

    # # Verify token
    # token = jwt.decode(token, os.getenv("ACCESS_TOKEN_SECRET"), algorithms=["HS256"])
    user = FastAPIUser(first_name="Code", last_name="Specialist", user_id=1)
    scopes = []

    return scopes, user
