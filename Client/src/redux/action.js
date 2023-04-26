import { ADD_FAV, REMOVE_FAV, FILTER,ORDER, CLEAR, PERSONAJES, EPISODES,CLEARPER} from "./action-type";
import axios from 'axios';
/* export const addFav = (personaje)=>{
  return {
    type: ADD_FAV,
    payload: personaje
  }
} */
export const addFav = (personaje) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
    try {
      const {data} = await axios.post(endpoint, personaje);
        return dispatch(
          {
           type: ADD_FAV,
           payload: data,
        });
    } catch (error) {
      console.log("error")
    }
     
  };
};

/* export const removeFav = (id)=>{
  return {
    type: REMOVE_FAV,
    payload: id
  }
} */

export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
    try {
      const {data} = await axios.delete(`${endpoint}/${id}`)
        return dispatch({
           type: REMOVE_FAV,
           payload: data,
     });
    } catch (error){
      console.log("error")
    }
  };
};

export const filterCards = (gender)=>{
  return{
    type: FILTER,
    payload: gender
  }
}

export const orderCards = (order)=>{
  return{
    type: ORDER,
    payload: order
  }
}

export const clear = ()=>{
  return {
    type: CLEAR
  }
}

export const getPerson = (id)=>{
  const URL_BASE = "http://localhost:3001/rickandmorty/character";
  return function(dispatch){
    fetch(`${URL_BASE}/${id}`).then(res=>res.json())
    .then(data=>dispatch({type: PERSONAJES, payload:data}))
  }
}

export const getCap = (episodes)=>{
  return function(dispatch){
    for (let i = 0; i<episodes?.length;i++){
      console.log(episodes[i])
      fetch(episodes[i]).then(res=>res.json())
      .then(data=> dispatch({type: EPISODES, payload: data}))
    }
  }
}

export const clearper = ()=>{
  return {type:CLEARPER}
}