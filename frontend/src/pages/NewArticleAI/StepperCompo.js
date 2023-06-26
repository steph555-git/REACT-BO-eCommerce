import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const StepperCompo = ({etapeActive}) => {

    const steps = [
        'Rôle',
        'Contexte',
        'Tache',
        'Resultat'
    ];

    return (
        <Box sx={{ width: '100%', marginTop: '20px' }}>
            <Stepper activeStep={etapeActive} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    )
}

export default StepperCompo