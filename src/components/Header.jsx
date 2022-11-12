import React from 'react';
import '../styles/Header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {


    return (
      <Navbar collapseOnSelect  bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">STC-Master</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <NavDropdown title="Ejercicio 1" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Divisores</NavDropdown.Item>
              <NavDropdown.Item href="#">Palindromo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">binario</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Primos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Ordenado</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ejercicio 2" id="basic-nav-dropdown">
              <NavDropdown.Item href="/countries">Consulta Lista de Paises</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/listadetareas">Lista de Chequeo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    );
}

export default Header;