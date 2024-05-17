import React, { useState, useRef } from 'react';

const PdfUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
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
        </div>
    );
};

export default PdfUpload;
