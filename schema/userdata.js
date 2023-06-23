const mongoose=require('mongoose')


const Userinfo= new mongoose.Schema({
    Name:{type:String,trim:true},
    Slots:{type:Array}
    
})



const logdata=mongoose.model("userinfo",Userinfo)

module.exports=logdata