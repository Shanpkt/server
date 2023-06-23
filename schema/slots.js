const mongoose=require('mongoose')


const slot= new mongoose.Schema({
    name:{type:String,trim:true},
    slots:{type:Array}
    
})



const slots=mongoose.model("slot",slot)

module.exports=slots