import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const myProjects = [
  {
    image: "",
    title: "name",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    liveLink: "",
    demoLink: "",
  },
  {
    image: "",
    title: "name",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    liveLink: "",
    demoLink: "",
  },
  {
    image: "",
    title: "name",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    liveLink: "",
    demoLink: "",
  },
  {
    image: "",
    title: "name",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    liveLink: "",
    demoLink: "",
  },
  {
    image: "",
    title: "name",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    liveLink: "",
    demoLink: "",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <div className="container pb-5">
        <div className="heading-section">
          <h1>My Projects</h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project) => {
              return (
                <Col md={4} className="mb-4">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUuX7jpNbDfQz4wyyq6iuM9B8PLibtbdCjA&usqp=CAU"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>Some quick example</Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Projects;
