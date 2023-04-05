import './App.css';
import Cards from './components/Cards.jsx';
import {useState} from "react";
import Nav from './components/Nav';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Details from './components/Details';
import SearchBar from './components/SearchBar';


function App() {
   let [characters,setCharacters] = useState([]);
   function onClose (id){
     setCharacters(characters.filter(personaje => personaje.id !==  parseInt(id)))
   }

   function onSearch(id) {
      if (id>0 && id<827){
         for(const personaje of characters){
            if(parseInt(id)===personaje.id){
               return alert('YA EXISTE')} 
         }
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
         
      });
      }else { alert('NO EXISTE PERSONAJE CON ESE ID')}
   }
   return (
      <div>
         <Nav onSearch={onSearch}/>
      <Routes>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/details/:id' element={<Details/>}/>
      </Routes>
      </div>
   );
}

export default App;
