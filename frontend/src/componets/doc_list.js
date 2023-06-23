import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Doc_list() {
    let data=useSelector((e)=>{return e.users})
 
    useEffect(() => {

      fetchall()
     
    }, );

    function fetchall(){
       console.log(data[0])
       axios.get(`http://localhost:4000/getdoctor/${data[0]}`).then((res)=>console.log(res.data))
    }

  return (
    <div>Doc_li</div>
  )
}

export default Doc_list