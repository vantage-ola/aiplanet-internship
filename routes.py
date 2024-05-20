from main import app
from fastapi import UploadFile, File, HTTPException, Depends, Body
from pydantic import BaseModel
import os
from utils.extract_text import extract_text
from utils.process_nlp import answer_text_question
import uuid


# Model for response containing extracted text
class ExtractedText(BaseModel):
    text: str

# Route to handle file upload
@app.post("/upload")
async def upload(file: UploadFile = File(...)):
    global unique_filename
    unique_filename = str(uuid.uuid4()) + "-" + file.filename
    try:
        contents = await file.read()
        with open(f"uploads/{unique_filename}", 'wb') as f:
            f.write(contents)
        return {"message": f"Successfully uploaded {unique_filename}"}
    except Exception as e:
        return {"message": f"There was an error uploading the file(s): {str(e)}"}

class ChatMessage(BaseModel):
    chat_message: str

@app.post('/handle')
async def respond_chat(message: ChatMessage):
    
    extracted_text=extract_text(f"uploads/{unique_filename}")
    bot_answer = answer_text_question(extracted_text, message.chat_message)
    #response_message = f"You said: '{message.chat_message}'. This is a reply from the backend."
    response_message = f"{bot_answer}"
    
    return {"message": response_message}