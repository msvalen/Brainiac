const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const scoreRoutes = require('./controllers/scores')
server.use('/', scoreRoutes)

// Root
server.get('/', (req, res) => res.send('Hello, client!'))

module.exports = server;