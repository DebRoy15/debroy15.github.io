import React from "react";
import { Col, Row } from "react-bootstrap";

const skills = [
  {
    logo: "",
    name: "",
  },
];

const Skills = () => {
  return (
    <div>
      <Row>
        {skills.map((skill) => {
          return (
            <Col>
              <div>
                <img src="" alt="" />
                <h4>name</h4>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Skills;
