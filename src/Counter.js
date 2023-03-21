import React from "react";
import { connect } from "react-redux";
import { downCounter, upCounter } from "./redux/action/counterAction";
//import store from "./redux/store";

function Counter({ counterReducer, downCounter, upCounter }) {
  //console.log(store.getState().counterReducer.pokemon);
  console.log(counterReducer);
  return (
    <div>
      <div>
        <h1>Tienda Pokemones</h1>
        <h2>Stock: {counterReducer.pokemon}</h2>
      </div>
      <div>
        <button onClick={()=>upCounter()}>Agregar 1</button>
        <button onClick={()=>downCounter()}>Quitar 1</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characterReducer: state.characterReducer,
    counterReducer: state.counterReducer,
  };
};

const mapDispatchToProps = {
  downCounter,
  upCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
