const mongoose=require('mongoose')


const proutes= new mongoose.Schema({
    
    stops:{type:Number},
    airplane:{type:String}


    
})



const routes=mongoose.model("proutes",proutes)

module.exports=routes