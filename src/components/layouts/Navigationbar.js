import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigationbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          Reservation.LK <i className="fas fa-atlas" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/aboutus">
              <Nav.Link>AboutUs</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link> Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/selection">
              <Nav.Link> Selection</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
