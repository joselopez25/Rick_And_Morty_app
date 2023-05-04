import { NavLink } from "react-router-dom";
import style from "./Card.module.css";
import { addFav, removeFav } from "../../redux/action";
import { connect } from "react-redux";
import { useState,useEffect } from "react";
function Card(props) {
  
  const [isFav,setIsFav]=useState(false)
 const handleFavorite = ()=>{
    if(isFav) {
      setIsFav(false);
      props.removeFav(props.id)
    }else if (!isFav){
      setIsFav(true);
      props.addFav(props)
    }
  }
  useEffect(() => {
    props?.myFavorites?.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
    })
 }, [props.myFavorites,props.id]);
  return (
  <div className={style.card}>
     {
    
       <button onClick={handleFavorite} className={isFav ? style.starFav:style.star}><i class="fa-solid fa-star"></i></button>
  }  
    <button className={style.close} onClick={()=>{props.onClose(props.id)}}><i className="fa-solid fa-xmark"></i></button>
    <NavLink to={`/details/${props.id}`} className={style.navLink}>
      <div className={style.info}>
        <h3 className={style.id}>{`${props.id}`}</h3>
        <img className={style.img} src={props.image} alt='imagén' />
        <h3 className={style.texto}>{`Nombre: ${props.name}`}</h3>
        <h3 className={style.texto}>{`Genero: ${props.gender}`}</h3>
        <p className={style.texto}>{'(Click para más info)'}</p>
      </div>
    </NavLink>
  </div>
  );
}
const mapStateToProps = (state)=>{
  return{
     myFavorites: state.myFavorites
  }
}

const mapDispatchToPops = (dispatch)=>{
  return{
    addFav: (personaje)=>{
      dispatch(addFav(personaje));
    },
    removeFav:(id)=>{
      dispatch(removeFav(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPops
)(Card)