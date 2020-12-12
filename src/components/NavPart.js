import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "../styles/_nav.sass";

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
            <Nav.Link href="#home" className="nav-item">
              github
            </Nav.Link>
            <Nav.Link href="#features" className="nav-item">
              in
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-item">
              insta
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};

export default NavPart;
