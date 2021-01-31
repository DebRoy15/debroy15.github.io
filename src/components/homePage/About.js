import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import WorkIcon from "@material-ui/icons/Work";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SkillSvg from "../../images/about-shape.svg";

const About = () => {
  const [tab, setTab] = useState("experience");
  return (
    <div id="features" className="about pb-5">
      <img className="skills-img" src={SkillSvg} alt="" />

      <div className="container">
        <Row>
          <Col className="" md={5}>
            <img className="about-img" src="/images/pro-pic.jpg" alt="" />
          </Col>
          <Col className="" md={7}>
            <div className="about-info">
              <div className="about-info-des">
                <h1>
                  <span className="chonburi-font green-text">Abo</span>ut Me
                </h1>
                <p className="">
                  Current Software Developer at start‑up company Turtleye tech.
                  1+ years experience in the backend and frontend development
                  and computersecurity. Interested in devising a better
                  problem‑solving method for challenging tasks, and learning new
                  technologies and tools if the need arises.
                </p>
              </div>
              <div className="mt-5">
                <div className="tabs mb-5">
                  <div
                    className={`
                      ${
                        tab === "experience"
                          ? "active-tab mr-3"
                          : "inactive-tab"
                      }`}
                    onClick={() => setTab("experience")}
                  >
                    <WorkIcon />
                    <h5>Experiences</h5>
                  </div>
                  <div
                    className={`
                      ${
                        tab === "education" ? "active-tab ml-3" : "inactive-tab"
                      }`}
                    onClick={() => setTab("education")}
                  >
                    <LocalLibraryIcon />
                    <h5>
                      Education &<br /> Certification
                    </h5>
                  </div>
                </div>
                <div className="about-sub-data">
                  {tab === "experience" ? (
                    <div className="work-experiences">
                      <h5>Turtleye tech</h5>
                      <ul>
                        <li>
                          Developed Front‑end of a website on React for car
                          share and rental booking application.
                        </li>
                        <li>
                          implemented secure authentication in the website.
                        </li>
                        <li>
                          Implemented Google auto complete and Maps for search
                          car and rental in the website.
                        </li>
                      </ul>
                    </div>
                  ) : null}
                  {tab === "education" ? (
                    <div className="education">
                      <div>
                        <h5>Kodnest</h5>
                        <ul>
                          <li className="text-justify">
                            Completed (JAVA, J2EE, JDBC, Servlet, JSP, SQL,
                            Hibernate, Spring, HTML5, CSS, and JavaScript.)
                            Training from Kodnest, BTM Bangalore.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5>B.tech</h5>
                        <ul>
                          <li className="text-justify">
                            graduated in electronics and communication
                            engineering from Bengal College of Engineering and
                            Technology in 2019.
                          </li>
                        </ul>
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
