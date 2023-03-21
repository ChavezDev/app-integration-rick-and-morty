import React from "react";
import { authentication } from "../../../helpers/authentication";
import style from "./User.module.css";


export const User = () => {
  return (
    <div className={style.conteinerUser}>
      <div className={style.image}>
        <img src="" alt="" />
      </div>
      <div className={style.user}>
        <h1>{authentication.User}</h1>
      </div>
    </div>
  );
};
