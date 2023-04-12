import axios from "axios";
import { useParams} from "react-router-dom";
import { useState,useEffect} from "react";
import style from './Details.module.css'
const Details = ()=>{
  let episode = 0;
  let location = '';
  let origen = '';

  let [character,setCharacter]=useState([]);
  const params = (useParams())
  const id = params.id
  const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
  const API_KEY = '54e18e988220.700fc28ffa7d0075084c'  
  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       }
    });
    return setCharacter({});
 }, [id]);
  
  if(character.episode){
    episode = character.episode.length
    location = character.location.name
    origen = character.origin.name
  }
  
  return (
    <div className={style.info}>
      <div className={style.text}>
      <h3>{`Nombre: ${character?.name}`}</h3>
      <h3>{`Estado: ${character?.status}`}</h3>
      <h3>{`Escpecie: ${character?.species}`}</h3>
      <h3>{`Genero: ${character?.gender}`}</h3>
      <h3>Location: {location}</h3>
      <h3>Origen: {origen}</h3>
      <h3>Aparece en {episode} episodio/s</h3>
      </div>
      <img className={style.img} src={character?.image} alt={character?.name} />
    </div>
         
  )
}

export default Details;