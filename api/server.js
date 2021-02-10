const express = require('express'); // importing a CommonJS module
const morgan = require("morgan")
const helmet = require("helmet")

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();


const logQuote = (coin) => (req,res,next) =>{
  if(coin === "dime" || coin ==="penny" || coin === "nickel" || coin ==="quarter"){
    console.log(`A ${coin} saved is a ${coin} not enjoyed (:`)
    next()
  }else{
    res.json("not a valid coin")
  }
}

const checkWord = (req,res,next) =>{
  
}



// function logQuote(req,res,next){
//   console.log("A penny saved is a penny not enjoyed (:")
//   next()
// }


server.use(helmet())
server.use(express.json(), morgan("dev"));
server.use(logQuote("whatever"))
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
