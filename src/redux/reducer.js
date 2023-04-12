import { ADD_FAV,REMOVE_FAV, FILTER, ORDER} from "./action-type";

const initialState = {
  myFavorites: [],
  allCharacters: []
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
        myFavorites: state.myFavorites.filter(character=>character.id !== action.payload)
      };
    case FILTER:
      if (action.payload === 'all'){
        return {
          ...state,
          myFavorites: state.allCharacters
        }
      }
      return{
        ...state,
        myFavorites: state.allCharacters.filter(character=>character.gender === action.payload)
      }
      case ORDER:
        if (action.payload ==='A'){
        return{
          ...state,
          myFavorites: state.allCharacters.sort((a,d)=>a.id-d.id)
        }
        }
        if (action.payload ==='D'){
        return{
        ...state,
        myFavorites: state.allCharacters.sort((a,d)=>d.id-a.id)
        }}
      return{...state}        

    default:
      return{...state};
  }
}

export default reducer;