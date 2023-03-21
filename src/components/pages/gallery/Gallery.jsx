import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../../helpers/enpoints";
import Card from "../../molecules/card/Card";
import style from './Gallery.module.css'

function Gallery() {
  const [personajes, setPersonajes] = useState([]);
  const [pagina , setPagina ] = useState(1)

  useEffect(() => {
    axios(`${API_URL}/character/?page=${pagina}`)
      .then((respuesta) => {
        setPersonajes(respuesta.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pagina]);

  const prev = () => {
    pagina === 1
      ? window.alert("No existe una pagina anterior")
      : setPagina(pagina - 1);
  };

  const next = () => {
    pagina === 42
      ? window.alert("No existe una proxima pagina")
      : setPagina(pagina + 1);
  };

  return (
    <div>
      <div className={style.title}>
        <h1>Galeria de Personajes</h1>
      </div>
      <div className={style.button}>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
      <div className={style.cards}>
        {personajes?.map((personaje)=>(<Card key={personaje.id} personaje={personaje}/>))}
      </div>
    </div>
  );
}

export default Gallery;
