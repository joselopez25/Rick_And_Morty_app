import { NavLink } from "react-router-dom"

export default function Nav (){
  return (
    <div className="nav">
      <button className='rout'>
        <NavLink to='/about' className='rout' >About Me</NavLink>
      </button>
      <button className='rout'>
        <NavLink to='/home' className='rout' >HOME</NavLink>
      </button>
    </div>
  )
}