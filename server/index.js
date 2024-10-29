const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Create an Express app
const app = express();
const PORT = 4000;

// Create an HTTP server and wrap the Express app with it
const server = http.createServer(app);

// Integrate Socket.IO with the HTTP server
const io = socketIo(server, {
  cors: {
    origin: '*', // Allow requests from any origin
    methods: ['GET', 'POST']
  }
});

// Serve a simple API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello world' });
});

// Listen for new WebSocket connections
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Emit a welcome message to the connected client
  socket.emit('welcome', { message: 'Welcome to the WebSocket server!' });

  // Listen for messages from the client
  socket.on('message', (data) => {
    console.log('Message received from client:', data);

    // Broadcast the message to all other clients
    socket.broadcast.emit('message', data);
  });

  // Handle client disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});