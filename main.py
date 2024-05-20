from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import threading
import schedule
import os


app = FastAPI()
# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Specify the frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
import routes  # avoid circular imports. make routing neater :)


def delete_upload_files():
    for filename in os.listdir("uploads"):
        os.remove(f"uploads/{filename}")

# Schedule the function to run every 30 minutes
schedule.every(30).minutes.do(delete_upload_files)
def run_scheduler():
    while True:
        schedule.run_pending()

#deletes uploaded file every thirty minutes since there is no DB in the server/ caching service to process the pdf
scheduler_thread = threading.Thread(target=run_scheduler)
scheduler_thread.start()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)