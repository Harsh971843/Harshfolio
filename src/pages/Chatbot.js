import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

function Chatbot() {
  const genAI = new GoogleGenerativeAI("AIzaSyDk6uDwN2QIgWIUfecg6iDTbOv09C5rVO8");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Automatically open chatbot after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setChatHistory([
        { sender: 'bot', text: 'Hello, I am Harshfolio Bot. How may I help you?' },
      ]);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { sender: 'user', text: message };
    let botResponse;

    try {
      const result = await model.generateContent(message);
      botResponse = { sender: 'bot', text: result.response.text() };
    } catch (error) {
      botResponse = { sender: 'bot', text: 'Sorry, I encountered an error. Please try again.' };
    }

    // Update chat history with both user and bot messages
    setChatHistory((prev) => [...prev, userMessage, botResponse]);
    setMessage(''); // Clear the input field
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleUserMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleClearChat = () => {
    setChatHistory([]);
    setMessage('');
  };

  return (
    <div>
      {isOpen ? (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '350px',
            height: '500px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header with Close Button */}
          <div
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '15px',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Harshfolio Bot</span>
            <button
              style={{
                background: 'transparent',
                color: '#fff',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
              }}
              onClick={handleToggle}
            >
              ✖
            </button>
          </div>

          {/* Chatbot Content */}
          <div
            style={{
              padding: '10px',
              flex: 1,
              overflowY: 'auto',
              backgroundColor: '#f8f9fa',
            }}
          >
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                style={{
                  textAlign: chat.sender === 'user' ? 'right' : 'left',
                  marginBottom: '10px',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: chat.sender === 'user' ? '#007bff' : '#e9ecef',
                    color: chat.sender === 'user' ? '#fff' : '#000',
                    padding: '8px 12px',
                    borderRadius: '20px',
                    maxWidth: '80%',
                    wordBreak: 'break-word',
                  }}
                >
                  <strong>{chat.sender === 'user' ? 'You' : 'Bot'}:</strong> {chat.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div style={{ padding: '10px', backgroundColor: '#fff' }}>
            <input
              type="text"
              value={message}
              onChange={handleUserMessage}
              placeholder="Type your message here..."
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ced4da',
                borderRadius: '20px',
                marginBottom: '10px',
                outline: 'none',
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
              }}
            >
              Send
            </button>
            <button
              onClick={handleClearChat}
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                marginTop: '10px',
              }}
            >
              Clear Chat
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleToggle}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            fontSize: '24px',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            zIndex: 1000,
          }}
        >
          💬
        </button>
      )}
    </div>
  );
}

export default Chatbot;
