import React, { useEffect } from 'react'
import { TextField, Button, } from '@mui/material';

import { getRole1, getRole2, getSujet, getMots } from '../../../../redux/slices/step1.slice'
import { setFirstPrompt, getFirstPrompt } from '../../../../redux/slices/stepsGenerateArticleAI.slice'
import { useSelector, useDispatch } from 'react-redux'


const Prompt1 = ({ setVisibleNextStep, setErrorState }) => {

    const ROLE1 = useSelector(getRole1)
    const ROLE2 = useSelector(getRole2)
    const SUJET = useSelector(getSujet)
    const MOTS = useSelector(getMots)
    const FIRST_PROMPT = useSelector(getFirstPrompt).reqPrompt
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setFirstPrompt({ reqPrompt: `Tu es un ${ROLE1} et en ${ROLE2}. Peux-tu me rédiger un article de blog d'environ ${MOTS} mots sur le sujet ${SUJET}. Pour ça, tu vas t'appuyer sur tes connaissances pour identifier le bon mot clé, travailler la structure de ton article et optimiser le texte pour qu'il soit bien référencé sur Google et que la lecture pour l'internaute soit parfaite. Peux-tu m'écrire "oui" si ton rôle est clair, Si non, peux-tu me poser des questions pour obtenir les informations manquantes ?` }))
    }, [ROLE1, ROLE2, SUJET, MOTS])

    //const textPrompt1_leTitre = `Je suis un site e-commerce qui vend des horloges murales. `

    const Submit2GPT = () => {
        const errors = {
            role1: ROLE1 === '__________',
            role2: ROLE2 === '__________',
            sujet: SUJET === '__________',
            mots: isNaN(MOTS) || MOTS === '____'
        }
        console.log(errors)

        setErrorState(errors)
        if (Object.values(errors).some((error) => error || error === '')) {
            setVisibleNextStep(true)
        } else {
            // All fields contents are OK
            // Store prompt request and response to redux
            // Create and send the prompt to chatGPT
            // Ready to go to step 2
            setVisibleNextStep(false)
        }
    }

    return (
        <>
            <TextField
                id="outlined-multiline-static1"
                value={FIRST_PROMPT}
                onChange={event => setFirstPrompt(event.target.value)}
                label="Premier prompt"
                multiline
                rows={6}
                sx={{ width: '100%', backgroundColor: 'white' }}
            /><br /><br />
            <Button variant="outlined" size="large" sx={{ width: '100%' }} onClick={Submit2GPT}>
                Soumettre à ChatGPT
            </Button>
            <br /><br />
            <TextField
                sx={{ width: '100%', backgroundColor: 'white' }}
                disabled
                id="outlined-multiline-static2"
                label="Réponse de ChatGPT"
                multiline
                rows={4}
                value="Reponse de chatGPT"
            />
        </>
    )
}

export default Prompt1