# FastAPI PDF Upload and NLP Response App (AI-PLANET-INTERNSHIP)
This project is a FastAPI application that allows users to upload PDF files, extract text from them, and interact with a chatbot to get responses based on the extracted text. The application includes automatic deletion of uploaded files every 30 minutes to manage storage efficiently.


## Features
1. Upload PDF files
2. Extract text from uploaded PDFs
3. Interact with a chatbot to get responses based on extracted text

# SETUP / HOW TO USE
## BACKEND

### 1. Clone the repository:

```shell
git clone git@github.com:vantage-ola/aiplanet-internship.git
```

### 2. Create local environment `utils/.env`:

Create utils/.env file. Get your Google Cloud API key here [https://docs.genius.com/](https://docs.genius.com/) and place it in this variable.

```
GOOGLE_API_KEY=[GOOGLE_API_KEY]
```
### 3. Create a Virtual environment with `virtualenv`:



### 4. Pip install `requirements.txt'

Node.js and npm (for the frontend)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/your-repo.git
cd your-repo
Install Python dependencies:

bash
Copy code
pip install -r requirements.txt
Install frontend dependencies:

bash
Copy code
cd frontend
npm install
cd ..
Setup
Create a .env file in the root directory with the following content:

makefile
Copy code
GOOGLE_API_KEY=your_google_api_key
Ensure you have an uploads directory in the root directory:

bash
Copy code
mkdir uploads
Running the Application
Start the FastAPI server:

bash
Copy code
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
Start the frontend application:

bash
Copy code
cd frontend
npm start
Usage
Upload a PDF: Use the /upload endpoint to upload a PDF file.
Interact with the Chatbot: Use the /handle endpoint to send a message and get a response based on the extracted text from the uploaded PDF.
Example: Upload a PDF
bash
Copy code
curl -X 'POST' \
  'http://localhost:8000/upload' \
  -H 'accept: application/json' \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@yourfile.pdf'
Example: Interact with the Chatbot
bash
Copy code
curl -X 'POST' \
  'http://localhost:8000/handle' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "chat_message": "What is the main topic of the document?"
}'
Frontend
The frontend is a basic React application. To set it up and run:

Navigate to the frontend directory:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm start
File Structure
css
Copy code
├── main.py
├── routes.py
├── utils
│   ├── extract_text.py
│   └── process_nlp.py
├── uploads
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   └── ...
├── requirements.txt
├── .env
└── README.md
License
This project is licensed under the MIT License.

Replace yourusername/your-repo with your actual GitHub username and repository name. Ensure that the requirements.txt file includes all necessary Python packages for your project.