import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'

import styles from './Statistics.module.css'

const Statistics = () => {
    return (
        <Navbar className='statistics p-1' variant="light" style={{ color: 'black', boxShadow: '0px 2px 5px rgba(0,0,0,0.4)', height: '30px' }} >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="mx-2" href="#home"><FontAwesomeIcon icon={faEye} /></Nav.Link>
                    <Nav.Link className="mx-2" href="#home">Temps réel</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Version Detaillée</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Demande d'infos</Nav.Link>
                    <NavDropdown title="Ecommerce" id="basic-nav-dropdown">
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
                    <Nav.Link className="mx-2" href="#link">Alertes Produits</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Géographiques Commandes</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Géographiques Clients</Nav.Link>
                    <NavDropdown title="Articles" id="basic-nav-dropdown">
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
                    <NavDropdown title="Produits" id="basic-nav-dropdown">
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
        </Navbar>
    )
}

export default Statistics