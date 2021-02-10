const express = require('express'); // importing a CommonJS module
const morgan = require("morgan")
const helmet = require("helmet")

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(helmet())
server.use(express.json(), morgan("dev"));
//server.use(morgan("dev"))

server.use('/api/hubs', hubsRouter);

server.get('/', (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
  `);
});

module.exports = server;
