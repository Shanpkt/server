const mongoose=require('mongoose')


const doctors= new mongoose.Schema({
    Name:{type:String,trim:true},
    image:{type:String},
    cat:{type:String},
    degree:{type:String},
    
})



const doctorlist=mongoose.model("doctor",doctors)

module.exports=doctorlist