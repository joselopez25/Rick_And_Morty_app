import {getPerson, clearper } from "../../redux/action";
import {useSelector, useDispatch} from "react-redux";
import { useEffect} from "react";
import { useParams} from "react-router-dom";
import style from './Episodes.module.css'

const Episodes = ()=>{
  let numero = 1;
  const params = (useParams())
  const id = params.id
  const dispatch = useDispatch()
  const caps = useSelector(state=> state.episodes)
  useEffect(()=>{
    dispatch(getPerson(id))
  return ()=>dispatch(clearper())
  },[id,caps.id, dispatch])
  return (
    <div className={style.box}>
      <div className={style.top} >
      <h3 className={style.text}>EPISODIOS</h3>
      <p className={style.text}>{`(en los que aparece el personaje)`}</p>
      </div>
      <div className={style.head}>
      <h4 className={style.num1}>Num.</h4>
      <h4 className={style.texts1}>Nombre:</h4>
      <h4 className={style.texts1}>Fecha de emisión:</h4>
      <h4 className={style.texts1}>Sesion y episodio:</h4>
      </div>
      <div className={style.episodes} >
      {
        caps?.map(episode=>
          <div className={style.data}>
            <h5 className={style.num}>{numero++}</h5>
            <h5 className={style.texts}>{episode?.name}</h5>
            <h5 className={style.texts}>{episode?.air_date}</h5>
            <h5 className={style.texts}>{episode?.episode}</h5>
          </div>
        )
        
      }
      </div>
    </div>

  )
}

export default Episodes;