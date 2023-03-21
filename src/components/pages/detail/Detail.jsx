import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_URL } from "../../../helpers/enpoints";
import style from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}/character/${id}`)
      .then((respuesta) => {
        respuesta.data.name
          ? setPersonaje(respuesta.data)
          : window.alert("No ahy personajes con ese ID");
      })
      .catch(() => {
        window.alert("No ahy personajes con ese ID");
      });
  }, [id]);

  return (
    <div className={style.containerDetail}>
      <div className={style.imgDetail}>
        <img src={personaje.image} alt="" />
      </div>
      <div className={style.textDetail}>
        <h1>{personaje.name}</h1>
        <p>creado: {personaje.created}</p>
        <p>especie: {personaje.species}</p>
        <p>genero: {personaje.gender}</p>
        <p>status: {personaje.status}</p>
        {personaje.location&&<p>location: {personaje.location.name}</p>}
      </div>
      <div className={style.buttonDetail}>
        <button>Add Favorite</button>
      </div>
    </div>
  );
}

export default Detail;
