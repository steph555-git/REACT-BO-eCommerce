import React from 'react'
import Table from 'react-bootstrap/Table'

import './Products.css'

const ListProducts = () => {
    return (
        <>
            <div className='mx-3'>
                <h2 style={{ fontSize: '40px' }}>Products</h2>
                <Table striped bordered hover>
                    <thead style={{ backgroundColor: '#4F4F4F', color: 'white', fontSize: '10px' }}>
                        <tr>
                            <th>ID</th>
                            <th>GAMMES</th>
                            <th>PHOTO</th>
                            <th>REFERENCE</th>
                            <th>CODE EAN</th>
                            <th>MARQUE</th>
                            <th>REF FOURNISSEUR</th>
                            <th>TITRE</th>
                            <th>VISIBLE</th>
                            <th>PRIX A. HT</th>
                            <th>MARGE</th>
                            <th>PRIX V. TTC</th>
                            <th>MARGE</th>
                            <th>STOCKS</th>
                            <th>NB VENTE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td >Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default ListProducts