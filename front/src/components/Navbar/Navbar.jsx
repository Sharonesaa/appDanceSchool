import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar className={styles.navbar} bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ fontSize: '24px' }}>
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
            <Nav.Link as={Link} to="/quienessomos">Quienes Somos</Nav.Link>
            <Nav.Link as={Link} to="/packs">Packs</Nav.Link>
            <Nav.Link as={Link} to="/eventos">Eventos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
