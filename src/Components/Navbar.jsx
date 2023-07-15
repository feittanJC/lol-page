import React, { useState } from 'react'
import logo from '../assets/logo.webp'

function Navbar({champ}) {

  const [personaje,setPersonaje] = useState(false);

  var justify = ""

  var padding = ""


  champ ? justify = "between" : justify="around";
  champ ? padding = "px-16" : padding="px-0";

  return (
    <header>
        <div className={`flex justify-${justify} h-[120px]  pt-2 ${padding} bg-black pb-2 shadow-lg shadow-red-500`} >
            <div className="w-95 h-100 flex items-center">
            <img src={logo} alt="" className='w-100 h-[70%]'/>
            </div>
            
            {champ && ( // Verifica si champ tiene un valor
          <div className="flex items-center">
            <h1 className='text-white text-xl font-bold'> {champ} </h1>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${champ}.png`}
              alt="" className="h-[70%] pl-6 "
            />
          </div>
        )}
        </div>
        
    </header>
  )
}

export default Navbar