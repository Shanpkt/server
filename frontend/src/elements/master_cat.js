import React, { useState } from 'react'
import './Master_cat.css'
import { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { adduser } from '../action/slice';
import { useNavigate } from 'react-router-dom';

function Master_cat() {
    const [data,setdata]=useState()
    let passdata=useDispatch()
    let navigation=useNavigate()
  
  let usese=useSelector((state)=>{return state.users})
useEffect(() => {

allfetch()

},);

function Gohandel(e){

    passdata(adduser(e))
     navigation('/list')
}

function allfetch(){
    axios.get('http://localhost:4000/type').then((res)=>{setdata(res.data)})
}

  return (
    <div className='shutter'>
    <div className='card_main'>{data && data.map((e)=>{

   return <div className='cards' onClick={()=>{Gohandel(e.cat_type)}}>
        <div className='cards_inner'>
            <img className='card_img' src={e.image}/>

        
        
        </div>
        <div className='cards_text'>
             <h3>{e.cat_type}</h3>
             <p>treat your stomach with our care and medicin</p>
             </div>
    </div>
    })
}
    </div>
    </div>
  )
}


export default Master_cat