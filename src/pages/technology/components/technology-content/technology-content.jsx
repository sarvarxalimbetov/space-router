import React from "react";
import "./technology-content.css";

const TechnologyContent = ({img, title, desc}) => {
  return (
    <div className="technology_outlet">
      <div className="technology_info">
        <p className="technology_text">THE TERMINOLOGY…</p>
        <h1 className="technology_subtitle">{title}</h1>
        <p className="technology_desc">{desc}</p>
      </div>

      <img src={img} alt="technology image" className="technology_img" />
    </div>
  );
};

export default TechnologyContent;
