from main import app


@app.get("/")
async def hello():
    return {"message": "Hello World!"}

# upload pdf


# receive question and give answer  (async)