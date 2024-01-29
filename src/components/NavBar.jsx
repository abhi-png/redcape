import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar">
            <Container>
                <Navbar.Brand href="/">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link href="#">Pages</Nav.Link>
                        <NavDropdown title="Feature" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Feature 01</NavDropdown.Item>
                            <NavDropdown.Item href="#">Feature 02</NavDropdown.Item>
                            <NavDropdown.Item href="#">Feature 03</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">Services</Nav.Link>
                        <Nav.Link href="#">Blog</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar