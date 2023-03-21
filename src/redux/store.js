import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducer/rootReducer";
import thunk from 'redux-thunk'


const store = configureStore({
  reducer: rootReducers,
  devTools: {
    name: "App",
    trace: true,
    traceLimit: 25,
  },
  middleware:[thunk]
});

export default store;
