import React from "react";
import Cards from "../cards/Cards";

function Home({ personajes, onClose , favorite}) {
  return (
    <>
      <Cards personajes={personajes} onClose={onClose} favorite={favorite}/>
    </>
  );
}

export default Home;
