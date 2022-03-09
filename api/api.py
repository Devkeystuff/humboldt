import argparse
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()
parser = argparse.ArgumentParser()
parser.add_argument("-debug", default=True, type=lambda x: (str(x).lower() == "true"))
parser.add_argument("-workers", default=1, type=int)
args, _ = parser.parse_known_args()

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "https://humboldtapparel.herokuapp.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    uvicorn.run("api:app", reload=args.debug, debug=args.debug, workers=args.workers)
