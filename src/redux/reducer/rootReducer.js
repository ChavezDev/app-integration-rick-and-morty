import { combineReducers } from "redux";
import characterReducer from "./characterReducer";
import counterReducer from "./counterReducer";
import reducer_favoritos from "./favoriteReducers";

const rootReducers = combineReducers({
  characterReducer,
  counterReducer,
  reducer_favoritos,
});

export default rootReducers;
