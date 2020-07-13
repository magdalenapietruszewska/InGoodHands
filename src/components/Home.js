import React from "react";
import { HomeHeader } from "./HomeHeader";
import { HomeThreeColumns } from "./HomeThreeColumns";
import { FourSteps } from "./FourSteps";
import { AboutUs } from "./AboutUs";
import { Fundations } from "./Fundations";
import { Contact } from "./Contact";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeThreeColumns />
      <FourSteps />
      <AboutUs />
      <Fundations />
      <Contact />
    </>
  );
};

export { Home };
