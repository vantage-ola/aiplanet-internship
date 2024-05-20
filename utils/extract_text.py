import pymupdf
import os
from unidecode import unidecode

#simple function to extract text from pdf.
def extract_text(input_doc_path='input_data/sample.pdf'):

    doc = pymupdf.open(input_doc_path) # open a document
    doc_name = os.path.splitext(os.path.basename(input_doc_path))[0]   #extract document name from document path
    
    #out = open(f"output_text/{doc_name}.txt", "wb") # create a text output

    extracted_text = ""
    for page in doc: # iterate the document pages
        
        text = unidecode(page.get_text()) #some text in unicode(strange symbols), represent in ASCII
        #encoded_text = text.encode("utf8") # get plain text (is in UTF-8)
        extracted_text += text + "\n"
        #out.write(encoded_text) # write text of page
        #out.write(bytes((12,))) # write page delimiter (form feed 0x0C)
    #out.close()
    doc.close()

    print(f"{doc_name}.pdf extracted to text :)")
    
    return extracted_text