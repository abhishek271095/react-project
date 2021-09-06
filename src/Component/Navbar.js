import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

const Navigation = ()=>{

    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="text-info">
                <Container>
               
                     <Navbar.Brand href="#home">Camel Scholar</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               
                     <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Services</Nav.Link>
                            <NavDropdown title="Business Info" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                         <Nav>
                            <Nav.Link href="#deets">Sign In</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Sign Up
                            </Nav.Link>
                         </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navigation;
