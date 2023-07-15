import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Card() {
  const [champion, setChampion] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://ddragon.leagueoflegends.com/cdn/13.13.1/data/es_MX/champion.json"
      )
      .then(function (response) {
        setChampion(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("Enviado");
      });
  }, []);

    return <>
    
      <div className="flex flex-wrap flex-row justify-around " >
        {Object.entries(champion).map(([championName, championData]) => {
          const championId = championData.id;
          const championTitle = championData.title;
          return (
            <Link to={`/${championId}`} className="w-[15%] mx-10 p-0">
            <div
              className="bg-black text-center flex flex-col h-[500px] w-[100%]  my-5 hover:shadow-xl hover:shadow-gray-800 transition duration-500 hover:scale-110 ease-in-out cursor-pointer rounded-xl pb-3 "
              key={championId}
            >
              <img
                className="h-[90%] rounded-xl"
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_0.jpg`}
                alt=""
                height="100%"
              />
              <h1 className="text-2xl text-yellow-500 font-bold">{championName}</h1>
              <p className="text-xs text-white first-letter:capitalize">{championTitle}</p>
            </div>
            </Link>
          );
        })}
      </div>
    </>;
  };

  


export default Card;
