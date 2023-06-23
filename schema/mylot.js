const mongoose=require('mongoose')


const mylot= new mongoose.Schema({
    name:{type:String,trim:true},
    slots:{type:Array},
    collect:{type:Array}

    
})



const mylotschema=mongoose.model("mylot",mylot)

module.exports=mylotschema