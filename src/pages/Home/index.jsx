import React from 'react'
import Navbar from '../../Components/Navbar'
import Card from '../../Components/Card'



function Home() {
  return (
    <>
     <div className='bg-gray-300 '>
          <Navbar />
          <div className="flex justify-center mt-8 mb-3">
          
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl"> Lista de personajes de <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-500 from-yellow-600">League of Legends</span></h1>

          </div>
          

          <Card/>


      </div>
    </>
  )
}

export default Home