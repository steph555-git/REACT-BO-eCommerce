import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Grid, Card, Button } from '@mui/material';
import { Typography, CardActions, CardContent } from '@mui/material';
import { Box, TextField, Autocomplete } from '@mui/material';

import { getFetchBackendDataBase, putFetchBackendDataBase } from '../../utils/fetchBackendDataBase'
import { changeDateformat } from '../../utils/changeDateFormat'

const EditLead = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dataTitle, setDataTitle] = useState([['Nom', 'LASTNAME'], ['Prénom', 'FIRSTNAME'], ['Téléphone', 'TELEPHONE'], ['Email', 'EMAIL']])
    const [dataFetched, setDataFetched] = useState({})
    const [selectedStatus, setSelectedStatus] = useState('')

    const params = useParams()
    const status = ['Nouveau', 'En cours', 'Traité']

    useEffect(() => {
        const fetchLeadsData = async () => {
            try {
                setIsLoading(true)
                const jsonData = await getFetchBackendDataBase('getlead', params.id)
                const newJsonData = changeDateformat(jsonData)
                console.log(newJsonData[0])
                setDataFetched(newJsonData[0])
                setSelectedStatus(newJsonData[0].STATUS)
                setIsLoading(false)

            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
                setIsLoading(false)
            }
        };
        fetchLeadsData();
    }, [params.id])

    const updateStatus = async () => {
        try {
            const updatedData = { ...dataFetched, STATUS: selectedStatus };
            await putFetchBackendDataBase('updatelead', params.id, updatedData);
            console.log('Statut mis à jour avec succès !');
        } catch (error) {
            console.error('Erreur lors de la mise à jour du statut :', error);
        }
    }

    return (
        <>
            <h1>Lead N°{dataFetched.id}</h1>

            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 30 }} variant="h2" component="div">
                                Coordonnées :
                            </Typography>
                            <Box component="form" sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            >
                                {dataTitle.map((key, i) => (
                                    <TextField
                                        key={i}
                                        size='small'
                                        label={key[0]}
                                        value={dataFetched[key[1]] || ''}
                                        variant="standard"
                                    />
                                ))}

                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    value={selectedStatus}
                                    onChange={(event, newValue) => setSelectedStatus(newValue)}
                                    options={status}
                                    renderInput={(params) => <TextField {...params} label="Status" variant="standard" />}
                                />
                                <p>Créé le {dataFetched.DATECREA} par Admin<br />
                                    Modifié le {dataFetched.DATEMODIF} par Admin</p>
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={updateStatus}>Enregistrer</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Card sx={{ minWidth: 275, height: 555 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 30 }} variant="h2" component="div">
                                Message complet :
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Objet : {dataFetched.OBJET}
                            </Typography>
                            <Typography variant="body2">
                                {dataFetched.REQUEST}
                                <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
            <br></br>

        </>

    )
}

export default EditLead