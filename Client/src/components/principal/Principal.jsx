import imagen from '../../img/principal.png'
import Form from '../form/Forms';
import style from './Principal.module.css'

const Principal = ({login})=>{
  return (
    <div className={style.container}>
        <div className={style.ppal}>
        <img src={imagen} alt='LogoApp' className={style.logo}/>
        <Form login={login} className={style.form} />
        </div>
    </div>   
  )
}
export default Principal;