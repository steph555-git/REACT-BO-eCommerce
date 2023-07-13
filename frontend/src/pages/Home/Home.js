import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Chip } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { changeDateformat } from '../../utils/changeDateFormat'
import { getFetchBackendDataBase } from '../../utils/fetchBackendDataBase'

import styles from './Home.module.css'

const columns = [
    { field: 'id', headerName: '#REQUEST', headerClassName: styles.superAppThemeHeader, flex: 100 },
    { field: 'DATECREA', headerName: 'DATE', headerClassName: styles.superAppThemeHeader, flex: 150 },
    { field: 'LASTNAME', headerName: 'LAST NAME', headerClassName: styles.superAppThemeHeader, flex: 150 },
    { field: 'FIRSTNAME', headerName: 'FIRST NAME', headerClassName: styles.superAppThemeHeader, flex: 150 },
    { field: 'EMAIL', headerName: 'EMAIL', headerClassName: styles.superAppThemeHeader, flex: 200 },
    { field: 'TELEPHONE', headerName: 'TELEPHONE', headerClassName: styles.superAppThemeHeader, flex: 150 },
    {
        field: 'STATUS', headerName: 'STATUS', headerClassName: styles.superAppThemeHeader, flex: 150, renderCell: (params) => {
            if (params.value === 'Nouveau') {
                return <Chip label="Nouveau" size="small" color="primary" variant="outlined" />;
            } else if (params.value === 'En cours') {
                return <Chip label="En cours" size="small" color="warning" variant="outlined" />;
            } else if (params.value === 'Traité') {
                return <Chip label="Traité" size="small" color="success" variant="outlined" />;
            }
            return '';
        },
    },
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
                const jsonData = await getFetchBackendDataBase('getallleads')
                const newJsonData = changeDateformat(jsonData)

                setRows(newJsonData)
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
    const nbLeads = rows?.length || '0'
    return (
        <>
            <section className={styles.haut}><h1>Liste des leads</h1> <p>{nbLeads} leads</p></section>
            {isLoading ? (
                <p>Chargement en cours...</p>
            ) : rows && rows.length > 0 ? (
                <Box>
                    {/**Basculer en 'List item'  version en mobile */}
                    <DataGrid
                        sx={{ backgroundColor: 'white' }}
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
                <p>Aucune donnée disponible. Contactez votre administrateur</p>
            )}
        </>
    )
}

export default Home


