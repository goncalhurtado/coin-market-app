import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavApp = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="">
        <Navbar.Brand href="#home">Severus Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/*"></Link>
            <Link className="navapp_link" to="/">
              Criptomonedas
            </Link>
            <Link className="navapp_link " to="/community">
              Comunidad
            </Link>
            <Link className="navapp_link" to="/news">
              Noticias
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavApp;
