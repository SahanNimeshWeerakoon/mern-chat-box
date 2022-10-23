const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

const CHAT_BOT = 'ChatBot';

io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);

    socket.on('join_room', ({ username, room }) => {
        socket.join(room);

        let __createdtime__ = Date.now();

        // send message to all users in the room apart from the joined user
        socket.to(room).emit('recieve_message', {
            message: `${username} has joined the chat room`,
            username: CHAT_BOT,
            __createdtime__
        });

        // send welcome message to the user just joined
        socket.emit('recieve_message', {
            message: `Welcome ${username}`,
            username: CHAT_BOT,
            __createdtime__
        });
    });
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

server.listen(4000, () => `Server is running at port 4000`);