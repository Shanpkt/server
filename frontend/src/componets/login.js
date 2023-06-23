import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adduser } from '../action/slice'


function Login() {

const [logindata,setlogindata]=useState({Name:"string",Password:"string"})
let navigation=useNavigate()
const  updateState=useDispatch()
const dataRedux=useSelector((e)=>{return e.users})

 useEffect(() => {
    let userId = sessionStorage.getItem("id")   
    userId!=null?navigation('/home'):console.log("yet to login")
    },[])


function handel(e){
const{name,value}=e.target
  setlogindata({...logindata,[name]:value})
}

 
  



 async function login(){
    axios.get(`http://localhost:3000/login/${logindata.Name}`).then((res)=>{
    if(res.data=="400"){
        console.log("no account")
    }
    else{
         updateState(adduser(res.data))
        sessionStorage.setItem('id',res.data._id)
        navigation('/home')
    }



})


}


// console.log(logindata) 

 
  
  return (
    <div>

        <input type='text' name='Name' onChange={handel} />
        <input type='text' name='Password' onChange={handel}/>
        <button onClick={login}>login</button>
        
    </div>
  )
}

export default Login