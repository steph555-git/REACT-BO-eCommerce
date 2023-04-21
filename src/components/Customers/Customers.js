import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'

import './Customers.css'

const Customers = () => {
    return (
        <Navbar className='customers p-1' variant="light" expand="lg" style={{ color: 'black', position: 'absolute', top: '96px', left: 0, right: 0, boxShadow: '0px 2px 5px rgba(0,0,0,0.4)', height: '30px' }} >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="mx-2" href="#home"><FontAwesomeIcon icon={faEye} /></Nav.Link>
                    <NavDropdown title="Lister les clients" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Lister tous les clients</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Clients bloqués
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="mx-2" href="#home">Nouveau client</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Export</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Lettre d'information</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Campagnes</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Customers