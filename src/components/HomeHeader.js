import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "./Nav";

const HomeHeader = () => {
  return (
    <div className="home-header" id="start">
      <div className="img-box"></div>
      <div>
        <Nav />
        <div className="header-main">
          <h1>Zacznij pomagać!</h1>
          <h1> Oddaj niechciane rzeczy w zaufane ręce</h1>
          <div className="decoration"></div>
          <div className="two-btn">
            <NavLink to="/logowanie">
              <button>ODDAJ RZECZY</button>
            </NavLink>
            <NavLink to="/logowanie">
              <button>ZORGANIZUJ ZBIÓRKĘ</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomeHeader };
