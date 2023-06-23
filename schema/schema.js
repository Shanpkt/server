const mongoose=require('mongoose')


const userData= new mongoose.Schema({
    Name:{type:String,trim:true},
    password:{type:String},
    mobile:{type:Number},
    age:{type:Number},
    place:{type:String}
})



const userSdata=mongoose.model("userData",userData)

module.exports=userSdata