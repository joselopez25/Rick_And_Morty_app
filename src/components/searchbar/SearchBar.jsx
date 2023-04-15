import {useState} from "react";
import style  from './SearchBar.module.css'

export default function SearchBar({onSearch,clearAll}) {
   let [id,setId] = useState('');
   const handleChange = (event)=>{
      setId(event.target.value)
   }
   return (
      <div className={style.container}>
         <div className={style.box}>
         <input type='search' value={id} onChange={handleChange} className={style.input} />
         <button onClick={()=>{onSearch(id);setId('')}} className={style.button}>Agregar <i className="fa-solid fa-user-plus"></i></button>
         <button onClick={()=>{clearAll()}} className={style.buttonQuitar}>Clear <i className="fa-solid fa-trash-can"></i></button>
         </div>
         <p className={style.text}>Ingresa un numero del 1 al 826</p>
      </div>
   );
}
