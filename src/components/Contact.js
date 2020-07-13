import React, { useState, useContext } from "react";
import { FirebaseContext } from "./firebase";

const Contact = () => {
  const firebase = useContext(FirebaseContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({});
  const [confirm, setConfirm] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const regName = /^[A-Za-z]+$/;
  const regEmail = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

  const errors = {};
  const validation = () => {
    errors.name = !regName.test(form?.name)
      ? "Podane imię jest nieprawidłowe!"
      : "";
    errors.email = !regEmail.test(form?.email)
      ? "Podany email jest nieprawidłowy!"
      : "";
    errors.message =
      form?.message.length <= 120
        ? "Wiadomość musi mieć conajmniej 120 znaków!"
        : "";
    const isError = Object.values(errors).findIndex((err) => err?.length) > -1;
    setError(errors);
    return isError;
  };

  const messageRef = firebase.message;

  const submit = (e) => {
    e.preventDefault();
    if (validation()) return;
    const newMessageRef = messageRef.push();
    newMessageRef.set(form);
    setConfirm("Wiadomość została wysłana! Wkrótce się z Tobą skontaktujemy");
    form.name = "";
    form.email = "";
    form.message = "";
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-main">
        <h1>Skontaktuj się z nami</h1>
        <div className="decoration"></div>
        <p className="confirm">{confirm}</p>
        <form onSubmit={submit}>
          <div className="contact-form-part-one">
            <div>
              <label>Wpisz swoje imię</label>
              <input
                type="text"
                name="name"
                placeholder="Krzysztof"
                value={form.name}
                onChange={handleChange}
              />
              <p>{error.name}</p>
            </div>
            <div>
              <label>Wpisz swoje email</label>
              <input
                type="email"
                name="email"
                placeholder="abc@xyz.pl"
                value={form.email}
                onChange={handleChange}
              />
              <p>{error.email}</p>
            </div>
          </div>
          <label>Wpisz swoją waidomość</label>
          <textarea
            type="text"
            name="message"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            value={form.message}
            onChange={handleChange}
          />
          <p>{error.message}</p>
          <button type="submit">Wyślij</button>
        </form>
        <div className="fb-inst">
          <div className="fb"></div>
          <div className="inst"></div>
        </div>
      </div>
    </div>
  );
};

export { Contact };
