from fastapi import FastAPI

app = FastAPI()

import routes  # avoid circular imports. make routing neater :)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
