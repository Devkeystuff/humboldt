from dataclasses import dataclass
from dataclasses_json import dataclass_json


@dataclass
@dataclass_json
class ResponseLoginUser:
    user_id: str = ""
    access_token: str = ""
    is_success: bool = False
    error_code: int = 0
    error_desc: str = ""
