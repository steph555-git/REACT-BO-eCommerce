import React from 'react'
import { Box, Typography, TextField } from '@mui/material'

import { setSeo, getSeo } from '../../redux/slices/article.slice'
import { useSelector, useDispatch } from 'react-redux'

import styles from './Articles.module.css'

const Seo = () => {
    const dispatch = useDispatch()
    const SEO = useSelector(getSeo)

    const characterCount = SEO.metaDescription.length

    return (
        <Box >
            <Box sx={{ backgroundColor: '#666967', color: 'white' }}>
                <Typography sx={{ p: '5px' }}>
                    Search Engine Optimization
                </Typography>
            </Box >

            <Box sx={{ backgroundColor: '#f3f3f3', color: '#666967', px: 4, py: 2 }}>
                <Box>Current URL : </Box><Box component='span'></Box>
                <TextField
                    sx={{ my: 2 }}
                    className={styles.basic}
                    size="small"
                    label="Title in URL"
                    variant="outlined"
                    onChange={(event) => { dispatch(setSeo({ ...SEO, titleInURL: event.target.value })) }}
                /><br /><br />
                META Tag :
                <TextField
                    sx={{ my: 2 }}
                    className={styles.basic}
                    size="small"
                    label="Meta Title"
                    variant="outlined"
                    onChange={(event) => { dispatch(setSeo({ ...SEO, metaTitle: event.target.value })) }} />

                <TextField
                    sx={{ my: 2 }}
                    className={styles.basic}
                    size="small"
                    label="Meta Description"
                    variant="outlined"
                    multiline
                    rows={4}
                    onChange={(event) => { dispatch(setSeo({ ...SEO, metaDescription: event.target.value })) }} />
                <Box sx={{ fontSize: 14 }}>
                    Do not to exceed 300 characters<br />
                    Current : <Box component="span" sx={{ color: characterCount >= 300 ? 'red' : '#666967' }}>{characterCount} characters</Box>
                </Box>
            </Box >
        </Box>
    )
}

export default Seo