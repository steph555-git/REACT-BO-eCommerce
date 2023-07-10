import React, { useState } from 'react'
import { Box, Grid, Card, Button } from '@mui/material';
import { Typography, CardActions, CardContent } from '@mui/material';

import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import { InputLabel, Select, FormControl, MenuItem } from '@mui/material';

import { useParams } from 'react-router-dom'

const EditLead = () => {

    const [statut, setStatut] = useState('');
    const handleChange = (event) => {
        setStatut(event.target.value);
    }

    return (
        <>
            <h1>Request #12345</h1>

            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <List>
                                <Typography sx={{ fontSize: 30 }} variant="h2" component="div">
                                    Coordonnées :
                                </Typography>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Nom Prénom :" secondary="Stephane Lugassy" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton >
                                        <ListItemText primary="Adresse : " secondary="" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Téléphone :" secondary="0169480622" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Email :" secondary="azerrty@azerty.com" />
                                    </ListItemButton>
                                </ListItem><br></br>
                                <Typography sx={{ mb: 2, fontSize: '12px' }} color="text.secondary">
                                    Créé le dimanche 09 juillet 2023 à 18:30 par Admin<br></br>
                                    Modifié le dimanche 09 juillet 2023 à 18:30 par Admin
                                </Typography>
                                <Typography sx={{ fontSize: 30 }} variant="h2" component="div">
                                    Satut actuel :
                                </Typography>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Nouveau" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Modifier</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 30 }} variant="h2" component="div">
                                Message complet :
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
            <br></br>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Card sx={{ minWidth: 275, mb: 8 }}>
                        <CardContent>
                            <List>
                                <Typography sx={{ fontSize: 30 }} variant="h2" component="div">
                                    Changer le statut :
                                </Typography>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: '100%' }}>
                                    <InputLabel id="Statut-Etat">Status</InputLabel>
                                    <Select
                                        labelId="Statut-Etat"
                                        id="demo-simple-select-standard"
                                        value={statut}
                                        onChange={handleChange}
                                        label="Statut"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Nouveau</MenuItem>
                                        <MenuItem value={20}>En attente</MenuItem>
                                        <MenuItem value={30}>Traité</MenuItem>
                                    </Select>
                                </FormControl>
                            </List>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Valider</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 30 }} variant="h2" component="div">
                                Message complet :
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </>

    )
}

export default EditLead