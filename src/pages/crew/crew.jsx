import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./crew.css";

const Crew = () => {
  return (
    <div className="crew">
      <div className="crew_wrapper">
        <h1 className="crew_title">02 meet your crew</h1>

        <div className="crew_content">
          <Outlet />
        </div>

        <ul className="crew_list">
          <li>
            <Link className="crew_item" to='/crew'></Link>
          </li>
          <li>
            <Link className="crew_item" to='/crew/crew2'></Link>
          </li>
          <li>
            <Link className="crew_item" to="/crew/crew3"></Link>
          </li>
          <li>
            <Link className="crew_item" to="/crew/crew4"></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Crew;
