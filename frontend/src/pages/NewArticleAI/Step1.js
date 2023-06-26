import React, { useState, useEffect } from 'react'
import { TextField, Autocomplete, Grid, Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'

const Step1 = () => {
    const [role1, setRole1] = useState('__________')
    const [role2, setRole2] = useState('__________')
    const [sujet, setSujet] = useState('__________')
    const [firstPrompt, setFirstPrompt] = useState('')
    const [chatGPTresponse] = useState('')

    const listRoles = ['expert en référencement naturel', 'rédaction web']

    useEffect(() => {
        setFirstPrompt(`Tu es un ${role1} et en ${role2}. Peux-tu me rédiger un article de blog présentant ${sujet}. Pour ça, tu vas t'appuyer sur tes connaissances pour identifier le bon mot clé, travailler la structure de ton article et optimiser le texte pour qu'il soit bien référencé sur Google et que la lecture pour l'internaute soit parfaite. Peux-tu m'écrire "oui" si ton rôle est clair, Si non, peux-tu me poser des questions pour obtenir les informations manquantes ?`)
    }, [role1, role2, sujet])

    return (
        <Grid container spacing={2} sx={{ paddingTop: 3, margin: 'auto' }}>
            <Grid item xs={12} md={6} >
                <Grid container direction="column">
                    <Autocomplete
                        disablePortal
                        value={role1}
                        onChange={(event, newValue) => {
                            setRole1(newValue)
                            console.log('role1', newValue)
                        }}
                        id="combo-box-1"
                        options={listRoles}
                        renderInput={(params) => <TextField {...params} label="Rôle 1" />}
                    /><br /><br />
                    <Autocomplete
                        disablePortal
                        value={role2}
                        onChange={(event, newValue) => {
                            setRole2(newValue)
                            console.log('role2', newValue)
                        }}
                        id="combo-box-2"
                        options={listRoles}
                        renderInput={(params) => <TextField {...params} label="Rôle 2" />}
                    /><br /><br />
                    <TextField
                        id="outlined-1"
                        value={sujet}
                        onChange={(event) => {
                            setSujet(event.target.value)
                            console.log('sujet', event.target.value)
                        }}
                        label='Sujet'
                        helperText="Sujet de votre article sous forme de question"
                    /><br />
                </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    sx={{ width: '100%' }}
                    disabled
                    id="outlined-multiline-static1"
                    label="Premier prompt"
                    multiline
                    rows={6}
                    value={firstPrompt}
                /><br /><br /><br />
                <TextField
                    sx={{ width: '100%' }}
                    disabled
                    id="outlined-multiline-static2"
                    label="Réponse de ChatGPT"
                    multiline
                    rows={4}
                    value={chatGPTresponse}
                />
                <Box sx={{ height: '90px', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <Button variant="outlined" size="large" endIcon={<SendIcon />}>
                        Etape 2
                    </Button>
                </Box>
            </Grid>

        </Grid>
    )
}

export default Step1