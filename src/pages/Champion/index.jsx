import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../Components/Navbar';

const Champion = () => {
    
    const champ = useParams()

    const champId = champ.id

    const [data, setData] = useState("");

    useEffect(()=>{
        axios
        .get("http://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/champion/Aatrox.json")
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
    
    console.log(data)

    return (
        <>
        <Navbar champ={champId}/>
        </>
    )
};

export default Champion;

