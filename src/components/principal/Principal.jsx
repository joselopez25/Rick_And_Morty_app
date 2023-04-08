import imagen from '../../img/principal.png'
import { NavLink } from 'react-router-dom';
import Form from '../form/Forms';
const Principal = ({login})=>{
  return (
    <div className='form'>
      <NavLink to='/home'/>
        <div className='ppal'>
        <img src={imagen} alt='LogoApp' className='logo'/>
        <Form login={login}/>
        </div>
    </div>
      
  )
}
export default Principal;