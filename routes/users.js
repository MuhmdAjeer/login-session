var express = require('express');
const session = require('express-session');
var router = express.Router();


const myEmail = "muhdajeer@gmail.com"
const mypw = 12345
var notLogged =  true;




/* GET users listing. */
router.get('/login',(req,res)=>{
  if(req.session.isLoggedIn){
    console.log('dsafhsdkjdfkgh');
    return res.redirect('/')
  }
  res.render('login')
  
})

router.post('/login', function(req, res, next) {
  
  const {email,password} = req.body
  if(email == myEmail && password == mypw){
    req.session.isLoggedIn = true
    res.redirect('/')
  }else{
    res.render('login',{notLogged})
  }
});

router.get('/logout',(req,res)=>{
  req.session.isLoggedIn = false;
  req.session.destroy((err)=>{
    if(err){
      console.log(err);
    }else{
      res.redirect('/')
    }
  })
})


module.exports = router;
