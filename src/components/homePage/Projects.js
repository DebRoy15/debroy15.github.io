import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";

const myProjects = [
  {
    image: "/images/project-7.png",
    title: "Socially Connect",
    description:
      " Socially Connect is a social media platform for hosting and attending events. This is a full-stack application where I have used React with Typescript and Mobx as Frontend and Dotnet core as the Backend. I have used Postgres SQL for the database.",
    source: "https://github.com/DebRoy15/socialMediaApp",
    demoLink: "https://sociallyconnect.herokuapp.com",
  },
  {
    image: "/images/project-2.png",
    title: "Amazon Clone",
    description:
      "It's an e-commerce website. I used React and Redux to build the front end. I have also added a payment gateway(Stripe). For saving Data in the database and authentication, I have used Firebase.",
    source: "https://github.com/DebRoy15/amazon-clone",
    demoLink: "https://amazon-clone05.netlify.app/",
  },
  {
    image: "/images/project-5.png",
    title: "Spotify Clone",
    description:
      "It is music application where we can listen music and also change song. I have used react.js.",
    source: "https://github.com/DebRoy15/Spotify-clone",
    demoLink: "https://simple-spotify-clone.netlify.app/",
  },
  {
    image: "/images/project-3.png",
    title: "Photographer Eye",
    description:
      " It is a photographer portfolio website developed on react. I have used Framer Motion for animation.",
    source: "https://github.com/DebRoy15/photographer-website",
    demoLink: "https://photographereye.netlify.app/",
  },
  {
    image: "/images/project-4.png",
    title: "Headphone Page",
    description:
      "This is a simple headphone store page. I have used html and css in this project",
    source: "https://github.com/DebRoy15/headphone-page",
    demoLink: "https://headphoonestore.netlify.app/",
  },
  {
    image: "/images/project-6.png",
    title: "SuperHero Hunter",
    description:
      "This is an superhero find website developed on react. I have used superhero api in this project.",
    source: "https://github.com/DebRoy15/react-supermanapp",
    demoLink: "https://searchsuperhero.netlify.app/",
  },
];

const Projects = () => {
  const [element, controls] = useScroll();
  return (
    <div className="projects" id="projects">
      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container pt-6 pb-6"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Pro</span>jects
          </h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project) => {
              return (
                <Col md={4} className="mb-5">
                  <div className="project-card">
                    <div className="img-section">
                      <img src={project.image} alt="" />
                      <div className="imageCardEffect"></div>
                    </div>
                    <div className="project-info">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.description}</p>
                      <div className="d-flex justify-content-between mr-4">
                        <a
                          href={project.source}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code
                        </a>
                        <a
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
