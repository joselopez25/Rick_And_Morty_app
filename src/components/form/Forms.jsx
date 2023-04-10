import { useState } from "react";
import validate from "./validation";
import style from './Forms.module.css'

const Form =({login})=>{
  let [userData,setUserData] = useState({email: '',pass:''})
  let [errors,setErrors]=useState({email:'',pass:''})
  const handleSubmit = ()=>{
    login(userData,setErrors,errors)
  }
  const handleChange = (event)=>{
    setUserData({...userData,
    [event.target.name]: event.target.value})
    validate(errors,setErrors,userData);
  } 
  const onSubmit=(event)=>{
    event.preventDefault()
  }
  return (
    <div>
      <form onSubmit={onSubmit} className={style.form}>
        <div className={style.box}>
        <input type="text" name="email"  value={userData.email} onChange={handleChange} clasName={style.input}required/>
        <label htmlFor="email" className={style.lbl}>Email:</label>
        </div>
        {errors.email && <p className={style.noValid}>{errors.email}</p>}
        <div className={style.box}>
        <input type="password" name='pass'  value={userData.pass} onChange={handleChange}  required/>
        <label htmlFor="pass" className={style.lbl}>Pass:</label>
        </div>
        {errors.pass && <p className={style.noValid}>{errors.pass}</p>}
        <button disabled={!userData.email || !userData.pass || errors.email || errors.pass} onClick={handleSubmit}className={style.button}>Login</button>
      </form>        
    </div>
  )
}

export default Form;