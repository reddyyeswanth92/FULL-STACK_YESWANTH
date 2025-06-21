var mongoose=require('mongoose');
var signupSchema=new mongoose.Schema({
    username:String,
    name:String,
    password:String,
    email:String,
    phone:Number
    
})
module.exports=mongoose.model('singup',signupSchema)