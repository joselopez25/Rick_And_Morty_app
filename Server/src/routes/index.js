const express = require('express');
const routerUsers = express.Router();
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const {postFav} = require('../controllers/handleFavorites');
const {deleteFav} = require('../controllers/handleFavorites');

routerUsers.get ("/character/:id", (req, res)=>{
  getCharById( req, res)
})
/* routerUsers.get ("/login", login); una forma directa de hacerlo (sirve para cualquiera) pasa req y res directamente */
routerUsers.get ("/login", (req, res)=>{
  login(req, res)
})

routerUsers.post ("/fav", (req, res)=>{
  postFav(req, res)
})

routerUsers.delete ("/fav/:id", (req, res)=>{
  deleteFav(req, res)
})

module.exports = routerUsers;


