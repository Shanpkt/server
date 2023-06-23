

const mongoose=require('mongoose')

const uri="mongodb+srv://shaan:shaan@cluster0.cmbuxv1.mongodb.net/?retryWrites=true&w=majority"


                        
const connectDB=()=>{


    return mongoose.connect(uri,{

      
      useNewUrlParser: true,
      useUnifiedTopology: true,
     

    }).then(()=>{console.log("yes")}).catch(()=>{console.log("nooooo")})

    
}


 
module.exports=connectDB