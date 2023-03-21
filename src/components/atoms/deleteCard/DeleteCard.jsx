import React from "react";
import style from "./DeleteCard.module.css";

function DeleteCard({ onClose, personaje }) {
  return (
    <>
      <button className={style.btn} onClick={() => onClose(personaje.id)}>
        Delete
      </button>
    </>
  );
}

export default DeleteCard;
