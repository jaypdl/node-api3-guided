const express = require('express'); // importing a CommonJS module
const morgan = require("morgan")
const helmet = require("helmet")

const hubsRouter = require('./hubs/hubs-router.js');
const mw = require("./middleware/middlewares.js")

const server = express();

// function logQuote(req,res,next){
//   console.log("A penny saved is a penny not enjoyed (:")
//   next()
// }

server.use(helmet())
server.use(express.json(), morgan("dev"));
server.use(mw.logQuote("penny"))
//server.use(morgan("dev"))

server.use('/api/hubs', hubsRouter);

server.get('/', mw.checkWord, (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
  `);
});

module.exports = server;
