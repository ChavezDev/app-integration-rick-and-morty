import React, { useState } from "react";
import { NavLink , useNavigate } from "react-router-dom";
import { authentication } from "../../../helpers/authentication";
import LoginTemplate from "../../../template/loginTemplate/LoginTemplate";
import style from "./FormLogin.module.css";



function FormLogin({loged}) {

  const navigate = useNavigate()

  const [disabled, setdisabled] = useState(true);

  

  const [validate, setvalidate] = useState({
    email: false,
    password: false,
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    login: "",
  });

  const rexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const rexPasword = /^(?=.*\d).{6,10}$/;

  const validateEmail = ({ target }) => {
    if (rexEmail.test(target.value)) {
      setvalidate((prev) => ({ ...prev, email: true }));
      setError((prev) => ({ ...prev, email: "" }));
    } else {
      setError((prev) => ({
        ...prev,
        email: `El email debe ser un correo electronico valido`,
      }));
    }
    validation();
  };

  const validatePasword = ({ target }) => {
    if (rexPasword.test(target.value)) {
      setvalidate((prev) => ({ ...prev, password: true }));
      setError((prev) => ({ ...prev, password: "" }));
    } else {
      setError((prev) => ({
        ...prev,
        password: `Su pasword debe contener minimo 6 digitos y maximo 10, ademas un numero`,
      }));
    }
    validation();
  };

  const validation = () => {
    if (validate.email && validate.password) {
      setdisabled(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      authentication.email === event.target.email.value &&
      authentication.password === event.target.password.value
    ) {

      loged()
      navigate("/")
      setError((prev) => ({
        ...prev,
        login: "",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        login: `Acceso Denegado, revise sus credenciales`,
      }));
    }
  };

  return (
    <LoginTemplate title="Iniciar Sesion">
      <form onSubmit={handleSubmit}>
        <div className={style.containerCorreo}>
          <input
            onChange={validateEmail}
            className={style.inputCorreo}
            type="email"
            name="email"
            placeholder="Correo electronico"
            required
          />
          <span>{error.email}</span>
        </div>
        <div className={style.containerContraseña}>
          <input
            onChange={validatePasword}
            className={style.inputContraseña}
            type="password"
            name="password"
            placeholder="contraseña"
            required
          />
          <span>{error.password}</span>
        </div>
        <div className={style.containerButton}>
          <button
            className={style.buttonForm}
            type="submit"
            disabled={disabled}
          >
            Ingresar
          </button>
          <div>
            <NavLink className={style.containerRegistro} to="/register">
              ¿Deseas registrarte?
            </NavLink>
          </div>
          <span>{error.login}</span>
        </div>
      </form>
    </LoginTemplate>
  );
}

export default FormLogin;
