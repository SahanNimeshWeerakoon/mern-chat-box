import React, { useState, useEffect } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

const ChatPage = ({ socket }) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
      socket.on('welcome', (data) => {console.log("welcome", {data});});
        socket.on('messageResponse', (data) => {setMessages([ ...messages, data ])})
        socket.on('message', (data) => {console.log(data, "message")})
    }, [socket, messages]);
  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        <ChatBody messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;