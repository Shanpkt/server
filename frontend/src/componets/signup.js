import React from 'react'
import { useSelector } from 'react-redux'

function Signup() {
 const dataRedux=useSelector((e)=>{return e.users})
  

console.log(dataRedux)
  return (
    <div>{dataRedux[0]._id}</div>
  )
}

export default Signup