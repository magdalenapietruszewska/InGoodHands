import React from "react";

const ShareStep3 = ({ handleChange, checkbox, form, nextStep, prevStep }) => {
  return (
    <>
      <div className="yellowStripe">
        <h4>Ważne!</h4>
        <p>
          Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
          wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź
          celu ich pomocy.
        </p>
      </div>
      <div className="img-teddy rwd3">
        <p className="step">Krok 3/4</p>
        <h5> Lokalizacja: </h5>
        <select
          name="localization"
          onChange={handleChange}
          defaultValue={form.localization}
        >
          <option value="Poznań">Poznań</option>
          <option value="Warszawa">Warszawa</option>
          <option value="Kraków">Kraków</option>
          <option value="Wrocław">Wrocław</option>
          <option value="Katowice">Katowice</option>
        </select>
        <label className="step3">Komu chcesz pomóc? </label>
        <div className="helpGroupsCheck">
          <label>
            <input
              checked={form.helpGroups.includes("dzieciom") === true && true}
              type="checkbox"
              name="helpGroups"
              value="dzieciom"
              onChange={checkbox}
            />
            <span> dzieciom</span>
          </label>
          <label>
            <input
              checked={
                form.helpGroups.includes("samotnym matkom") === true && true
              }
              type="checkbox"
              name="helpGroups"
              value="samotnym matkom"
              onChange={checkbox}
            />
            <span> samotym matkom</span>
          </label>
          <label>
            <input
              checked={form.helpGroups.includes("bezdomym") === true && true}
              type="checkbox"
              name="helpGroups"
              value="bezdomym"
              onChange={checkbox}
            />
            <span>bezdomnym</span>
          </label>
          <label>
            <input
              checked={
                form.helpGroups.includes("niepełnosprawnym") === true && true
              }
              type="checkbox"
              name="helpGroups"
              value="niepełnosprawnym"
              onChange={checkbox}
            />
            <span>niepełnosprawnym</span>
          </label>
          <label>
            <input
              checked={
                form.helpGroups.includes("osobom starszym") === true && true
              }
              type="checkbox"
              name="helpGroups"
              value="osobom starszym"
              onChange={checkbox}
            />
            <span>osobom starszym</span>
          </label>
        </div>
        <div>
          <label className="step3">
            Wpisz nazwę konkretnej organizacji (opcjonalnie)
          </label>
          <input
            type="text"
            name="localizationSpecific"
            className="localizationSpecific"
            value={form.localizationSpecific}
            onChange={handleChange}
          />
        </div>
        <div className="stepsButton">
          <button onClick={prevStep}>Wstecz</button>
          <button onClick={nextStep}>Dalej</button>
        </div>
      </div>
    </>
  );
};

export { ShareStep3 };
