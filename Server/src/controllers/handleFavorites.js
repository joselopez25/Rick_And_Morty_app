let  myFavorites = [];

const postFav = (req, res)=>{
  const per = req.body;

  myFavorites.push(per);

  return res.status(200).json(myFavorites);
}

const deleteFav = (req, res)=>{
  const { id } = req.params

  myFavorites = myFavorites.filter(per => per.id !== id)

  return res.status(200).json(myFavorites)
};

module.exports = {
  postFav,
  deleteFav
}