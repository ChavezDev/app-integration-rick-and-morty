import { DOWN_COUNTER, UP_COUNTER } from "../action/counterAction";

const initialState = {
  pokemon: 100,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case UP_COUNTER:
      return {
        ...state,
        pokemon: state.pokemon + action.payload,
      };
    case DOWN_COUNTER:
      return {
        ...state,
        pokemon: state.pokemon - action.payload,
      };

    default:
      return state;
  }
};

export default counterReducer;
