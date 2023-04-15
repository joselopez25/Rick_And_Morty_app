import Card from "../card/Card"
import SearchBar from "../searchbar/SearchBar"
import style from './Cards.module.css'
import { useState} from "react"


 function Cards({onClose,characters, onSearch, clearAll, setCharacters}) {
  const [aux,setAux]=useState(false)

    const order = (event)=>{
    if (event.target?.value === 'A'){
      setCharacters(characters.sort((a,d)=>a.id-d.id));
      setAux(!aux)
       }
    if (event.target?.value === 'D'){
      setCharacters(characters.sort((a,d)=>d.id-a.id));
      setAux(!aux)
    }
 }
 
  return (
  <div className={style.box}>
    <div className={style.search}>
      <SearchBar onSearch={onSearch} clearAll={clearAll}/>
      <div className={style.selectbox}>
        <p>Filtrar segun su ID:  </p>
        <select onChange={order} className={style.select} >
          <option value='A' className={style.option}>ID Menor-Mayor</option>
          <option value='D' className={style.option}>ID Mayor-Menor</option>
        </select>
      </div>
    </div>
    <div className={style.cards}>
    {
      characters.map(({name,id, image,gender}) => {
        return <Card 
        name={name}
        image={image}
        key={id}
        id={id}
        gender={gender}
        onClose={onClose}/>
      })
    }
     </div>
  </div>)
}


export default Cards;