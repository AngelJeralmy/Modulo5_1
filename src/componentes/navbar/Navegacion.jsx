import React from "react";
import { Navbar, Container, Nav } from "React-bootstrap";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <Navbar bg="warning" variant="dark" className="navbar">
      <Container className="flex-row-reverse">
        <Navbar.Brand>🍺​ My BEautifullBEer</Navbar.Brand>
        <Nav>
          <Link to="/" className="text-white text-decoration-none ms-3">
          ​​🏘️​Principal
          </Link>
          <Link
            to="/contacto"
            className="text-white text-decoration-none ms-3">
            ​📜​Contacto
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Navegacion;
