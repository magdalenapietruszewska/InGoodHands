import React from "react";

const ShareStep2 = ({ handleChange, nextStep, prevStep, form }) => {
  return (
    <>
      <div className="yellowStripe">
        <h4>Ważne!</h4>
        <p>
          Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
          jak poprawnie spakować rzeczy znajdziesz TUTAJ.
        </p>
      </div>
      <div className="img-teddy">
        <p className="step">Krok 2/4</p>
        <h5> Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy: </h5>
        <label>Liczba 60l worków:</label>
        <select
          className="bags"
          name="bags"
          onChange={handleChange}
          defaultValue={form.bags}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div className="stepsButton">
          <button onClick={prevStep}>Wstecz</button>
          <button onClick={nextStep}>Dalej</button>
        </div>
      </div>
    </>
  );
};

export { ShareStep2 };
