import React, { useCallback } from "react";
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import PariclesConfig from "./particles.min";
import style from "./Particulas.module.css"
const Particulas = ()=>{
  const particlesInit = useCallback((engine) =>{
   loadFull(engine)
  },[])
  return (
    <div className= {style.particles} >
      <Particles
        //id="tsparticles"
        options={PariclesConfig}
        init={particlesInit}/>
    </div>
  )
}

export default Particulas;
