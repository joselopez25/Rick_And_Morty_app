import {getPerson, clearper } from "../../redux/action";
import {useSelector, useDispatch} from "react-redux";
import { useEffect} from "react";
import { useParams} from "react-router-dom";

const Episodes = ()=>{
  const params = (useParams())
  const id = params.id
  const dispatch = useDispatch()
  const caps = useSelector(state=> state.episodes)
  useEffect(()=>{
    dispatch(getPerson(id))
  return ()=>dispatch(clearper())
  },[id,caps.id])
  return (
    <div>
      {
        caps.map(episode=>
          <div>
            <h4>Nombre: {episode.name}</h4>
            <h4>Dia de emision: {episode.air_date}</h4>
            <h4>Sesion y episodio: {episode.episode}</h4>
          </div>
        )
      }
    </div>

  )
}

export default Episodes;