from dataclasses import dataclass
from dataclasses_json import dataclass_json


@dataclass
@dataclass_json
class ResponseRegisterUser:
    user_id: str = ""
    is_success: bool = False
    error_code: int = 0
    error_desc: str = ""
