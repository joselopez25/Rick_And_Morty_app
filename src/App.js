import './App.css';
import Cards from './components/cards/Cards.jsx';
import {useState, useEffect } from "react";
import Nav from './components/nav/Nav';
import axios from 'axios';
import About from './components/About/About';
import Details from './components/details/Details';
import Error from './components/error/Error';
import Principal from './components/principal/Principal';
import {useLocation, useNavigate,Route, Routes} from 'react-router-dom';



function App() {
   let navigate =useNavigate()
   let location = useLocation();
   let path= location.pathname;
   let [access,setAccess]=useState(false);
   let [characters,setCharacters] = useState([]);
   let email = 'jose_lopez25@outlook.com';
   let password = 'jose25';
   const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
   const API_KEY = '54e18e988220.700fc28ffa7d0075084c'
   const login = (userData)=>{
      if (email === userData.email && password===userData.pass){
         setAccess(true);
         navigate('/home')
      }
   }
   const logout = ()=>{
      setAccess(false)
      navigate('/')
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   function onClose (id){
     setCharacters(characters.filter(personaje => personaje.id !==  id))
   }

   function onSearch(id) {
      if (id>0 && id<827){
         for(const personaje of characters){
            if(id===personaje.id){
               return alert('YA EXISTE')} 
         }
         axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
         
      });
      }else { alert('NO EXISTE PERSONAJE CON ESE ID')}
   }
   return (
      <div>
         { path!=='/'? <Nav onSearch={onSearch} logout={logout}/> : null}    
      <Routes>
         <Route path='/' element={<Principal login={login}/>} Nav={false}/>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose} onSearch={onSearch} />}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/details/:id' element={<Details/>} />
         <Route path='*' element={<Error/>}/>
      </Routes>
      </div>
   );
}

export default App;
