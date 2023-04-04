export default function Card({name, status, species, gender, origin, image,onClose , id}) {
   console.log(onClose)
   return (
      <div className='single'>
         <div className='divSingle'>
         <button value={id} onClick={onClose}>X</button>
         <h3>{`Nombre: ${name}`}</h3>
         <h3>{`Estado: ${status}`}</h3>
         <h3>{`Escpecie: ${species}`}</h3>
         <h3>{`Genero: ${gender}`}</h3>
         <h3>{`Origen: ${origin}`}</h3>
         </div>
         <img className='img' src={image} alt='imagén' />
      </div>
   );
}
