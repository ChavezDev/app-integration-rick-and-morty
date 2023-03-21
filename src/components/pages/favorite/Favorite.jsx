import { useSelector } from "react-redux";
import Card from "../../molecules/card/Card";
import style from "./Favorite.module.css";
const Favorite = ({ onClose , favorite}) => {
  const personajesFavoritos = useSelector(
    (state) => state.reducer_favoritos.personajesFavoritos
  );

  return (
    <div>
      <div className={style.title}>
        <h1>Personajes Favoritos</h1>
      </div>
      <div className={style.cards}>
        {personajesFavoritos.map((e) => (
          <Card key={e.id} personaje={e} onClose={onClose} favorite={favorite} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
