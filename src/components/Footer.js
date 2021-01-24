import React from "react";
import "../styles/_footer.scss";
import { Col, Row } from "react-bootstrap";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  return (
    <div className="footer pb-4 pt-4 ">
      <div className="container">
        <Row className="justify-content-between align-items-center">
          <Col md={4}>
            <div className="d-flex justify-content-between footer-info">
              <LinkedInIcon />
              <TwitterIcon />
              <InstagramIcon />
              <GitHubIcon />
            </div>
          </Col>
          <Col md={7}>
            <ul className="d-flex justify-content-between w-100 footer-info">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
