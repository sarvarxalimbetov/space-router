import React from "react";
import './crew-content.css'

const CrewContent = ({img, job, name, desc}) => {
  return (
    <>
      <div className="crew_info">
        <h3 className="crew_job">{job}</h3>
        <h1 className="crew_name">{name}</h1>
        <p className="crew_desc">{desc}</p>
      </div>

      <img className="crew_image" src={img} alt="crew image" />
    </>
  );
};

export default CrewContent;
