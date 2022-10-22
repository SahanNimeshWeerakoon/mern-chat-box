import React, { useState } from 'react'
import Home from './pages/home/Home'
import io from 'socket.io-client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

const socket = io.connect('http://localhost:4000');

function App() {
  const [ username, setUsername ] = useState()
  const [ room, setRoom ] = useState()

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home username={username} setUsername={setUsername} room={room} setRoom={setRoom} socket={socket} />} />
        </Routes>
      </div>
    </Router>
    );
}

export default App;
