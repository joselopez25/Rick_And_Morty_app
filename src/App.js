import './App.css';
import Cards from './components/Cards.jsx';
import {useState} from "react";
import Nav from './components/Nav';
import axios from 'axios';


function App() {
   let [characters,setCharacters] = useState([]);
   
   function onSearch(id) {
      id=id.target.value
      if (id>0 && id<827){
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      });
      }else { alert('NO EXISTE PERSONAJE CON ESE ID')}
      
   }
   return (

      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} />
      </div>
   );
}

export default App;
