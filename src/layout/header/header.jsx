import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./header.css";

const Header = () => {
  const headerRef = React.useRef();

  React.useEffect(() => {
    const headerTabs = headerRef.current.children;

    for (let i = 0; i < headerTabs.length; i++) {
      const tab = headerTabs[i];

      tab.addEventListener("click", (e) => {
        for (let j = 0; j < headerTabs.length; j++) {
          headerTabs[j].classList.remove("active");
        }
        tab.classList.add("active");
      });
    }
  }, []);

  return (
    <div className="header">
      <img className="header_logo" src={logo} alt="logo" />

      <nav className="header_nav">
        <ul className="header_list" ref={headerRef}>
          <li className="header_item active">
            <Link className="header_item" to="/">
              00 home
            </Link>
          </li>
          <li className="header_item">
            <Link className="header_item" to="/destination">
              01 destination
            </Link>
          </li>
          <li className="header_item">
            <Link className="header_item" to="/crew">
              02 crew
            </Link>
          </li>
          <li className="header_item">
            <Link className="header_item" to="/technology">
              03 technology
            </Link>
          </li>
        </ul>
      </nav>

      <span className="header_line"></span>
    </div>
  );
};

export default Header;
