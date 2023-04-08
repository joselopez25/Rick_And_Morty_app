import {useState} from "react";

export default function SearchBar({onSearch}) {
   let [id,setId] = useState('');
   const handleChange = (event)=>{
      setId(event.target.value)
   }
   return (
      <div>
         <input type='search' value={id} onChange={handleChange} />
         <button className="agg" onClick={()=>{onSearch(id);setId('')}}>Agregar</button>
      </div>
   );
}
