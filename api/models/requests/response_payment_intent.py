from dataclasses import dataclass
from dataclasses_json import dataclass_json


@dataclass
@dataclass_json
class ResponsePaymentIntent:
    client_secret: str = ""
    is_success: bool = False
    error_code: int = 0
    error_message: str = ""
