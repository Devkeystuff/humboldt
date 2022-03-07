import datetime
import hashlib
import os
from dotenv import load_dotenv
from fastapi.security import OAuth2PasswordBearer
from models.requests.request_login_user import RequestLoginUser
from models.requests.response_login_user import ResponseLoginUser
from models.requests.request_register_user import RequestRegisterUser
from models.enums.enum_error_message import ErrorMessage
from passlib.context import CryptContext


from controllers.controller_database import ControllerDatabase


class ControllerUsers:
    def __init__(self) -> None:
        load_dotenv()
        self.pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
        self.oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

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
    def verify_password(plain_password: str, hashed_password: str) -> bool:
        return pwd_context.verify(plain_password, hashed_password)

    def get_password_hash(password: str) -> str:
        return pwd_context.hash(password)

    def authenticate_user(fake_db, username: str, password: str):
        user = get_user(fake_db, username)
        if not user:
            return False
        if not verify_password(password, user.password_hash):
            return False
        return user

    def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
        to_encode = data.copy()
        if expires_delta:
            expire = datetime.utcnow() + expires_delta
        else:
            expire = datetime.utcnow() + timedelta(minutes=15)
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(
            to_encode, os.getenv("ACCESS_TOKEN_SECRET"), os.getenv("ALGORITHM")
        )
        return encoded_jwt

    def get_user(db, username: str):
        if username in db:
            user_dict = db[username]
            return DbUser(**user_dict)

    def get_current_user(token: str = Depends(oauth2_scheme)):
        credentials_exception = HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
        try:
            payload = jwt.decode(
                token,
                os.getenv("ACCESS_TOKEN_SECRET"),
                algorithms=[os.getenv("ALGORITHM")],
            )
            username: str = payload.get("sub")
            if username is None:
                raise credentials_exception
            token_data = TokenData(username=username)
        except JWTError:
            raise credentials_exception
        user = get_user(fake_users_db, username=token_data.username)
        if user is None:
            raise credentials_exception
        return user

    def get_current_active_user(current_user: User = Depends(get_current_user)):
        if current_user.disabled:
            raise HTTPException(status_code=400, detail="Inactive user")
        return current_user
