const mongoose=require('mongoose')


const cateo= new mongoose.Schema({
    cat_type:{type:String,trim:true},
    image:{type:String}
    
})



const alltypesofdoctor=mongoose.model("allcateo",cateo)

module.exports=alltypesofdoctor