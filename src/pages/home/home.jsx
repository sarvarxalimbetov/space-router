import React from "react";
import Header from "../../layout/header/header";
import Container from "../../UI/container/container";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Container>
        <div className="home_content">
          <div className="home_info">
            <h2 className="header_subtitle">so, you want to travel to</h2>
            <h1 className="header_title">space</h1>
            <p className="header_desc">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="home_explore">explore</div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
