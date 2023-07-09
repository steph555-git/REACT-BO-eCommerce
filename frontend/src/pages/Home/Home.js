import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'


import styles from './Home.module.css'

const rows = [
    { id: 1, category: 'Hello', image: 'World' },
    { id: 2, category: 'DataGridPro', image: 'is Awesome' },
    { id: 3, category: 'MUI', image: 'is Amazing' },
    { id: 4, category: 'MUI', image: 'is Amazing' },
];

const columns = [
    { field: 'id', headerName: 'ID', headerClassName: 'super-app-theme--header', flex: 100 },
    { field: 'date', headerName: 'DATE', headerClassName: 'super-app-theme--header', flex: 150 },
    { field: 'lastname', headerName: 'LAST NAME', headerClassName: 'super-app-theme--header', flex: 150 },
    { field: 'firstname', headerName: 'FIRST NAME', headerClassName: 'super-app-theme--header', flex: 150 },
    { field: 'email', headerName: 'EMAIL', headerClassName: 'super-app-theme--header', flex: 200 },
    { field: 'telephone', headerName: 'TELEPHONE', headerClassName: 'super-app-theme--header', flex: 150 },
    { field: 'view', headerName: 'VIEW', headerClassName: 'super-app-theme--header', flex: 50 },
]

const Home = () => {
    const [rowSelectionModel, setRowSelectionModel] = useState([]);
    const navigate = useNavigate()

    const handleSelectionModel = (newRowSelectionModel) => {
        setRowSelectionModel(newRowSelectionModel)
    }

    const handleDoubleClick = (params) => {
        const selectedRow = rows.find(row => row.id === params.id);
        if (selectedRow) {
            navigate(`/leadedit/${selectedRow.id}`)
        }
    }
    return (
        <>
            <h1>Liste des leads</h1>
            <Box
                sx={{
                    height: 500,
                    '& .super-app-theme--header': {
                        backgroundColor: 'rgb(79, 79, 79)',
                        color: 'white',
                    },
                }}>{/**list item en mobile */}
                <DataGrid
                    rows={rows}
                    columns={columns}
                    slots={{ toolbar: GridToolbar }}
                    checkboxSelection
                    onRowSelectionModelChange={handleSelectionModel}
                    onRowDoubleClick={handleDoubleClick}
                />
            </Box>
        </>
    )
}

export default Home