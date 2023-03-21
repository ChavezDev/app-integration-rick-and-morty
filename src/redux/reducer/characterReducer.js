import { ADD_CHARACTER, DELETE_CHARACTER } from "../action/characterActions";

const initialState = {
  personajes: [{id:1 , name:'Jhon', apellido: 'Chavez'}, {id:2, name:'Andres', apellido: 'Chavez'}],
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        personajes: [...state.personajes, action.payload],
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        personajes: state.personajes.filter((e) => e.id !== action.payload),
      };

    default:
      return state;
  }
};

export default characterReducer;