import { NavLink } from "react-router-dom";

export default function Card({name, status, species, gender, origin, image,onClose , id}) {
   return (
      <div className='single'>
         <div className='divSingle'>
         <button className="agg" onClick={()=>onClose(id)}>X</button>
         <h3>Nombre:{<NavLink to={`/details/${id}`} className='rout'>{name}</NavLink> }</h3>
         <h3>{`Estado: ${status}`}</h3>
         <h3>{`Escpecie: ${species}`}</h3>
         <h3>{`Genero: ${gender}`}</h3>
         <h3>{`Origen: ${origin}`}</h3>
         </div>
         <img className='img' src={image} alt='imagén' />
      </div>
   );
}
