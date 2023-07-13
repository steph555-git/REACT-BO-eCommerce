import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Grid, Card, Button, Switch } from '@mui/material';
import { Typography, CardActions, CardContent } from '@mui/material';
import { Box, TextField, Autocomplete } from '@mui/material';

import { getFetchBackendDataBase, putFetchBackendDataBase } from '../../utils/fetchBackendDataBase'
import { changeDateformat } from '../../utils/changeDateFormat'

import styles from './EditLead.module.css'

const EditLead = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dataTitle, setDataTitle] = useState([['Nom', 'LASTNAME'], ['Prénom', 'FIRSTNAME'], ['Téléphone', 'TELEPHONE'], ['Email', 'EMAIL']])
    const [dataFetched, setDataFetched] = useState({ ARCHIVE: false, STATUS: '' })

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

                setIsLoading(false)

            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
                setIsLoading(false)
            }
        };
        fetchLeadsData();
    }, [params.id])

    const updateDataLead = async () => {
        try {
            const updatedData = { ...dataFetched };
            await putFetchBackendDataBase('updatelead', params.id, updatedData);
            console.log('Statut mis à jour avec succès !');
        } catch (error) {
            console.error('Erreur lors de la mise à jour du statut :', error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)

        if (name === "ARCHIVE") {
            setDataFetched((prevState) => ({
                ...prevState,
                [name]: !prevState.ARCHIVE,
            }));
        } else {
            setDataFetched((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
        console.log(dataFetched)
    }
    const handleChange2 = (name, value) => {
        console.log(name, value)
        setDataFetched((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    return (
        <>
            <h1>Lead N°{dataFetched.id}</h1>

            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <div className={styles.cardHeader} >
                                <Typography sx={{ fontSize: 30 }} variant="h2" component="div">
                                    Coordonnées :
                                </Typography>
                                <Switch
                                    name="ARCHIVE"
                                    color="error"
                                    checked={dataFetched.ARCHIVE}
                                    onChange={handleChange}
                                />
                            </div>
                            <Box component="form" sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            >
                                {dataTitle.map((key, i) => (
                                    <TextField
                                        key={i}
                                        size='small'
                                        name={key[1]}
                                        label={key[0]}
                                        value={dataFetched[key[1]] || ''}
                                        onChange={handleChange}
                                        variant="standard"
                                    />
                                ))}

                                <Autocomplete
                                    disablePortal
                                    name="STATUS"
                                    value={dataFetched.STATUS}
                                    onChange={(event, newValue) => handleChange2("STATUS", newValue)}
                                    options={status}
                                    renderInput={(params) => <TextField {...params} label="Status" variant="standard" />}
                                />
                                <p className={styles.dateCreaModif}>Créé le {dataFetched.DATECREA} par Admin<br />
                                    Modifié le {dataFetched.DATEMODIF} par Admin</p>
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={updateDataLead}>Enregistrer</Button>
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