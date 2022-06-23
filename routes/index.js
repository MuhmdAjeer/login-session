var express = require('express');
var router = express.Router();



const isLoggedIn = (req,res,next)=>{
  if(req.session.isLoggedIn){
    next()
  }else{
    res.redirect('users/login')
  }
}

//products lists
const products = [{
  Name : "Iphone 13",
  Description : "Latest Model of iphone",
  Price : 80000,
  image : 'iphone-133'
},{
  Name : "Samsung S20",
  Description : "Samsung new model",
  Price : 74484,
  image : 'samsung-s20'
},{
  Name : "One Plus 6T",
  Description : "New one plus",
  Price : 64564,
  image : 'oneplus-6t'
},{
  Name : "Redmi Note 9",
  Description : "New Redmi model",
  Price : 32434,
  image : 'redmi'
}]


/* GET home page. */
router.get('/',isLoggedIn,(req, res, next) => {
  res.render('index',{products})
});



module.exports = router;
