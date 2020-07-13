import React from "react";

const Summary = ({ form, submit, prevStep }) => {
  return (
    <>
      <div className="img-teddy rwdsum">
        <h5 className="sumh">Podsumowanie Twojej darowizny</h5>
        <p className="step3"> Oddajesz:</p>
        <div className="summary-part1">
          <div className="t-shirt2" /> {form.bag} worki, {form.type},{" "}
          {form.helpGroups}
        </div>
        <div className="summary-part1">
          <div className="arrow2" /> dla lokalizacji: {form.localization}
        </div>
        <div>
          <div className="summary">
            <div>
              <p className="step3">Adres odbioru:</p>
              <table>
                <tbody>
                  <tr>
                    <td>Ulica</td>
                    <td>{form.street}</td>
                  </tr>
                  <tr>
                    <td>Miasto</td>
                    <td>{form.city}</td>
                  </tr>
                  <tr>
                    <td>Kod pocztowy</td>
                    <td>{form.postCode}</td>
                  </tr>
                  <tr>
                    <td>Numer telefonu</td>
                    <td>{form.phone}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <p className="step3">Termin odbioru:</p>
              <table>
                <tbody>
                  <tr>
                    <td>Data</td>
                    <td>{form.date}</td>
                  </tr>
                  <tr>
                    <td>Godzina</td>
                    <td>{form.time}</td>
                  </tr>
                  <tr>
                    <td>Uwagi dla kuriera</td>
                    <td>{form.note}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="stepsButton">
            <button onClick={prevStep}>Wstecz</button>
            <button onClick={submit}>Potwierdzam</button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Summary };
