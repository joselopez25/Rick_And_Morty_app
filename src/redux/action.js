import { ADD_FAV, REMOVE_FAV, FILTER,ORDER, CLEAR, PERSONAJES, EPISODES,CLEARPER} from "./action-type";

export const addFav = (personaje)=>{
  return {
    type: ADD_FAV,
    payload: personaje
  }
}

export const removeFav = (id)=>{
  return {
    type: REMOVE_FAV,
    payload: id
  }
}

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
  return function(dispatch){
    fetch(`https://rickandmortyapi.com/api/character/${id}`).then(res=>res.json())
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