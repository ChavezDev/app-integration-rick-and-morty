import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavMenu.module.css";

function NavMenu() {
  return (
    <div className={style.NavMenu}>
      <div className={style.logo}>
        <h2>Rick and Morty</h2>
        <p>Web Site</p>
      </div>
      <div className={style.NavMenuText}>
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? style.active : style.inactive)}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? style.active : style.inactive)}
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to="/favorite"
            className={({ isActive }) => (isActive ? style.active : style.inactive)}
          >
            <li>Favorite</li>
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? style.active : style.inactive)}
          >
            <li>Gallery</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default NavMenu;
