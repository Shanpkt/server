    const express= require('express')

    const app=express()

app.use(express.json());
let cors = require("cors");
    const connectDB =require('./databaseConnect')

        const userSdata=require('./schema/schema')
        const alltypesofdoctor=require('./schema/cateo');
const doctorlist = require('./schema/doctorList');
const slots = require('./schema/slots');
const cloaths = require('./schema/custom');
//const studentMarkModal = require('./schema/studentMarks');
//const studentDataModal = require('./schema/studentData');
const studentDataModal1 = require('./schema/studentData');
const studentMarkModal1 = require('./schema/studentMarks');
const logdata = require('./schema/userdata');
const houseinfo = require('./schema/house');
const mylotschema = require('./schema/mylot');
const routs = require('./schema/routs');
const routes = require('./schema/routs');
       
app.use(
    cors({
        origin:"http://localhost:3000"
    })
)

const PORT = 4000;

app.post('/type',async function(req,res){

    const a= await alltypesofdoctor.create(req.body)
  
      return res.send(a)
  })

  app.get('/type',async function(req,res){

    const a= await alltypesofdoctor.find()
        
        // console.log(a)
      return res.send(a)
  })

////////////////////////////////////////////////////////
app.post('/signup',async function(req,res){

    const a= await userSdata.create(req.body)
  
      return res.send(a)
  })

app.get('/login',async function (req, res)  {
    
      const a=  await userSdata.find()

      return res.send(a)
    
})



app.get('/',async function(req,res){
     
      var dummy={name:"shantanu"}

    return res.send(dummy)
})

//////////////////////////////////////////

app.post('/getdoctor',async function(req,res){
     
    let list= await doctorlist.create(req.body)
  
    return res.send(list)
  })


app.get('/getdoctor/:cat',async function(req,res){
     
  let list= await doctorlist.find({ cat:{$eql:res.params.cat}})

  return res.send(list)
})

///////////////////////////////////

app.post('/slot',async function(req,res){
     
    var a= await slots.create(req.body)
 // var a= await req.body
  return res.send(a)
})


app.get('/slot',async function(req,res){
     
 // var a= await slots.findOne({ "_id": { $eq:"646f5fca5bfb4be928d84761" }})
  //  a.slots.forEach(e => {
      
  //    if(e.time=="2pm"){
  //      e.status=false
  //    }
          
  //    })
  //   console.log(a.slots)
  // var a=await slots.find()
      
    var b=await docto.updateOne({ "_id": { $eq:"646f806be01bd673d0be149f" }},{$set:{ "slots.$[e].status":false}},{arrayFilters:[{"e.time":{$eq:"2pm"}}]})   
    slots.create()

    
    var a=await slots.find()
return res.send(a)
})





/////////////////////////////
app.post('/studentdata',async function(req,res){
     
  var a= await studentDataModal1.create(req.body)
// var a= await req.body
return res.send(a)
})

app.post('/studentmark',async function(req,res){
     
  var a= await studentMarkModal1.create(req.body)
// var a= await req.body
return res.send(a)
})


app.post('/studentup',async function(req,res){

  var mid="647a2b8c7a8de92455337b15"
     
  var a= await studentDataModal1.updateOne({"_id":{$eq: "647a390f198b44fb511ac08f"}},  { $push: { StudentMarks:"647a3921198b44fb511ac091"} })
// var a= await req.body
return res.send(a)
})


app.get('/student',async function(req,res){
     
  var a= await studentDataModal1.findOne({"_id":{$eq: "647a390f198b44fb511ac08f"}}).populate('StudentMarks').exec()
// var a= await req.body
return res.send(a.StudentMarks)
})







//////////////////////////////////////////

app.post('/logdat',async function(req,res){
     
 var a= await logdata.create(req.body)
 //var a= await req.body
return res.send(a)
})

 

app.post('/logdata',async function(req,res){
     
  var a= await logdata.updateOne({Name:"raj"},{$pull:{Slots:"2pm"}})
  //var a= await req.body
 return res.send(a)
 })

 app.get('/logdata',async function(req,res){
     
  var a= await logdata.findOne({Name:"raj"})
  //var a= await req.body
 return res.send(a)
 })


//  app.post('/mylot',async function(req,res){
     
//   var a= await mylotschema.create(req.body)
//   //var a= await req.body
//  return res.send(a)
//  })

 app.post('/mylot',async function(req,res){
     
  var a= await mylotschema.updateOne({ "_id": { $eq:"64844c76a400c8e7a1aef7bd" }},{$set:{ "slots.$[e].status":false}},{arrayFilters:[{"e.time":{$eq:"2pm"}}]})
  //var a= await req.body
    if(a.modifiedCount==1){
 var b= await  mylotschema.updateOne({ "_id": { $eq:"64844c76a400c8e7a1aef7bd" }},{ $push: { "collect": "123455" } })
  // console.log("hello")
}
 return res.send(a)
 })

 app.post('/pagi',async function(req,res){
     
  var a= await routes.create(req.body)
  //var a= await req.body
 return res.send(a)
 })

 app.get('/pagi',async function(req,res){
     
  var a= await routes.find().skip(0).limit()
  //var a= await req.body
 return res.send(a)
 })





 app.listen(PORT,async function(){
    await connectDB()
    console.log("Server listening on Port", PORT);
})