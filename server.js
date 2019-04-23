const express = require('express');

const dataRouter = require('./data/data-router');

const server = express();

server.use(express.json());

server.get('/', (red, res) => {
    res.send('Server Is Running...')
})

server.use('/api/post', dataRouter);

module.exports = server;