import React from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "../../molecules/navMenu/NavMenu";
import SearchBar from "../../molecules/searchBar/SearchBar";
import UserLogin from "../../molecules/userLogin/UserLogin";
import style from "./Nav.module.css";

function Nav({ onSearch , logOut }) {
  return (
    <>
    <div className={style.nav}>
      <NavMenu />
      <SearchBar onSearch={onSearch} />
      <UserLogin logOut={logOut}/>
    </div>
    <Outlet/>
    </>
  );
}

export default Nav;
