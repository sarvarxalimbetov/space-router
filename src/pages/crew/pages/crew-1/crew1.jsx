import React from "react";
import CrewContent from "../../components/crew-content";
import data from "../../data.js"
import crew1_img from "../../../../assets/images/crew1.png"

const Crew1 = () => {
  return (
      <CrewContent img={crew1_img} {...data[0]} />
  );
};

export default Crew1;
