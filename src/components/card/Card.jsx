import { NavLink } from "react-router-dom";
import style from "./Card.module.css"
export default function Card({name, status, species, gender, origin, image,onClose , id}) {
   return (
      <div className={style.card}>
         <button className="agg" onClick={()=>onClose(id)}>X</button>
         <NavLink to={`/details/${id}`} className={style.navLink}>
         <div className='divSingle'>
         <h3>{`${id}`}</h3>
         <img className='img' src={image} alt='imagén' />
         <h3>{`Nombre: ${name}`}</h3>
         <p>{'(Click para más info)'}</p>
         </div>
         </NavLink>
      </div>
   );
}
