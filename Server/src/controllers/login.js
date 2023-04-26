const users = require('../utils/users')

const login = (req, res)=>{
  const {email , pass} = req.query;
  const userFound = users.find((user)=> user.email === email && user.pass === pass)
  return userFound
  ?res.status(200).json({access: true})
  :res.status(200).json({access: false})
  /*  const access = {
     access: false,
   } */
 /*  if(user[0].email === email && user[0].pass === pass){
    access.access= true;
    return res.status(200).json(access)
  } else {
    access.access = false
    return  res.status(200).json(access)
  } */

}

module.exports = login;
