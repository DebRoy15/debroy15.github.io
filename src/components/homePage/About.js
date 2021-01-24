import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import WorkIcon from "@material-ui/icons/Work";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

const About = () => {
  const [tab, setTab] = useState("experience");
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
                <div className="tabs mb-5">
                  <div
                    className={`
                      ${tab === "experience" ? "active-tab" : "inactive-tab"}`}
                    onClick={() => setTab("experience")}
                  >
                    <WorkIcon />
                    <h4>Experiences</h4>
                  </div>
                  <div
                    className={`
                      ${tab === "education" ? "active-tab" : "inactive-tab"}`}
                    onClick={() => setTab("education")}
                  >
                    <LocalLibraryIcon />
                    <h4>
                      Education &<br /> Certification
                    </h4>
                  </div>
                </div>
                <div className="about-sub-data">
                  {tab === "experience" ? (
                    <div className="work-experiences">
                      <h5>Turtleye tech</h5>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quos dolor magni quo iusto quis aperiam, at
                        cupiditate expedita iure. Odit blanditiis nobis quam
                        delectus inventore sed distinctio alias modi adipisci.
                      </p>
                    </div>
                  ) : null}
                  {tab === "education" ? (
                    <div className="education">
                      <div>
                        <h5>BootCamp</h5>
                        <p>
                          Completed in <strong>Full stack Program</strong> in{" "}
                          <strong>Java, html, css</strong>
                        </p>
                      </div>
                      <div>
                        <h5>BTech</h5>
                        <p>
                          graduated in{" "}
                          <strong>Electronics Communication Engineering</strong>{" "}
                          in <strong>2019</strong>
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
