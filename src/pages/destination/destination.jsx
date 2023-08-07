import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./destination.css";

const Destination = () => {
  const ref = React.useRef();

  React.useEffect(() => {
    const itemTabs = ref.current.children;

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
    <div className="destination">
      <div className="destination_nav">
        <h1 className="destination_title">01 pick your destination</h1>

        <ul className="destination_list" ref={ref}>
          <li className="destination_item active">
            <Link className="destination_link" to="/destination">
              moon
            </Link>
          </li>
          <li className="destination_item">
            <Link className="destination_link" to="/destination/mars">
              mars
            </Link>
          </li>
          <li className="destination_item">
            <Link className="destination_link" to="/destination/europa">
              europa
            </Link>
          </li>
          <li className="destination_item">
            <Link className="destination_link" to="/destination/titan">
              titan
            </Link>
          </li>
        </ul>
      </div>
      <div className="destination_content">
        <Outlet />
      </div>
    </div>
  );
};

export default Destination;
