from decouple import config
from llama_index.llms.gemini import Gemini
from llama_index.core.llms import ChatMessage


GOOGLE_API_KEY= config('GOOGLE_API_KEY')
llm = Gemini(api_key=GOOGLE_API_KEY, model_name="models/gemini-pro")


def answer_text_question(extracted_text: str, question: str) -> str:

    messages = [
    ChatMessage(
        role="system", content=extracted_text
    ),
    ChatMessage(role="user", content=question),
    ]
    response = llm.chat(messages)

    return response


#answer_text_question(extract_text('input_data/sample.pdf'),  "how many years experience do you think i have?")
