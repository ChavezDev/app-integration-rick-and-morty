import { NavLink, useLocation } from "react-router-dom";
import DeleteCard from "../../atoms/deleteCard/DeleteCard";
import style from "./Card.module.css";

function Card({ personaje, onClose, favorite }) {
  console.log(personaje);

  const location = useLocation();

  return (
    <div className={style.cards_item}>
      <div className={style.card}>
        <div className={style.card_image}>
          <NavLink to={`/detail/${personaje.id}`}>
            <img src={personaje.image} alt={personaje.name} />
          </NavLink>
          {location.pathname !== "/gallery" &&
            (personaje.favorite ? (
              <button onClick={() => favorite(personaje)}>❤️</button>
            ) : (
              <button onClick={() => favorite(personaje)}>🤍</button>
            ))}
        </div>
        <div className={style.card_content}>
          <h2 className={style.card_title}>{personaje.name}</h2>
          <p className={style.card_text}>Especie: {personaje.species}</p>
          <p className={style.card_text}>Genero: {personaje.gender}</p>
          {location.pathname === "/" && (
            <DeleteCard personaje={personaje} onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
