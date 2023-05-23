import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import ListProducts from './ListProducts'

import './Products.css'

const Products = () => {

    const [visible, setVisible] = useState(true)

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    return (
        <>
            <Navbar className='products p-1' variant="light" style={{ color: 'black', boxShadow: '0px 2px 5px rgba(0,0,0,0.4)', height: '30px' }} >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="mx-2" href="#visible" onClick={toggleVisibility}><FontAwesomeIcon icon={visible ? faEye : faEyeSlash} /></Nav.Link>
                        <Nav.Link className="mx-2" href="#home">Lister les produits</Nav.Link>
                        <Nav.Link className="mx-2" href="#link">Ajouter un produit</Nav.Link>
                        <Nav.Link className="mx-2" href="#link">Marques/Const.</Nav.Link>
                        <Nav.Link className="mx-2" href="#link">Fournisseurs</Nav.Link>
                        <Nav.Link className="mx-2" href="#link">Propriétés</Nav.Link>
                        <Nav.Link className="mx-2" href="#link">Fournisseurs</Nav.Link>
                        <Nav.Link className="mx-2" href="#link">Import stock ODEIS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {visible &&
                <div className='shadow-sm mb-5 rounded' style={{ backgroundColor: '#F0F0F0', paddingTop: '15px' }}>
                    <div className='d-flex justify-content-center pb-2' >
                        <label>Title/Ref. : </label>
                        <input type="text"/>
                        <label>N° : </label>
                        <input type="text" />
                        <label>Marque : </label>
                        <input type="text" />
                        <label>Fournisseur : </label>
                        <input type="text" />
                        <label>Gamme : </label>
                        <input className='me-4' type="text" /><br />
                        <button className='btn btn-outline-success btn-sm px-3'>SEARCH</button>
                    </div>
                </div>}

            <ListProducts />
        </>
    )
}

export default Products