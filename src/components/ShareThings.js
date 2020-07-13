import React, { useState, useContext } from "react";
import { Contact } from "./Contact";
import { Nav } from "./Nav";
import { FirebaseContext } from "./firebase";
import { ShareStep1 } from "./steps/ShareStep1";
import { ShareStep2 } from "./steps/ShareStep2";
import { ShareStep3 } from "./steps/ShareStep3";
import { ShareStep4 } from "./steps/ShareStep4";
import { Summary } from "./steps/Summary";
import { Thanks } from "./steps/Thanks";

const ShareThings = () => {
  const firebase = useContext(FirebaseContext);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    type: "",
    bags: "",
    localization: "",
    helpGroups: "",
    localizationSpecific: "",
    street: "",
    city: "",
    postCode: "",
    phone: "",
    date: "",
    time: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const checkbox = (e) => {
    const { name, value } = e.target;
    if (form.helpGroups.indexOf(value) === -1) {
      setForm((prevState) => {
        return {
          ...prevState,
          [name]: prevState.helpGroups.concat(value, " "),
        };
      });
    } else {
      setForm((prevState) => {
        return {
          ...prevState,
          [name]: prevState.helpGroups.replace(value, "").trim(),
        };
      });
    }
  };

  const submit = (e) => {
    e.preventDefault();
    const newShare = firebase.shareThings.push();
    newShare.set(form);
    setStep(6);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <>
      <div className="home-header">
        <div className="img-sweater"></div>
        <div>
          <Nav />
          <div className="header-main">
            <h1>Oddaj rzeczy, których już nie chcesz</h1>
            <h1> POTRZEBUJĄCYM</h1>
            <div className="decoration"></div>
            <h2>Wystarczą 4 proste kroki:</h2>
            <ul className="little-four-steps">
              <li>
                <h3>1</h3>
                <p>Wybierz rzeczy</p>
              </li>
              <li>
                <h3>2</h3>
                <p>Spakuj je w worki</p>
              </li>
              <li>
                <h3>3</h3>
                <p>Wybierz fundację</p>
              </li>
              <li>
                <h3>4</h3>
                <p>Zamów kuriera</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {step === 1 && (
        <ShareStep1
          handleChange={handleChange}
          nextStep={nextStep}
          form={form}
        />
      )}
      {step === 2 && (
        <ShareStep2
          handleChange={handleChange}
          form={form}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      )}
      {step === 3 && (
        <ShareStep3
          checkbox={checkbox}
          form={form}
          handleChange={handleChange}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      )}
      {step === 4 && (
        <ShareStep4
          handleChange={handleChange}
          form={form}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      )}
      {step === 5 && (
        <Summary form={form} submit={submit} prevStep={prevStep} />
      )}
      {step === 6 && <Thanks />}
      <Contact />
    </>
  );
};

export { ShareThings };
