from fastapi import FastAPI

app = FastAPI(title="FastAPI")


@app.get("/")
def home():
    return {"message": "Hello World"}
