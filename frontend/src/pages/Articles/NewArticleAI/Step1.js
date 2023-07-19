import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { TextField, Autocomplete, Grid, Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'

import StepperCompo from './StepperCompo';
import Prompt1 from './PromptChatGPT/Prompt1'

import { getRole1, getRole2, getSujet, getMots } from '../../../redux/slices/step1.slice'
import { setRole1, setRole2, setSujet, setMots } from '../../../redux/slices/step1.slice'
import { useSelector, useDispatch } from 'react-redux'

const Step1 = ({ etapeActive }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const ROLE1 = useSelector(getRole1)
    const ROLE2 = useSelector(getRole2)
    const SUJET = useSelector(getSujet)
    const MOTS = useSelector(getMots)


    const [visibleNextStep, setVisibleNextStep] = useState(true)
    const [motsError, setMotsError] = useState(false)
    const [errorState, setErrorState] = useState({
        role1: false,
        role2: false,
        sujet: false,
        mots: false
    })

    const listRoles = ['expert en référencement naturel', 'rédaction web']

    const toStep2 = () => {
        navigate('/step2')
    }
    return (
        <>
            <StepperCompo etapeActive={etapeActive} />
            {/*<p>1. Le titre</p>
            <p>2. La trame</p>
            <p>3. REDACTION CONTENU</p>*/}

            <Grid container spacing={2} sx={{ paddingTop: 3, margin: 'auto' }}>
                <Grid item xs={12} md={6} >
                    <Grid container direction="column">
                        <Autocomplete
                            sx={{ backgroundColor: 'white' }}
                            disablePortal
                            value={ROLE1}
                            onChange={(event, newValue) => {
                                dispatch(setRole1(newValue))
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
                            sx={{ backgroundColor: 'white' }}
                            disablePortal
                            value={ROLE2}
                            onChange={(event, newValue) => {
                                dispatch(setRole2(newValue))
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
                            sx={{ backgroundColor: 'white' }}
                            id="outlined-1"
                            value={SUJET}
                            onChange={(event) => {
                                dispatch(setSujet(event.target.value))
                                console.log('sujet', event.target.value)
                            }}
                            label='Sujet'
                            error={errorState.sujet}
                            helperText="Sujet de votre article, idealement sous forme de question."
                        /><br />
                        <TextField
                            sx={{ backgroundColor: 'white' }}
                            id="outlined-2"
                            value={MOTS}
                            onChange={(event) => {
                                const parsedValue = parseInt(event.target.value, 10)

                                if (isNaN(parsedValue)) {
                                    setMotsError(true)
                                    dispatch(setMots(''))
                                } else {
                                    setMotsError(false)
                                    dispatch(setMots(parsedValue))
                                }
                            }}
                            label='Nombre de mots'
                            error={errorState.mots || motsError}
                            helperText={motsError ? "Veuillez saisir un nombre" : "Indiquez le nombre de mots pour votre article"}
                        /><br />
                    </Grid>
                </Grid>

                <Grid item xs={12} md={6}>

                    <Prompt1
                        setVisibleNextStep={setVisibleNextStep}
                        setErrorState={setErrorState} />

                    <Box sx={{ height: '90px', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<SendIcon />}
                            disabled={visibleNextStep}
                            onClick={toStep2}>
                            Etape 2
                        </Button>
                    </Box>
                </Grid>

            </Grid >
        </>
    )
}

export default Step1