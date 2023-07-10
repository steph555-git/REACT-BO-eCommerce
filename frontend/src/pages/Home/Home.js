import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { changeDateformat } from '../../utils/changeDateFormat'
import { fetchBackendDataBase } from '../../utils/fetchBackendDataBase'

import styles from './Home.module.css'

const columns = [
    { field: 'id', headerName: '#REQUEST', headerClassName: styles.superAppThemeHeader, flex: 100 },
    { field: 'DATE', headerName: 'DATE', headerClassName: styles.superAppThemeHeader, flex: 150 },
    { field: 'LASTNAME', headerName: 'LAST NAME', headerClassName: styles.superAppThemeHeader, flex: 150 },
    { field: 'FIRSTNAME', headerName: 'FIRST NAME', headerClassName: styles.superAppThemeHeader, flex: 150 },
    { field: 'EMAIL', headerName: 'EMAIL', headerClassName: styles.superAppThemeHeader, flex: 200 },
    { field: 'TELEPHONE', headerName: 'TELEPHONE', headerClassName: styles.superAppThemeHeader, flex: 150 },
]

const Home = () => {
    const [rowSelectionModel, setRowSelectionModel] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [rows, setRows] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchLeadsData = async () => {
            try {
                setIsLoading(true)
                const jsonData = await fetchBackendDataBase('getallleads')
                changeDateformat(jsonData)
                setRows(jsonData)

                setIsLoading(false)

            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
                setIsLoading(false)
            }
        };
        fetchLeadsData();
    }, [])

    const handleSelectionModel = (newRowSelectionModel) => {
        setRowSelectionModel(newRowSelectionModel)
    }

    const handleDoubleClick = (params) => {
        const selectedRow = rows.find(row => row.id === params.id);
        if (selectedRow) {
            navigate(`/home/lead/${selectedRow.id}`)
        }
    }
    return (
        <>
            <h1>Liste des leads</h1>
            {isLoading ? (
                <p>Chargement en cours...</p>
            ) : rows && rows.length > 0 ? (
                <Box>
                    {/**list item en mobile */}
                    <DataGrid
                        initialState={{
                            sorting: {
                                sortModel: [{ field: 'id', sort: 'desc' }],
                            },
                        }}
                        rowHeight={40}
                        rows={rows}
                        columns={columns}
                        slots={{
                            toolbar: GridToolbar
                        }}
                        checkboxSelection
                        onRowSelectionModelChange={handleSelectionModel}
                        onRowDoubleClick={handleDoubleClick}
                    />
                </Box>
            ) : (
                <p>Aucune donnée disponible.</p>
            )}
        </>
    )
}

export default Home


