const serverless = require('serverless-http');

const express = require('express');
const cors = require('cors');

require('dotenv').config();

const server = express();
server.use(cors());
server.use(express.json());

const base_url = process.env.BASE_URL || '';

const scoreRoutes = require('./controllers/scores')

server.use(base_url+'/', scoreRoutes)

// Root
server.get(base_url+'/', (req, res) => res.send('Hello, client!'))

console.log('base'+base_url);
(!!base_url)? module.exports.handler = serverless(server): module.exports = server;