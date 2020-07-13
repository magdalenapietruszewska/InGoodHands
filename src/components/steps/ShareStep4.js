import React, { useState } from "react";

const ShareStep4 = ({ handleChange, form, nextStep, prevStep }) => {
  const [error, setError] = useState({});

  const validation = () => {
    const reg = /^[0-9]{2}-[0-9]{3}$/;
    const regPhone = /^[0-9]{9}$/;
    const errors = {};
    errors.street =
      form?.street.length < 2 ? "Podana ulica jest nieprawidłowa!" : "";
    errors.city =
      form?.city.length < 2 ? "Podane miasto jest nieprawidłowe!" : "";
    errors.postCode = !reg.test(form?.postCode)
      ? "Podany kod pocztowy jest nieprawidłowy!"
      : "";
    errors.phone = !regPhone.test(form?.phone)
      ? "Podany numer jest nieprawidłowy!"
      : "";
    const isError = Object.values(errors).findIndex((err) => err?.length) > -1;
    setError(errors);
    return isError;
  };

  const nextStep2 = () => {
    if (validation()) return;
    nextStep();
  };

  return (
    <>
      <div className="yellowStripe">
        <h4>Ważne!</h4>
        <p>Podaj adres oraz termin odbioru rzeczy.</p>
      </div>
      <div className="img-teddy rwd4">
        <p className="step">Krok 4/4</p>
        <h5> Podaj adres oraz termin odbioru rzecz przez kuriera </h5>
        <div className="step4">
          <div>
            <p className="step3">Adres odbioru</p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label>Ulica</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="street"
                      value={form.street}
                      onChange={handleChange}
                    />
                    <p>{error.street}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Miasto</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                    />
                    <p>{error.city}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Kod pocztowy</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="postCode"
                      value={form.postCode}
                      onChange={handleChange}
                    />
                    <p>{error.postCode}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Numer telefonu</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                    />
                    <p>{error.phone}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <p className="step3">Termin odbioru</p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label>Data</label>
                  </td>
                  <td>
                    <input
                      min="2020-07-13"
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Godzina</label>
                  </td>
                  <td>
                    <input
                      min="08:00"
                      max="22:00"
                      type="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Uwagi dla kuriera</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="note"
                      value={form.note}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="stepsButton">
          <button onClick={prevStep}>Wstecz</button>
          <button onClick={nextStep2}>Dalej</button>
        </div>
      </div>
    </>
  );
};

export { ShareStep4 };
