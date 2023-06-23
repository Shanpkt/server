const mongoose=require('mongoose')


const cloath= new mongoose.Schema({
    Name:{type:String,trim:true},
    color:{type:String}
    
})



const cloaths=mongoose.model("cloath",cloath)

module.exports=cloaths