import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from "../assets/logo-sin-letras.png"
import {link} from 'react-scroll'


export const Header = () => {


        
    return (
        <>
      <Navbar class="navbar navbar-expand-lg custom-navbar " style={{ backgroundColor: "rgb(78, 61, 100)"}} >
        <Navbar.Brand href="#" className='px-5'>
          <img src={logo} width="60px" alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="navbar-nav">
             <Nav.Link className='px-5'></Nav.Link>
             <Nav.Link className='px-5'></Nav.Link>
             <Nav.Link className='px-5'></Nav.Link>
             <Nav.Link className='px-5'></Nav.Link>
             <Nav.Link className='px-5'></Nav.Link>
             <Nav.Link className='px-5'></Nav.Link>


            <Nav.Link href="#inicio" className='px-3 text-light'>Inicio</Nav.Link>
            <Nav.Link href="#descripcionEmpresa" className='px-3 text-light'>Agendar Hora</Nav.Link>
            <Nav.Link href="#servicio-id" className='px-3 text-light'>Servicios</Nav.Link>
            <Nav.Link href="#testimonio-id" className='px-3 text-light'>Testimonios</Nav.Link>
            <Nav.Link href="#contacto-id" className='px-3 text-light'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Contenido de las secciones */}

    </>
    )
}
 /*<Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>*/