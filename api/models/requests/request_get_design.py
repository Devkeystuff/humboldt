from dataclasses import dataclass
from dataclasses_json import dataclass_json


@dataclass
@dataclass_json
class RequestGetDesign:
    api_key: str = ""
    design_uuid: str = ""
