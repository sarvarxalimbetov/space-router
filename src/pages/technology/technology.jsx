import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./technology.css";

const Technology = () => {
  const techRef = React.useRef();

  React.useEffect(() => {
    const itemTabs = techRef.current.children;

    for (let i = 0; i < itemTabs.length; i++) {
      const tab = itemTabs[i];

      tab.addEventListener("click", (e) => {
        for (let j = 0; j < itemTabs.length; j++) {
          itemTabs[j].classList.remove("active");
        }
        tab.classList.add("active");
      });
    }
  }, []);

  return (
    <div className="technology">
      <div className="technology_wrapper">
        <h1 className="technology_title">03 space lauch 101</h1>

        <div className="technology_body">
          <ul className="technology_list" ref={techRef}>
            <li className="technology_item active">
              <Link to="/technology" className="technology_link">
                1
              </Link>
            </li>
            <li className="technology_item">
              <Link to="/technology/spaceport" className="technology_link">
                2
              </Link>
            </li>
            <li className="technology_item">
              <Link to="/technology/spacecapsule" className="technology_link">
                3
              </Link>
            </li>
          </ul>

          <div className="technology_content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
