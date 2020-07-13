import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useHistory } from "react-router-dom";
import { FirebaseContext } from "./firebase";

const Nav = () => {
  const firebase = useContext(FirebaseContext);
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [user, setUser] = useState(false);

  useEffect(() => {
    firebase.auth.onAuthStateChanged((user) => {
      if (user !== null) {
        setUser(user.email);
      }
    });
  }, []);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const openMenu = () => {
    setShowMenu((prev) => !prev);
    console.log(showMenu);
  };

  const options = {
    duration: 1500,
    delay: 100,
    smooth: true,
  };

  const logout = () => {
    firebase.auth.signOut();
    setUser(false);
    history.push("/wylogowano");
  };

  return (
    <>
      <div>
        <FontAwesomeIcon
          className="hamburger"
          id="hamburger"
          icon={faBars}
          onClick={() => openMenu()}
        />
      </div>
      <nav>
        {user === false ? (
          <div className="nav-login">
            <NavLink to="/logowanie">Zaloguj</NavLink>
            <NavLink to="/rejestracja">Załóż konto</NavLink>
          </div>
        ) : (
          <div className="nav-login log-nav-login">
            <p>Cześć {user}!</p>
            <NavLink to="/oddaj-rzeczy">Oddaj rzeczy</NavLink>
            <p onClick={logout}>Wyloguj</p>
          </div>
        )}
        {(showMenu === true || width > 820) && (
          <div className="nav-menu">
            <ul className="nav-menu-list">
              <li>
                <NavLink to="/">Start</NavLink>
              </li>
              <li>
                <Link to="fourSteps" {...options}>
                  O co chodzi?
                </Link>
              </li>
              <li>
                <Link to="aboutUs" {...options}>
                  O nas
                </Link>
              </li>
              <li>
                <Link to="fundations" {...options}>
                  Fundacja i organizacje
                </Link>
              </li>
              <li>
                <Link to="contact" {...options}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export { Nav };
