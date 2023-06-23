import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Master_cat from '../elements/master_cat'
import Doc_list from './doc_list'
import Banner from '../elements/banner'
import ServiceList from '../elements/service_List'

function Home() {

 useEffect(() => {

 },)


 

  return (
   <>

   <Banner/>
   <ServiceList/>
   {/* <Master_cat/> */}
  </>

  )
}

export default Home