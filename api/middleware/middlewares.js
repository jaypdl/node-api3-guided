const Hubs = require("../hubs/hubs-model")

const logQuote = (coin) => (req,res,next) =>{
    if(coin === "dime" || coin ==="penny" || coin === "nickel" || coin ==="quarter"){
      console.log(`A ${coin} saved is a ${coin} not enjoyed (:`)
      next()
    }else{
      res.json("not a valid coin")
    }
  }
  
const checkWord = (req,res,next) =>{
    if(req.query && req.query.word && req.query.word == "turd"){
        res.json(`You can't proceed ${req.query.word} is a bad word`)
    }else{
        next()
    }
}

const checkHubId = async (req,res,next)=>{
    const {id} = req.params
    try{
      const hub = await Hubs.findById(id)
      if(!hub){
        res.status(400).json({message: `No hub with id: ${id}`})
      }else{
        req.hub = hub
        next()
      }
    }catch(e){
      res.status(500).json(`Server error: ${e}`)
    }  
  }
  
  const checkMessage = (req,res,next)=>{
    if(!req.body.text || !req.body.sender){
      res.status(400).json("text and sender required")
    }else{
      next()
    }
  }


  module.exports = {
      logQuote,
      checkWord,
      checkHubId,
      checkMessage
  }