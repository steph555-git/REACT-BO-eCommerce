import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'

import './Articles.css'

const Articles = () => {
    return (
        <Navbar className='articles p-1' variant="light" expand="lg" style={{ color: 'black', position: 'absolute', top: '96px', left: 0, right: 0, boxShadow: '0px 2px 5px rgba(0,0,0,0.4)', height:'30px'  }} >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link className="mx-2" href="#home"><FontAwesomeIcon icon={faEye} /></Nav.Link>
                    <Nav.Link className="mx-2" href="#home">Lister les articles</Nav.Link>
                    <Nav.Link className="mx-2" href="#link">Ajouter un article</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Articles