import { DELETE_FAVORITE } from "../action/favoriteActions";
import { ADD_FAVORITE } from "../action/favoriteActions";

const estadoIncial = {
  personajesFavoritos: [],
};

const reducer_favoritos = (state = estadoIncial, action) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      return {
        personajesFavoritos: [...state.personajesFavoritos, action.payload],
      };
    }
    case DELETE_FAVORITE: {
      return {
        personajesFavoritos: state.personajesFavoritos.filter(
          (e) => e.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};

export default reducer_favoritos;
