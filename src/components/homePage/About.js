import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import WorkIcon from "@material-ui/icons/Work";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SkillSvg from "../../images/about-shape.svg";

import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";

const About = () => {
  const [tab, setTab] = useState("experience");
  const [element, controls] = useScroll();

  return (
    <motion.div id="about" className="about pb-6 pt-6">
      <img className="skills-img" src={SkillSvg} alt="" />

      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container"
      >
        <Row className="">
          <Col className="p-0 text-center" md={5}>
            <img className="about-img" src="/images/pro-pic.jpg" alt="" />
          </Col>
          <Col className="" md={7}>
            <div className="about-info">
              <h1 className="pb-4">
                <span className="chonburi-font green-text ">Abo</span>ut Me
              </h1>
              <p className="">
                Worked as a Software Developer at start‑up company Turtleye
                tech. I have experience in the backend and frontend development
                and computer security. Interested in devising a better
                problem‑solving method for challenging tasks, and learning new
                technologies and tools if the need arises.
              </p>
              <div className="d-flex align-items-center resume-section ">
                <h6>Resume :</h6>
                <a href="/my-resume.pdf" target="_blank">
                  View
                </a>
              </div>
              <div className="mt-5">
                <Row className="tabs mb-2">
                  <Col
                    className={`
                      ${
                        tab === "experience"
                          ? "active-tab custom-mr-3"
                          : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("experience")}
                  >
                    <WorkIcon />
                    <h5>Experiences</h5>
                  </Col>
                  <Col
                    className={`
                      ${
                        tab === "education"
                          ? "active-tab custom-ml-3"
                          : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("education")}
                  >
                    <LocalLibraryIcon />
                    <h5>Educations</h5>
                  </Col>
                </Row>
                <div className="about-sub-data">
                  {tab === "experience" ? (
                    <div className="work-experiences">
                      <div>
                        <h5>Huron</h5>
                        <ul>
                          <li>
                            Hands-on experience on multiple products. Develop
                            various solutions for different problems on Web API,
                            WCF services, etc. Implemented solution for Session
                            Hijacking, script injection prevention, Hashing and
                            salting data, etc.
                          </li>
                          <li>
                            Developed code for uploading xlsx ﬁles then
                            extraction, validation, and storing the data in the
                            database. Hands-on Experience in LINQ, Entity
                            Framework, and Report Server.
                          </li>
                          <li>
                            Good exposure to Front-end development with Angular,
                            Bootstrap, and JQuery in the project. Industry
                            experience in version control systems Git and Azure
                            DevOps and AWS services (Pinpoint, Lamda, SQS,
                            Secret Manager, etc).
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5>Turtleye tech</h5>
                        <ul>
                          <li>
                            Hands-on experience in the designing, and developing
                            of the application with team members.
                          </li>
                          <li>
                            Worked in Front-end development of the website with
                            React Js for car share and rental booking
                            applications.
                          </li>
                          <li>
                            Experience in implementation of secure
                            Authentication and Authorization on the website.
                            Implemented Google autocomplete and Maps for
                            searching cars and rentals on the website.
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : null}
                  {tab === "education" ? (
                    <div className="education">
                      <div>
                        <h5>Crio.do</h5>
                        <ul>
                          <li className="text-justify">
                            Worked on guided internship-grade projects in a real
                            dev environment. Learned HTML, CSS, JavaScript,
                            React, Node Js
                          </li>
                        </ul>
                      </div>
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
      </motion.div>
    </motion.div>
  );
};

export default About;
