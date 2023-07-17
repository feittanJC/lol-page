import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ChampionAbilities() {
  const champ = useParams();

  const champId = champ.id;

  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://ddragon.leagueoflegends.com/cdn/13.13.1/data/es_MX/champion/${champId}.json`
      )
      .then(function (response) {
        setData(response.data.data[champId]);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("Enviado");
      });
  }, []);

  const x =
    data && data.passive && data.passive.image ? data.passive.image.full : "";

  // ...

  return (
    <div className="flex justify-center pt-24 pb-8">
      <div className="flex justify-start w-[65%]">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champId}_0.jpg`}
          alt=""
        />
        <div className="pl-5">
          <div className="text-white  py-8">
            <h1 className="text-3xl pb-4">Pasiva</h1>
            <div className="flex items-center pl-4">
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/passive/${x}`}
                alt=""
              />
              <p className="pl-8 text-lg">
                {data && data.passive ? data.passive.name : ""}
              </p>
            </div>
          </div>
          <div className="text-white">
            <h1 className="text-3xl">Habilidades</h1>
            <div className="flex items-center pl-4 pt-4">
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/spell/${
                    data && data.spells && data.spells[0] ? data.spells[0].id : ""
                  }.png`}
                alt=""
              />
              <p className="pl-8 text-lg">
                {data && data.spells && data.spells ? data.spells[0].name : ""}
              </p>
            </div>
            <div className="flex items-center pl-4 pt-4">
              <img
               src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/spell/${
                data && data.spells && data.spells[1] ? data.spells[1].id : ""
              }.png`}
                alt=""
              />
              <p className="pl-8 text-lg">
                {data && data.spells && data.spells ? data.spells[1].name : ""}
              </p>
            </div>
            <div className="flex items-center pl-4 pt-4">
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/spell/${
                    data && data.spells && data.spells[2] ? data.spells[2].id : ""
                  }.png`}
                alt=""
              />
              <p className="pl-8 text-lg">
                {data && data.spells && data.spells ? data.spells[2].name : ""}
              </p>
            </div>
            <div className="flex items-center pl-4 pt-4">
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/spell/${
                  data && data.spells && data.spells[3] ? data.spells[3].id : ""
                }.png`}
                alt=""
              />
              <p className="pl-8 text-lg">
                {data && data.spells && data.spells[3]
                  ? data.spells[3].name
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChampionAbilities;
