import React from "react";
import Card from "../../molecules/card/Card";
import style from "./Cards.module.css"


function Cards({ personajes , onClose , favorite }) {
  return (
    <div className={style.cards}>
      {personajes.map((personaje, index) => (
        <Card key={index} personaje={personaje} onClose={onClose} favorite={favorite}/>
      ))}
    </div>
  );
}

export default Cards;
