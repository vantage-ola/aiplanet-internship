import React, { useState } from 'react';
import axios from 'axios';

const AskAI = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendMessage = async () => {
        if (inputText.trim() !== '') {
            const newUserMessage = { sender: 'user', text: inputText };
            setMessages([...messages, newUserMessage]);
            setInputText('');

            try {
                const response = await axios.post('http://localhost:8000/handle', { chat_message: inputText });
                const newBotMessage = { sender: 'bot', text: response.data.message };
                setMessages(prevMessages => [...prevMessages, newBotMessage]);
            } catch (error) {
                console.error('Error sending message:', error);
            }
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
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default AskAI;
