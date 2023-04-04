import {useState} from "react";

export default function SearchBar({onSearch}) {
   let [id,setId] = useState('');
   const handleChange = (event)=>{
      setId(event.target.value)  
   }
   return (
      <div>
         <input value={id} onChange={handleChange} />
         <button value={id} onClick={onSearch}>Agregar</button>
      </div>
   );
}
