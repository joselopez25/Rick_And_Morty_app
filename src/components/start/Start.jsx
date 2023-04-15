import imagen from '../../img/principal.png'
import { NavLink } from 'react-router-dom';
import style from './Start.module.css'

const Start = ()=>{
  return (
  <div className={style.bienvenido}>
    <img src={imagen} alt='LogoApp' className={style.img}/>
    <div className={style.text}>
    <div className={style.text1}>
    <h1 >¡Bienvenido!</h1>
    </div>
    <h3> 😎 Encuentra toda la info de cada uno de los personajes de la serie Rick AND Morty 😎 </h3>
    <NavLink to='/start' className={style.link}>
      <button className={style.button}>Ingresar</button>
    </NavLink>
    </div>
  </div>
  )
}


export default Start;