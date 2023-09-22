import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavApp = ({ setSearch }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <div className="container-fluid">
        <Navbar.Brand href="#home" className="ms-4">
          Severus Market
        </Navbar.Brand>
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
          <Nav className="justify-content-end">
            <SearchBar setSearch={setSearch} />
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavApp;
