import Card from './Card';
import SearchBar from "./SearchBar"

export default function Cards({onClose,characters, onSearch}) {
  return (
  <div>
    <div className='aggBar'>
      <SearchBar onSearch={onSearch}/>
    </div>
    <div className='all'>
    {
      characters.map(({name,status,species,gender,origin,id, image}) => {
        return <Card 
        name={name}
        status={status}
        species={species}
        gender={gender}
        origin={origin.name}
        image={image}
        key={id}
        id={id}
        onClose={onClose}/>
      })
    }
  </div>
  </div>)
}
