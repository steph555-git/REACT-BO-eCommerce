import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'

import styles from './Site.module.css'

const Site = () => {
    return (
        <Navbar className='site p-1' variant="light" style={{ color: 'black', boxShadow: '0px 2px 5px rgba(0,0,0,0.4)', height: '30px' }} >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="mx-2" href="#home"><FontAwesomeIcon icon={faEye} /></Nav.Link>
                    <Nav.Link className="mx-2" href="#home">Editer le site</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Nouvelle page</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Arborescence</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Arborescence V2</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Menu principal</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Journal des operations</Nav.Link>
                    <NavDropdown title="Outils" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Recharger l'arborscence</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Mettre ç jour le SiteMap
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Gerer les métas</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Site