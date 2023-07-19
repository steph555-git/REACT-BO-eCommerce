import React, { useState } from 'react'
import dayjs from 'dayjs';
import { Box, Typography, TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

import styles from './Articles.module.css'

const Informations = () => {

    const dateDuJour = new Date().toLocaleDateString('en-EN')

    return (
        <>
            <Box sx={{ backgroundColor: '#666967', color: 'white' }}>
                <Typography sx={{ p: 1 }}>General parameter</Typography>
            </Box >

            <Box sx={{ backgroundColor: '#f3f3f3', color: '#666967', p: 3 }}>

                <Box sx={{ display: 'flex', alignItems: 'center',  justifyContent: 'space-between' }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DateTimePicker']} sx={{ width: '20%' }} >
                            <DemoItem label="Date" >
                                <DatePicker defaultValue={dayjs(dateDuJour)} className={styles.basic} />
                            </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>
                    <Box>
                        <FormLabel id="radio-visible" sx={{ mx: 4 }}>Visible</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="No"
                        >
                            <FormControlLabel value="Yes" control={<Radio color="success" />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio color="error" />} label="No" />
                        </RadioGroup>
                    </Box>
                </Box><br></br>
                
                <TextField sx={{ mb: 2 }} className={styles.basic} size="small" label="Title" variant="outlined" />
                <TextField sx={{ mb: 4 }} className={styles.basic} size="small" label="Author" variant="outlined" />
                <TextField sx={{ mb: 4 }} className={styles.basic} size="small" label="Chapeau" variant="outlined" />
                <TextField className={styles.basic} size="small" label="Description" variant="outlined" />

            </Box >

        </>
    )
}

export default Informations