import { useState } from "react";
import validate from "./validation";
const Form =({login})=>{
  let [userData,setUserData] = useState({email: '',pass:''})
  let [errors,setErrors]=useState({email:'',pass:''})
  const handleSubmit = ()=>{
    login(userData)
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
      <form onSubmit={onSubmit} className='ppal'>
        <hr/>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} required/>
        {errors.email && <p>{errors.email}</p>}
        <label htmlFor="pass">Pass:</label>
        <input type="password" name='pass' placeholder="Password" value={userData.pass} onChange={handleChange} required/>
        {errors.pass && <p>{errors.pass}</p>}
        <button onClick={handleSubmit}>LOGIN</button>
      </form>        
    </div>
  )
}

export default Form;