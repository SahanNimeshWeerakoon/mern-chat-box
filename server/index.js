const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();

app.use(cors());

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

server.listen(4000, () => `Server is running at port 4000`);