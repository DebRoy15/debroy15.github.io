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
          <Col md={4} xs={12}>
            <div className="d-flex justify-content-between footer-info mt-4">
              <LinkedInIcon />
              <TwitterIcon />
              <InstagramIcon />
              <GitHubIcon />
            </div>
          </Col>
          <Col md={7} xs={12}>
            <ul className="d-flex justify-content-between p-0 w-100 footer-info mt-4 ">
              <li className="p-1">Home</li>
              <li className="p-1">About</li>
              <li className="p-1">Service</li>
              <li className="p-1">Portfolio</li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
