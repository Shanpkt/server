const mongoose=require('mongoose')


const studentData = new mongoose.Schema({
    StudentMarks:[{type: mongoose.Schema.Types.ObjectId,ref:'studentMark_ref'}],
    Name:{type:String,trim:true},
    Age:{type:String},
    Place:{type:String},

       

})


const studentDataModal1=mongoose.model("studentData_ref",studentData)

module.exports=studentDataModal1