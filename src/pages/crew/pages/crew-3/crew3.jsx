import React from "react";
import CrewContent from "../../components/crew-content";
import data from "../../data.js"
import crew3_img from "../../../../assets/images/crew3.png"

const Crew3 = () => {
  return (
      <CrewContent img={crew3_img} {...data[2]} />
  );
};

export default Crew3;
