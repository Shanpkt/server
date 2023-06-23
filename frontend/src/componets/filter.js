import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function Filter() {
    const [fetchdatas,setfetch]=useState()
    const [age,setage]=useState()
    const [name,setname]=useState()

useEffect(() => {

    axios.get("http://localhost:4000/login").then((e)=>{setfetch(e.data)})

}, [])

function filter(){
     var value=20

    let filterobject={ age:{$eql:value}  }

   //  console.log(filterobject)
        setfetch(filterobject)

}

function filterfetch(){
    
    axios.post("http://localhost:4000/login",fetchdatas).then((e)=>{console.log(e.data)})  
   


}

function fetchdata(){
  
    
}
  return (
    <div>
     {fetchdatas && fetchdatas.filter((e)=>name!=""?e.Name==name:e.Name && age?e.age==age:e.age).map((e)=>{
       return <h3>{e.Name}</h3>
     })}
     
     
    
    </div>
  )
}

export default Filter