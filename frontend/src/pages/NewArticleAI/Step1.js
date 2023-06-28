import React, { useState, useEffect } from 'react'
import { TextField, Autocomplete, Grid, Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'
import { } from '../../utils/promptChatGPT'


const Step1 = () => {
    const [role1, setRole1] = useState('__________')
    const [role2, setRole2] = useState('__________')
    const [sujet, setSujet] = useState('__________')
    const [mots, setMots] = useState('____')
    const [motsError, setMotsError] = useState(false)
    const [firstPrompt, setFirstPrompt] = useState('')
    const [chatGPTresponse] = useState('')
    const [visibleNextStep, SetVisibleNextStep] = useState(true)
    const [errorState, SetErrorState] = useState({
        role1: false,
        role2: false,
        sujet: false,
        mots: false
    })

    const listRoles = ['expert en référencement naturel', 'rédaction web']

    useEffect(() => {
        setFirstPrompt(`Tu es un ${role1} et en ${role2}. Peux-tu me rédiger un article de blog d'environ ${mots} mots sur le sujet ${sujet}. Pour ça, tu vas t'appuyer sur tes connaissances pour identifier le bon mot clé, travailler la structure de ton article et optimiser le texte pour qu'il soit bien référencé sur Google et que la lecture pour l'internaute soit parfaite. Peux-tu m'écrire "oui" si ton rôle est clair, Si non, peux-tu me poser des questions pour obtenir les informations manquantes ?`)
    }, [role1, role2, sujet, mots])

    const SubmitGPT = () => {
        const errors = {
            role1: role1 === '__________',
            role2: role2 === '__________',
            sujet: sujet === '__________',
            mots: isNaN(mots) || mots === '____'
        }
        console.log(errors)

        SetErrorState(errors)
        if (Object.values(errors).some((error) => error || error === '')) {
            SetVisibleNextStep(true)
        } else {
            // All fields content are OK
            // Create and send the prompt to chatGPT
            // Go to step 2
            SetVisibleNextStep(false)
        }
    }

    return (
        <Grid container spacing={2} sx={{ paddingTop: 3, margin: 'auto' }}>
            <Grid item xs={12} md={6} >
                <Grid container direction="column">
                    <Autocomplete
                        disablePortal
                        value={role1}
                        onChange={(event, newValue) => {
                            setRole1(newValue)
                        }}
                        id="combo-box-1"
                        options={listRoles}
                        renderInput={(params) =>
                            <TextField {...params}
                                label="Rôle 1"
                                error={errorState.role1}
                                helperText="Saisir un premier rôle pour rédiger votre article" />}
                    /><br />
                    <Autocomplete
                        disablePortal
                        value={role2}
                        onChange={(event, newValue) => {
                            setRole2(newValue)
                        }}
                        id="combo-box-2"
                        options={listRoles}
                        renderInput={(params) =>
                            <TextField {...params}
                                label="Rôle 2"
                                error={errorState.role2}
                                helperText="Saisir un deuxième rôle pour rédiger votre article" />}
                    /><br /><br />
                    <TextField
                        id="outlined-1"
                        value={sujet}
                        onChange={(event) => {
                            setSujet(event.target.value)
                            console.log('sujet', event.target.value)
                        }}
                        label='Sujet'
                        error={errorState.sujet}
                        helperText="Sujet de votre article, idealement sous forme de question."
                    /><br />
                    <TextField
                        id="outlined-2"
                        value={mots}
                        onChange={(event) => {
                            const parsedValue = parseInt(event.target.value, 10)

                            if (isNaN(parsedValue)) {
                                setMotsError(true)
                                setMots('')
                            } else {
                                setMotsError(false)
                                setMots(parsedValue)
                            }
                        }}
                        label='Nombre de mots'
                        error={errorState.mots || motsError}
                        helperText={motsError ? "Veuillez saisir un nombre" : "Indiquez le nombre de mots pour votre article"}
                    /><br />
                </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    id="outlined-multiline-static1"
                    value={firstPrompt}
                    onChange={event => setFirstPrompt(event.target.value)}
                    label="Premier prompt"
                    multiline
                    rows={6}
                    sx={{ width: '100%' }}
                /><br /><br />
                <Button variant="outlined" size="large" sx={{ width: '100%' }} onClick={SubmitGPT}>
                    Soumettre à ChatGPT
                </Button>
                <br /><br />
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
                    <Button
                        variant="contained"
                        size="large"
                        endIcon={<SendIcon />}
                        disabled={visibleNextStep}>
                        Etape 2
                    </Button>
                </Box>
            </Grid>

        </Grid >
    )
}

export default Step1