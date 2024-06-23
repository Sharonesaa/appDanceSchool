import { Navbar, Nav, Container } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="/kadenza.png"
            alt="La Estación de Danza"
            height="80"  // Ajusta el tamaño según tus necesidades
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Quienes Somos</Nav.Link>
            <Nav.Link href="#">Packs</Nav.Link>
            <Nav.Link href="#">Ayuda</Nav.Link>
            <Nav.Link href="#">Mi cuenta</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;