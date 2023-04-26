const axios = require('axios')

const url = "https://rickandmortyapi.com/api/character"

const getCharById = async (req, res)=>{
const {id} = req.params
try {
  const {data} = await axios(`${url}/${id}`);
    if (data.name && data.gender){
      const per = {
        id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status,
        episode: data.episode
      }
      return res.status(200).json(per);
    } 

      return res.status(404).send('Not found');
}
catch(error) {res.status(500).send(error.message)};
}
/* const getCharById = (res, id)=>{
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  .then( ({data}) => {
    const per = {
      id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
      image: data.image,
      status: data.status
    }
    res.writeHead(200, {"Content-type": "application/json"})
    return res.end(JSON.stringify(per))
  }).catch(error=> {
    res.writeHead(500, {"Content-type": "text/plain"})
    return res.end(error.message)
  })
  
} */
module.exports = getCharById;