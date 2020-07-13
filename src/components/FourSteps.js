import React from "react";
import { NavLink } from "react-router-dom";

const FourSteps = () => {
  return (
    <div className="fourSteps" id="fourSteps">
      <h3>Wystarczą 4 proste kroki</h3>
      <div className="decoration"></div>
      <div className="steps">
        <div className="one-step">
          <div className="t-shirt"></div>
          <h4>Wybierz rzeczy</h4>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="one-step">
          <div className="bag"></div>
          <h4>Spakuj je</h4>
          <p>skorzystaj z worków na śmieci</p>
        </div>
        <div className="one-step">
          <div className="loupe"></div>
          <h4>Zdecyduj komu chcesz pomóc</h4>
          <p>wybierz zaufane miejsce</p>
        </div>
        <div className="one-step">
          <div className="arrow"></div>
          <h4>Zamów kuriera</h4>
          <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>
      <div>
        <NavLink to="/logowanie">
          <button>ODDAJ RZECZY</button>
        </NavLink>
      </div>
    </div>
  );
};

export { FourSteps };
