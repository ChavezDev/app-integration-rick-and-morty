import axios from "axios";
import { useState } from "react";
import { API_URL } from "./helpers/enpoints";
import style from "./App.module.css";
import { useNavigate } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { useDispatch } from "react-redux";
import { action_agregar_favoritos } from "./redux/action/favoriteActions";
import { action_borra_favoritos } from "./redux/action/favoriteActions";

function App() {
  const navigate = useNavigate();

  const [login, setLogin] = useState(false);

  const [personajes, setPersonajes] = useState([]);

  const loged = () => {
    setLogin(true);
  };

  const logOut = () => {
    setLogin(false);
    navigate("/login");
  };

  const onSearch = (idPersonaje) => {
    axios
      .get(`${API_URL}/character/${idPersonaje}`)
      .then((respuesta) => {
        let encontrado = personajes.find(
          (personaje) => personaje.id === respuesta.data.id
        );
        !encontrado
          ? setPersonajes([
              ...personajes,
              { ...respuesta.data, favorite: false },
            ])
          : window.alert(`El personaje ya se encuentra en la lista`);
      })
      .catch((error) => {
        window.alert(`el id ingresado no es correcto`);
      });
  };

  const onClose = (idPersonaje) => {
    setPersonajes(
      personajes.filter((personaje) => personaje.id !== idPersonaje)
    );
    dispatch(action_borra_favoritos(idPersonaje));
  };

  const dispatch = useDispatch();

  const favorite = (personaje) => {
    const personajeFavorito = personajes.find((e) => e.id === personaje.id);

    if (personaje.favorite) {
      setPersonajes((prevSatete) =>
        prevSatete.map((e) =>
          e.id === personaje.id ? { ...personajeFavorito, favorite: false } : e
        )
      );
      dispatch(action_borra_favoritos(personaje.id));
    } else {
      setPersonajes((prevSatete) =>
        prevSatete.map((e) =>
          e.id === personaje.id ? { ...personajeFavorito, favorite: true } : e
        )
      );
      dispatch(action_agregar_favoritos({ ...personaje, favorite: true }));
    }
  };

  return (
    <div className={style.app}>
      <AppRouter
        login={login}
        loged={loged}
        onClose={onClose}
        onSearch={onSearch}
        personajes={personajes}
        logOut={logOut}
        favorite={favorite}
      />
    </div>
  );
}

export default App;
