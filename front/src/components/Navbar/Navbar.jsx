import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function CustomNavbar() {
  return (
    <Navbar className={styles.navbar} bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/kadenza.png"
            alt="La Estación de Danza"
            height="80"  // Ajusta el tamaño según tus necesidades
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/about">Quienes Somos</Nav.Link>
            <Nav.Link as={Link} to="/packs">Packs</Nav.Link>
            <Nav.Link as={Link} to="/events">Eventos</Nav.Link>
            <Nav.Link as={Link} to="/help">Ayuda</Nav.Link>
            <Nav.Link as={Link} to="/logout">onLogout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
