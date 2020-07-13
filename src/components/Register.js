import React, { useState, useContext } from "react";
import { Nav } from "./Nav";
import { NavLink, useHistory } from "react-router-dom";
import { FirebaseContext } from "./firebase";

const Register = () => {
  const firebase = useContext(FirebaseContext);
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
  const errors = {};
  const validation = () => {
    errors.email = !reg.test(user?.email)
      ? "Podany email jest nieprawidłowy!"
      : "";
    errors.password =
      user?.password.length < 6 ? "Podane hasło jest za krótkie!" : "";
    errors.password2 =
      user?.password2 !== user.password ? "Podane hasła nie są jednakowe!" : "";
    const isError = Object.values(errors).findIndex((err) => err?.length) > -1;
    setError(errors);
    return isError;
  };

  const submit = (e) => {
    e.preventDefault();
    if (validation()) return;
    let email = user.email;
    let password = user.password;
    firebase.auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        history.push("/oddaj-rzeczy");
      })
      .catch((error) => {
        setUser({ error });
      });
  };

  return (
    <>
      <Nav />
      <div className="login">
        <h1>Załóż konto</h1>
        <div className="decoration"></div>
        <form onSubmit={submit}>
          <div className="log-form">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <p>{error.email}</p>
            <label>Hasło</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            <p>{error.password}</p>
            <label>Powtórz hasło</label>
            <input
              type="password"
              name="password2"
              value={user.password2}
              onChange={handleChange}
            />
            <p>{error.password2}</p>
          </div>
          <div className="log-btn">
            <NavLink to="/logowanie">Zaloguj się</NavLink>
            <button type="submit">Załóż konto</button>
          </div>
        </form>
      </div>
    </>
  );
};

export { Register };
