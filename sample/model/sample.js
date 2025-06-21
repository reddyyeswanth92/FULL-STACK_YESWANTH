var mongoose=require('mongoose');
var sampleSchema=new mongoose.Schema({
    username:String,
    password:String,
})

module.exports=mongoose.model('login',sampleSchema)