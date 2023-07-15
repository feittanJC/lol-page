import React from 'react'
import logo from '../assets/logo.webp'

function Navbar() {
  return (
    <header>
        <div className="flex justify-center h-[120px] pt-2 bg-black pb-2 shadow-lg shadow-red-500" >
            <img src={logo} alt="" className='w-100 h-100'/>
        </div>
    </header>
  )
}

export default Navbar