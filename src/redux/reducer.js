import { ADD_FAV,REMOVE_FAV, FILTER, ORDER ,CLEAR, EPISODES, PERSONAJES, CLEARPER} from "./action-type";
const initialState = {
  myFavorites: [],
  allCharacters: [],
  personaje: [],
  episodes: []
};

const reducer = (state=initialState, action)=>{
  switch(action.type){
    case ADD_FAV:
      return{
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload]
      };
    case REMOVE_FAV:
      return{
        ...state,
        myFavorites: state.myFavorites.filter(character=>character.id !== action.payload),
        allCharacters: state.allCharacters.filter(character=>character.id !== action.payload)
      };
    case FILTER:
      if (action.payload === 'all'){
        return {
          ...state,
          myFavorites: state.allCharacters
        }
      } else {
        const allCharactersFilter = state.allCharacters.filter(character=>character.gender === action.payload)
      return{
        ...state,
        myFavorites: allCharactersFilter
      }}
      case ORDER:
        const allCharactersFavCopy = [...state.allCharacters]
        switch (action.payload){
          case 'A':
            return{
              ...state,
              myFavorites: allCharactersFavCopy.sort((a,d)=>a.id-d.id)
            }
          case 'D':
            return{
              ...state,
              myFavorites: allCharactersFavCopy.sort((a,d)=>d.id-a.id)
              }
          case 'Agregados':
            return{
              ...state,
              myFavorites: state.allCharacters
            }
          default:
            return{...state}
        }
      case CLEAR:
        return {
          myFavorites: [],
          allCharacters: []
        }
      case PERSONAJES:
        return{
          ...state,
          personaje: action.payload
        }
      case EPISODES:
        return{
          ...state,
          episodes: [...state.episodes, action.payload]
        }
      case CLEARPER:
        return {
          ...state,
          episodes: [],
          personaje: []
        }
    default:
      return{...state};
  }
}

export default reducer;