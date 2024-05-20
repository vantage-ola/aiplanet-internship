import React, { useState, useRef } from 'react';

const PdfUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!selectedFile) {
            setUploadStatus('No file selected.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch('http://localhost:8000/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setUploadStatus('File uploaded successfully.');
            } else {
                setUploadStatus('Failed to upload file.');
            }
        } catch (error) {
            setUploadStatus('Error uploading file: ' + error.message);
        }
    };

    return (
        <div>
            <div className="pdf-upload-container" onClick={handleButtonClick}>
                <div className="upload-text">Upload your PDF</div>
                <input
                    accept="application/pdf"
                    id="pdf-upload"
                    type="file"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                />
            </div>
            
            <div className='submit'>
            <button onClick={handleFormSubmit}>Submit</button>
            </div>

            <div className='file'>
            {uploadStatus && <div>{uploadStatus}</div>}
            {selectedFile && <div>{selectedFile.name}</div>}    
            </div>



        </div>
    );
};

export default PdfUpload;
