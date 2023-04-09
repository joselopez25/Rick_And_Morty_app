import React, { useCallback } from "react";
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import PariclesConfig from "./particles.min";

const Particulas = ()=>{
  const particlesInit = useCallback((engine) =>{
   loadFull(engine)
  },[])
  return (
    <div className="particles">
      <Particles
        //id="tsparticles"
        options={PariclesConfig}
        init={particlesInit}/>
    </div>
  )
}

export default Particulas;
