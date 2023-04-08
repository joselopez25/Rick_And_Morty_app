import { NavLink } from "react-router-dom";

export default function Card({name, status, species, gender, origin, image,onClose , id}) {
   return (
      <div className='single'>
         <button className="agg" onClick={()=>onClose(id)}>X</button>
         <NavLink to={`/details/${id}`}>
         <div className='divSingle'>
         <h3>{`${id}`}</h3>
         <img className='img' src={image} alt='imagén' />
         <h3>{`Nombre: ${name}`}</h3>
         </div>
         </NavLink>
      </div>
   );
}
