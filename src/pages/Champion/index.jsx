import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import ChampionMain from '../../Components/ChampionMain';
import ChampionAbilities from '../../Components/ChampionAbilities';
import SkinSlider from '../../Components/SkinSlider';

const Champion = () => {
    
    const champ = useParams()

    const champId = champ.id

    const [data, setData] = useState("");

    useEffect(()=>{
        axios
        .get(`http://ddragon.leagueoflegends.com/cdn/13.13.1/data/es_MX/champion/${champId}.json`)
        .then(function (response) {
            setData(response.data.data[champId]);
            
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            console.log("Enviado");
          });
    },[])
    


    return (
        <div className="bg-gray-800 w-full h-full">
          <Navbar champ={champId}/>
          <ChampionMain data={data}/>
          <ChampionAbilities data={data}/>
          <SkinSlider data={data}/>
        </div>

    )
};

export default Champion;

