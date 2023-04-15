import './App.css';
import Cards from './components/cards/Cards.jsx';
import {useState, useEffect } from "react";
import Nav from './components/nav/Nav';
import axios from 'axios';
import About from './components/About/About';
import Details from './components/details/Details';
import Error from './components/error/Error';
import Principal from './components/principal/Principal';
import {useLocation, useNavigate,Route, Routes, Navigate} from 'react-router-dom';
import Start from './components/start/Start';
import Particulas from './components/particulas/Particulas';
import Favorites from './components/favorites/Favorites';

function App() {
   let navigate =useNavigate();
   let location = useLocation();
   let path= location.pathname;
   let [access,setAccess]=useState(false);
   let [characters,setCharacters] = useState([]);
   const email = 'jose_lopez25@outlook.com';
   const password = 'jose25';
   const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
   const API_KEY = '54e18e988220.700fc28ffa7d0075084c';
   const login = (userData,setErrors,errors)=>{
      if (email === userData.email && password===userData.pass){
         setAccess(true);
         navigate('/home')
      }else{setErrors({
         ...errors,
         pass: 'Usuario o contraseña errada'
       })}
   }
   const logout = ()=>{
      setAccess(false)
   }

   /* useEffect(() => {
      (!access &&
        (pathname === "/start/home" || pathname === '/favorites' ||
          pathname === "/start/about" ||
          CONSTANTES.searchPath(pathname)) &&
        navigate("/login"))
        return ()=>{
          pathname === '/login' && setCharacters([])
        }
    }, [access, navigate, pathname]); */
   useEffect(() => {
      if (!access && (path==='/start' || path=== '/home' || path==='/favorites' ||path==='/about'||path=== '/details/:id')){navigate('/')}
      return ()=>{path==='/' && setCharacters([])}
   }, [access]);
   function onClose (id){
     setCharacters(characters.filter(personaje => personaje.id !==  id));
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
   const clearAll = ()=>{
      setCharacters([])
   }
  
   return (
      <div>
         { (path==='/' || path==='/start')?  <Particulas/> : null}   
         { (path!=='/' && path!=='/start' && path!=='/404')? <Nav onSearch={onSearch} logout={logout} /> : null}   
      <Routes>
         <Route path='/' element={<Start/>}/>
         <Route path='/start' element={<Principal login={login}/>} Nav={false}/>
         <Route path='/home' element={<Cards characters={characters} setCharacters={setCharacters} onClose={onClose} onSearch={onSearch} clearAll={clearAll}/>}/>
         <Route path='/favorites' element={<Favorites/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/details/:id' element={<Details/>} />
         <Route path='/404'element={<Error/>}/>
         <Route path='*' element={<Navigate to='/404'/>}/>
      </Routes>
      <footer className='by'>By: Jose Lopez</footer>
      </div>
   );
}

export default (App)
