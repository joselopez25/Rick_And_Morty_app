import Card from './Card';

export default function Cards({onClose,characters}) {
  return (
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
  </div>)
}
