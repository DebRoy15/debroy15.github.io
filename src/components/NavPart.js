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
      <div className="container pl-1">
        <Navbar className="nav p-0">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto nav-left-side">
            <Nav.Link href="#home" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="nav-item">
              About
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-item">
              Service
            </Nav.Link>
            <Nav.Link href="#home" className="nav-item">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#features" className="nav-item">
              Blog
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-item">
              Contact
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto nav-right-side">
            <Nav.Link href="#home" className="nav-item mr-4">
              <GitHubIcon />
            </Nav.Link>
            <Nav.Link href="#features" className="nav-item mr-4">
              <LinkedInIcon />
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-item mr-4">
              <InstagramIcon />
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-item mr-4">
              <TwitterIcon />
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};

export default NavPart;
