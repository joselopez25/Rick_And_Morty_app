import axios from "axios";
import { useParams} from "react-router-dom";
import { useState,useEffect} from "react";
import style from './Details.module.css'
import Episodes from "./Episodes";
import {useSelector, useDispatch} from "react-redux";
import { getCap } from "../../redux/action";
const Details = ()=>{
  const dispatch = useDispatch()
  const personaje = useSelector(state =>state.personaje)
  let episode = 0;
  let location = '';
  let origen = '';
  let [character,setCharacter]=useState([]);
  const params = (useParams())
  /* const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
  const API_KEY = '54e18e988220.700fc28ffa7d0075084c'   */
  const URL_BASE = "http://localhost:3001/rickandmorty/character"
  const id = params?.id
  useEffect(() => {
    dispatch(getCap(personaje.episode))
    axios(`${URL_BASE}/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       }
    });
    return setCharacter({});
 }, [personaje, id, dispatch]);
  if(character.episode){
    episode = character.episode.length
    location = character?.location?.name
    origen = character?.origin?.name
  }
  return (
    <div>
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
        <Episodes id={id}/>
    </div>
         
  )
}

export default Details;