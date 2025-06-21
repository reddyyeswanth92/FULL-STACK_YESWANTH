var express = require('express');
var router = express.Router();
var sample=require('../model/sample');
var signup=require('../model/signup')
var mongoose=require('mongoose');

//signup
router.post("/adduser",(req,res)=>{
  signup.findOne({username:req.body.username})  
  .then((existeddbusername)=>{
    if(existeddbusername==null){
        var user=new signup(req.body);
        user.save()
        .then((data)=>res.send({"status":"user signed-in"}))
        .catch((err)=>console.log(err))
    }
    else{
      res.send({"status":"username already existed"})
    }
  })
})

//login

router.post("/login",(req,res)=>{
  signup.findOne({username:req.body.username})
  .then((details)=>{
    if(details!==null){
      if(details.password==req.body.password){
        res.send({"status":"login successfull"})
      }
    else{
      res.send({"status":"login failed"})
    }
    }
    else{
      res.send({"status":"user not-found signup for login"})
    }
  })
})

module.exports = router;
