import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'


import './ListArticles.css'

const rows = [
    { id: 1, category: 'Hello', image: 'World' },
    { id: 2, category: 'DataGridPro', image: 'is Awesome' },
    { id: 3, category: 'MUI', image: 'is Amazing' },
    { id: 4, category: 'MUI', image: 'is Amazing' },
];

const columns = [
    { field: 'id', headerName: 'ID', headerClassName: 'super-app-theme--header', flex: 100 },
    { field: 'category', headerName: 'CATEGORY', headerClassName: 'super-app-theme--header', flex: 150 },
    { field: 'image', headerName: 'IMAGE', headerClassName: 'super-app-theme--header', flex: 150 },
    { field: 'title', headerName: 'TITLE', headerClassName: 'super-app-theme--header', flex: 500 },
    { field: 'create', headerName: 'CREATE', headerClassName: 'super-app-theme--header', flex: 150 },
    { field: 'visibility', headerName: 'VISIBILITY', headerClassName: 'super-app-theme--header', flex: 150 },
    { field: 'update', headerName: 'UPDATE', headerClassName: 'super-app-theme--header', flex: 150 },
    { field: 'see', headerName: 'SEE', headerClassName: 'super-app-theme--header', flex: 50 },
];

const ListArticles = () => {

    const [rowSelectionModel, setRowSelectionModel] = useState([]);
    const navigate = useNavigate()

    const handleSelectionModel = (newRowSelectionModel) => {
        setRowSelectionModel(newRowSelectionModel)
    }

    const handleDoubleClick = (params) => {
        const selectedRow = rows.find(row => row.id === params.id);
        if (selectedRow) {
            navigate(`/editarticle/${selectedRow.id}`)
        }
    }

    return (
        <Box
            sx={{
                height: 500,
                '& .super-app-theme--header': {
                    backgroundColor: 'rgb(79, 79, 79)',
                    color: 'white',
                },
            }}>
            <DataGrid
                rows={rows}
                columns={columns}
                slots={{ toolbar: GridToolbar }}
                checkboxSelection
                onRowSelectionModelChange={handleSelectionModel}
                onRowDoubleClick={handleDoubleClick}
            //rowSelectionModel={rowSelectionModel}
            />
        </Box>
    )
}

export default ListArticles