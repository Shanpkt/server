const mongoose=require('mongoose')


const house= new mongoose.Schema({
    houseName:{type:String,trim:true},
    number:{type:Number}
    
})



const houseinfo=mongoose.model("house",house)

module.exports=houseinfo