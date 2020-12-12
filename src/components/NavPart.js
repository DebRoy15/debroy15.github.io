import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

const NavPart = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Service</Nav.Link>
          <Nav.Link href="#home">Portfolio</Nav.Link>
          <Nav.Link href="#features">Blog</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link href="#home">github</Nav.Link>
          <Nav.Link href="#features">in</Nav.Link>
          <Nav.Link href="#pricing">insta</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavPart;
