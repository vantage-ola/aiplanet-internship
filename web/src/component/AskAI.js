import React, { useState } from 'react';

const AskAI = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputText.trim() !== '') {
            const newUserMessage = { sender: 'user', text: inputText };
            setMessages([...messages, newUserMessage]);
            setInputText('');
            // Simulate bot reply after a short delay
            setTimeout(() => {
                const newBotMessage = { sender: 'bot', text: `You said: "${inputText}". This is a reply from the backend.` };
                setMessages([...messages, newUserMessage, newBotMessage]);
            }, 1000);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chat-container">
            <h2>Chat</h2>
            <div className="message-container">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        <span>{message.sender === 'user' ? 'You' : 'Bot'}:</span> {message.text}
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress} // Add event listener for Enter key press
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default AskAI;
