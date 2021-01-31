import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "../styles/_nav.scss";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

const NavPart = () => {
  return (
    <div className="fixed ">
      <div className="container">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/" className="logo">
            DR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto nav-left-side">
              <Nav.Link href="#home" className="nav-item">
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="nav-item">
                About
              </Nav.Link>

              <Nav.Link href="#skills" className="nav-item">
                Skills
              </Nav.Link>
              <Nav.Link href="#projects" className="nav-item">
                Projects
              </Nav.Link>

              <Nav.Link href="#contact" className="nav-item">
                Contact
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto w-25">
              <div className="d-flex justify-content-between w-100 nav-item">
                <GitHubIcon />
                <LinkedInIcon />
                <InstagramIcon />
                <TwitterIcon />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavPart;
