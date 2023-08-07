import React from "react";
import CrewContent from "../../components/crew-content";
import data from "../../data.js"
import crew4_img from "../../../../assets/images/crew4.png"

const Crew4 = () => {
  return (
      <CrewContent img={crew4_img} {...data[3]} />
  );
};

export default Crew4;
