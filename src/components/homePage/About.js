import React from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";

const About = () => {
  return (
    <div id="features" className="about">
      <div className="container">
        <Row>
          <Col className="" md={5}>
            <img
              className="about-img"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </Col>
          <Col className="" md={7}>
            <div className="about-info">
              <div className="about-info-des">
                <h1>About Me</h1>
                <p className="">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which dont look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum,
                </p>
              </div>
              <div className="mt-5">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                  <Tab eventKey="home" title="Main skills" className="bg-none">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      dont look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum,
                    </p>
                  </Tab>
                  <Tab
                    eventKey="profile"
                    title="Experience"
                    className="bg-none"
                  >
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      dont look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum,
                    </p>
                  </Tab>
                  <Tab
                    eventKey="contact"
                    title="Education & Certification"
                    className="bg-none"
                  >
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      dont look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum,
                    </p>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
