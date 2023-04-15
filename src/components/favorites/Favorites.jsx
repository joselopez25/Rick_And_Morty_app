import { connect } from "react-redux"
import Card from "../card/Card"
import { removeFav, clear } from "../../redux/action"
import { useDispatch } from "react-redux"
import { filterCards,orderCards } from "../../redux/action"
import { useState } from "react"
import style from "./Favorites.module.css"
const Favorites = ({myFavorites, removeFav})=>{

  const [aux,setAux]=useState(false)
  const dispatch = useDispatch();
 const handleOrder = (event)=>{
    dispatch(orderCards(event.target.value));
    setAux(!aux)
  }

  const handleFilter = (event)=>{
    dispatch( filterCards(event.target.value))
  }

  const clearFav = ()=>{
    dispatch(clear())
  }
  return (
    <div className={style.box}>
      <div className={style.selectbox}>
        <select onChange={handleOrder} className={style.select}>
          <option className={style.option} value="Agregados">Agregados</option>
          <option className={style.option} value='A'>ID Menor-Mayor</option>
          <option className={style.option} value='D'>ID Mayor-Menor</option>
        </select>
        <select onChange={handleFilter} className={style.select}>
          <option className={style.option} value='all'>All</option>
          <option className={style.option} value='Male'>Male</option>
          <option className={style.option} value='Female'>Female</option>
          <option className={style.option} value="Genderless">Genderless</option>
          <option className={style.option} value="unknown">unknown</option>
        </select>
        <button className={style.buttonQuitar} onClick={clearFav}>LIMPIAR FAVORITOS</button>
      </div>
      <div className={style.cards}>
        {
          myFavorites.map((props) => {
            return(
            <Card
            name={props.name}
            image={props.image}
            key={props.id}
            id={props.id}
            gender={props.gender}
            onClose={()=>{removeFav(props.id)}}
            />)
          })
        }
      </div>
    </div>
  )
  
}
const mapStateToProps = (state)=>{
  return{
    myFavorites: state.myFavorites
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
      removeFav: (id)=>{dispatch(removeFav(id))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Favorites)