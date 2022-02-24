import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()


class DbCursor(object):
    def __init__(self):
        super().__init__()
        print(os.getenv("POSTGRES_PASSWORD"))
        self.conn = psycopg2.connect(
            f'dbname={os.getenv("POSTGRES_DB")} '
            f'user={os.getenv("POSTGRES_USER")} '
            f"host=humboldt-dev-db "
            f'password={os.getenv("POSTGRES_PASSWORD")} '
        )
        self.cursor = None

    def __enter__(self):
        self.conn.__enter__()
        self.cursor = self.conn.cursor()
        return self.cursor

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.cursor.__exit__(self, exc_type, exc_val, exc_tb)
        self.conn.__exit__(exc_type, exc_val, exc_tb)
