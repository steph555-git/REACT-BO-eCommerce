import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import styles from './NewArticleAI.module.css'

const steps = [
    'Le rôle',
    'Le contexte',
    'La tache',
    'Le resultat'
];

const NewArticleAI = () => {


    return (
        <Box sx={{ width: '100%', marginTop: '20px' }}>
            <Stepper activeStep={0} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    )
}

export default NewArticleAI