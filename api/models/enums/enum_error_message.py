from enum import Enum


class ErrorMessage(Enum):
    OK = ""
    WRONG_API_KEY = "Wrong api key"
    WRONG_FILE_FORMAT = "Wrong file format"
    EXISTING_USER = "User already existing"
    INCORRECT_CREDENTIALS = "Incorrect email or password"

    def __str__(self):
        return self.value

    def __eq__(self, other):
        return str(self) == str(other)

    def __hash__(self):
        return hash(str(self))
