import React from 'react'
import { Button, Form } from 'react-bootstrap/Button';


import './Products.css'

const SubNavProducts = () => {
    return (
        <>
            <div className='shadow-sm mb-5 rounded' style={{ backgroundColor: '#F0F0F0', paddingTop: '15px' }}>
                <div className='d-flex justify-content-center pb-2' >
                    <label>Title/Ref. : </label>
                    <input type="text" />
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
            </div>

        </>
    )
}

export default SubNavProducts