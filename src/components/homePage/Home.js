import React from "react";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div id="home" className="fix ">
      <div className="bg-image">
        <div className="container home-page-intro">
          <Row className="home-row">
            <Col md={6}>
              <div className="intro-section">
                <h5>Welcome to my world</h5>
                <h1>Hi, I'm Deb Roy</h1>
                <h2>Software Engineer</h2>
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
