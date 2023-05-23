import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'

import './Orders.css'

const Orders = () => {
    return (
        <Navbar className='orders p-1' variant="light" style={{ color: 'black', boxShadow: '0px 2px 5px rgba(0,0,0,0.4)', height: '30px' }} >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="mx-2" href="#home"><FontAwesomeIcon icon={faEye} /></Nav.Link>
                    <NavDropdown title="Commandes" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Commandes</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Commandes en attente</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Commandes archivées</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="mx-2" href="#home">Factures</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Avoirs</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Retours</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Devis</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Paniers</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Bon de reduction</Nav.Link>
                    <NavDropdown title="Export" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Export commandes</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Orders