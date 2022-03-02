from dataclasses import dataclass
from dataclasses_json import dataclass_json


@dataclass
@dataclass_json
class RequestLoginUser:
    email: str = ""
    password: str = ""
