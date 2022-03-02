from dataclasses import dataclass
from dataclasses_json import dataclass_json


@dataclass
@dataclass_json
class RequestRegisterUser:
    email: str = ""
    username: str = ""
    password: str = ""
