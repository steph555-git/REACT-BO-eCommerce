import React, { useState } from 'react'
import { Box, Typography, TextField } from '@mui/material'

import styles from './Articles.module.css'

const Seo = () => {
    const [description, setDescription] = useState('')

    const handleChangeTitleInURL = (event) => {
        //setDetailsArticle(prevState => ({ ...prevState, title: event.target.value }));
    }
    const handleChangeMetaTitle = (event) => {
        //setDetailsArticle(prevState => ({ ...prevState, title: event.target.value }));
    }
    const handleChangeMetaDescription = (event) => {
        //setDetailsArticle(prevState => ({ ...prevState, title: event.target.value }));
        const value = event.target.value;
        setDescription(value)
    }
    const characterCount = description.length

    return (
        <Box >
            <Box sx={{ backgroundColor: '#666967', color: 'white' }}>
                <Typography sx={{ p: '5px' }}>
                    Search Engine Optimization
                </Typography>
            </Box >

            <Box sx={{ backgroundColor: '#f3f3f3', color: '#666967', px: 4, py: 2 }}>
                <Box>Current URL :</Box>
                <TextField sx={{ my: 2 }} className={styles.basic} size="small" label="Title in URL" variant="outlined" onChange={handleChangeTitleInURL} /><br /><br />
                META Tag :
                <TextField
                    sx={{ my: 2 }}
                    className={styles.basic}
                    size="small"
                    label="Meta Title"
                    variant="outlined"
                    onChange={handleChangeMetaTitle} />

                <TextField
                    sx={{ my: 2 }}
                    className={styles.basic}
                    size="small"
                    label="Meta Description"
                    variant="outlined"
                    multiline
                    rows={4}
                    onChange={handleChangeMetaDescription} />
                <Box sx={{ fontSize: 14 }}>
                    Do not to exceed 300 characters<br />
                    Current : <Box component="span" sx={{ color: characterCount >= 300 ? 'red' : '#666967' }}>{characterCount} characters</Box>
                </Box>
            </Box >
        </Box>
    )
}

export default Seo