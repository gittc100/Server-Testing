const express = require('express');

const users = require('../users/users.js');

const server = express();

server.use(express.json());

// server.get('/', async (req, res) => {
//   res.status(200).json({ api: 'up' });
// });

server.get('/users', async (req, res) => {
//   const rows = await hobbits.getAll();

//   res.status(200).json(rows);
});

server.post('/greet', (req, res)=>{
//   const {firstName, lastName} = req.body;
//   res.status(201).json({hello: `${firstName} ${lastName}`});
});

module.exports = server;