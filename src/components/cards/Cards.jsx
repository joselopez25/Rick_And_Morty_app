import Card from "../card/Card"
import SearchBar from "../searchbar/SearchBar"
import style from './Cards.module.css'

export default function Cards({onClose,characters, onSearch}) {
  return (
  <div className={style.box}>
    <div className={style.search}>
      <SearchBar onSearch={onSearch}/>
    </div>
    <div className={style.cards}>
    {
      characters.map(({name,id, image}) => {
        return <Card 
        name={name}
        image={image}
        key={id}
        id={id}
        onClose={onClose}/>
      })
    }
     </div>
  </div>)
}
