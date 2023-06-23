import { useEffect, useState } from "react"


function Countup() {
 
    const [count,setcount]=useState(0)
 
   allset()
 
    function allset(){

        setcount(count+5)
    }

   


    return count

 
  }
  
  export default Countup
