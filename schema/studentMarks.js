const mongoose=require('mongoose')


const studentMark = new mongoose.Schema({
 
    Subject:{type:String,trim:true},
    Marks:{type:String}
  
})


const studentMarkModal1=mongoose.model("studentMark_ref",studentMark)

module.exports=studentMarkModal1