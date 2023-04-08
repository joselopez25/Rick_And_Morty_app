import Card from "../card/Card"
import SearchBar from "../searchbar/SearchBar"

export default function Cards({onClose,characters, onSearch}) {
  return (
  <div>
    <div className='aggBar'>
      <SearchBar onSearch={onSearch}/>
    </div>
    <div className='all'>
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
