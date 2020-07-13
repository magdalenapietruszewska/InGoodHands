import React from "react";

const ShareStep1 = ({ handleChange, nextStep, form }) => {
  return (
    <>
      <div className="yellowStripe">
        <h4>Ważne!</h4>
        <p>
          Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
          wiedzieć komu najlepiej je przekazać.
        </p>
      </div>
      <div className="img-teddy">
        <p className="step">Krok 1/4</p>
        <h5>Zaznacz co chcesz oddać:</h5>
        <div className="radio">
          <input
            type="radio"
            name="type"
            value="ubrania, które nadają się do ponownego użycia"
            checked={
              form.type.includes(
                "ubrania, które nadają się do ponownego użycia"
              ) === true && true
            }
            onChange={handleChange}
          />
          <span className="checkmark"></span>
          <label>ubrania, które nadają się do ponownego użycia</label>
        </div>
        <div className="radio">
          <input
            type="radio"
            name="type"
            value="ubrania, do wyrzucenia"
            checked={
              form.type.includes("ubrania, do wyrzucenia") === true && true
            }
            onChange={handleChange}
          />
          <span className="checkmark"></span>
          <label>ubrania, do wyrzucenia</label>
        </div>
        <div className="radio">
          <input
            type="radio"
            name="type"
            value="zabawki"
            checked={form.type.includes("zabawki") === true && true}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
          <label>zabawki</label>
        </div>
        <div className="radio">
          <input
            type="radio"
            name="type"
            value="książki"
            checked={form.type.includes("książki") === true && true}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
          <label>książki</label>
        </div>
        <div className="radio">
          <input
            type="radio"
            name="type"
            value="inne"
            checked={form.type.includes("inne") === true && true}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
          <label>inne</label>
        </div>
        <div className="stepsButton">
          <button onClick={nextStep}>Dalej</button>
        </div>
      </div>
    </>
  );
};

export { ShareStep1 };
