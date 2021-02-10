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

  module.exports = {
      logQuote,
      checkWord
  }