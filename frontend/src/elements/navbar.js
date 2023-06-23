import React from 'react'
import  './navBar.css'

function Navbar() {
  return (
    <div className='mainBox' >
        <div className='mainBox_innerBox'>
            <div className='logo_box'>
                <img src='./logo_medi.jpg'  />
                <h4>medic</h4>

            </div>
            <ul className='navbar_list'>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar