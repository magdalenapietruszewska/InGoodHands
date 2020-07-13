import React from "react";
import { Nav } from "./Nav";
import { NavLink } from "react-router-dom";

const Logoutn = () => {
  return (
    <>
      <Nav />
      <div className="login">
        <h1>Wylogowanie nastąpiło pomyślnie!</h1>
        <div className="decoration"></div>
        <NavLink to="/">Strona główna</NavLink>
      </div>
    </>
  );
};

export { Logoutn };
