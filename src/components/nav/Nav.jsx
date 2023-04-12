import { NavLink } from "react-router-dom"
import style from "./Nav.module.css"
import imagen from '../../img/principal.png'
import { useState } from "react"

export default function Nav ({logout}){
  const [click,setClick]=useState(false);
  const handleClick= ()=>{
    setClick(!click);
  }
  return (
    <div >
      <button className={style.menu} onClick={handleClick} ><i className={` ${click ? "fa-solid fa-xmark" :"fa-solid fa-bars" }`}></i></button>
      <div className={style.logo}>
      <NavLink to='/home' >
        <img src={imagen} alt='LogoApp' className={style.img}/>
      </NavLink>
      </div>
        <div className={` ${click ? style.navvisble : style.nav}`} >
          <div className={style.botones}>
            <NavLink to='/about' >
              <button className={style.button}>About me</button>
            </NavLink>
            <NavLink to='/home' >
              <button className={style.button}>Cards</button>
            </NavLink>
            <NavLink to='/favorites' >
            <button className={style.button}>Favoritos</button>
            </NavLink>
            <NavLink to='/'>
            <button className={style.logout} onClick={logout} >Logout <i className="fa-solid fa-right-from-bracket"></i> </button>
            </NavLink>
          </div>
        </div>
    </div>
  )
}