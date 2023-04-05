import axios from "axios";
import { useParams} from "react-router-dom";
import { useState,useEffect} from "react";
const Details = ()=>{
  let [character,setCharacter]=useState({});
  const params = (useParams())
  const id = params.id  
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          alert('No hay personajes con ese ID');
       }
    });
    
    return setCharacter({});
 }, [id]);
 if(Object.keys(character).length){
  return (
    <div className='divSingle'>
      <h3>{`Nombre: ${character.name}`}</h3>
      <h3>{`Estado: ${character.status}`}</h3>
      <h3>{`Escpecie: ${character.species}`}</h3>
      <h3>{`Genero: ${character.gender}`}</h3>
      <img className='img' src={character.image} alt='imagén' />
    </div>
         
  )}
}

export default Details;