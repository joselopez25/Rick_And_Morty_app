import imagen from '../../img/404.gif'
import style from './Error.module.css'
import { NavLink } from 'react-router-dom'
const Error = ()=>{
    return (
        <div className={style.error}>
            <img src={imagen} alt="imagen" className={style.img}/>
            <h1>ERROR 404</h1>
            <h4 className={style.page}>Page not found</h4>
            <NavLink to='/' className={style.volver}>VOLVER AL INICIO</NavLink>
        </div>
    )
}

export default Error;