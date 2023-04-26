
const validate = (errors,setErrors,userData)=>{
  let largoEmail = userData.email.length
  let largoPass= userData.pass.length

  if(userData.email){
    if(largoEmail<35){
      if(!/\S+@\S+\.\S+/.test(userData.email)){
        setErrors({
          ...errors,
          email: 'Email no valido'
        })
      } else setErrors({...errors, email:''});
    } else { setErrors({
      ...errors,
      email: 'Email demasiado LARGO'
    })}
  }
  if (userData.pass){
    if(largoPass>=5 && largoPass<10){
      if(!/.*\d+.*/.test(userData.pass)){
        setErrors({
          ...errors,
          pass: 'contraseña no valida'
        })
      } else setErrors({...errors, pass:''})
    }else if(largoPass<5){ setErrors({
      ...errors,
      pass: 'Password muy corta'
    })} else {
      setErrors({
        ...errors,
        pass: 'Password muy larga'
      })
    }
  }
}

export default validate;