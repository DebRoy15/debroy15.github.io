import React from "react";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div id="home" className="fix ">
      <div className="bg-image">
        <div className="container home-page-intro">
          <Row className="home-row">
            <Col md={8} xs={12}>
              <div className="intro-section">
                <h5 className="mb-5">Welcome to my world</h5>
                <h1 className="mb-4">
                  Hi, I'm <span className="chonburi-font green-text">Deb</span>
                  jyoti Roy
                </h1>
                <h2 className="mb-4">
                  <span className="chonburi-font green-text">Software</span>{" "}
                  Developer
                </h2>
                <h3>Based in India</h3>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
