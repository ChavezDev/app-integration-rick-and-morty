import React from "react";
import { Route, Routes } from "react-router";
import Nav from "../components/organisms/nav/Nav";
import About from "../components/pages/about/About";
import Detail from "../components/pages/detail/Detail";
import Favorite from "../components/pages/favorite/Favorite";
import Gallery from "../components/pages/gallery/Gallery";
import Home from "../components/pages/home/Home";
import FormLogin from "../components/pages/login/FormLogin";
import PrivateRouter from "./PrivateRouter";

function AppRouter({
  personajes,
  onClose,
  onSearch,
  loged,
  login,
  logOut,
  favorite,
}) {
  return (
    <>
      <Routes>
        <Route path="/login" exact element={<FormLogin loged={loged} />} />
        <Route element={<PrivateRouter login={login} />}>
          <Route path="/" element={<Nav onSearch={onSearch} logOut={logOut} />}>
            <Route
              index
              exact
              element={
                <Home
                  personajes={personajes}
                  onClose={onClose}
                  favorite={favorite}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery favorite={favorite} />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route
              path="/favorite"
              element={<Favorite favorite={favorite} />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;
