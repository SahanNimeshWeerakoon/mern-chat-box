import React, { useState } from 'react';

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if(message.trim() && localStorage.getItem('userName')) {
        socket.emit('message', {
            text: message,
            socketId: socket.id,
            id: `${socket.id}${Math.random()}`,
            name: localStorage.getItem('userName'),
        });
    }
    setMessage('');
  };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          className="message"
          placeholder="Write message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;