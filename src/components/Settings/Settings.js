import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'

import './Settings.css'

const Settings = () => {
    return (
        <Navbar className='settings p-1' variant="light" expand="lg" style={{ color: 'black', position: 'absolute', top: '96px', left: 0, right: 0, boxShadow: '0px 2px 5px rgba(0,0,0,0.4)', height:'30px'  }} >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link className="mx-2" href="#home"><FontAwesomeIcon icon={faEye} /></Nav.Link>
                    <Nav.Link className="mx-2" href="#home">Paramètres</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Utilisateurs</Nav.Link>
                    <NavDropdown title="WebSite" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Paramètres Website</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Paramètres référencement</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Paramètres documents</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Paramètres mail anniv.</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Parametres Drop shipping</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="mx-2" href="#link">Libellés</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Modèles d'email</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Pays</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Zones de liv.</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Livraisons</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Paiements</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Etat commandes</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Etat retours</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Outils</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Settings