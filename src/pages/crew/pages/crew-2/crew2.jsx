import React from "react";
import CrewContent from "../../components/crew-content";
import data from "../../data.js"
import crew2_img from "../../../../assets/images/crew2.png"

const Crew2 = () => {
  return (
      <CrewContent img={crew2_img} {...data[1]} />
  );
};

export default Crew2;
