import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ChampionMain({data}) {

    const champ = useParams()

    const champId = champ.id


    


  return (
    <>
    <div className="flex flex-col justify-center pt-10 ">
        <div className="flex justify-center">
        <img className='' src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_0.jpg`}></img>
        </div>
        
        <div className="flex justify-center text-center text-white py-5 ">
            <div className="flex flex-col w-1/2 ">
            <h1 className='font-bold text-6xl text-yellow-500'>{data.id}</h1>
            <p className='capitalize py-4 text-xl'>{data.title}</p>
            <p className=''> {data.lore} </p>
            </div>
            
        </div>
       
    </div>
    </>
  )
}

export default ChampionMain