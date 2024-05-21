AIPLANET-INTERNSHIP
# FastAPI PDF Upload and NLP Response App (AI-PLANET-INTERNSHIP)
This project is a FastAPI application that allows users to upload PDF files, extract text from them, and interact with a chatbot to get responses based on the extracted text. 


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

Create utils/.env file. Get your Google Cloud API key here [Google Cloud](https://console.cloud.google.com/apis/credentials?) and place it in this variable.

```
GOOGLE_API_KEY=GOOGLE_API_KEY
```
### 3. Create a Virtual environment with `virtualenv`:
```
python3 -m venv [name of virtual env folder]
```

### 4. Pip install `requirements.txt'
```
pip install -r requirements.txt
```

### 5. Run the FastAPI server
```
python3 main.py
```
## FRONTEND

### 6. Open a New Terminal and change to '/web' directory
```
cd /web
```
### 7. Install Npm Packages
```
npm install
```
### 8. Run the React Application and view it at 'localhost:3000'
```
npm start
 ```



