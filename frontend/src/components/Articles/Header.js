import React from 'react'
import { Box, Button } from '@mui/material'

import styles from './Articles.module.css'

const Header = ({ title, handleApply }) => {
    return (
        <Box className={styles.headerDiv}>
            <Box sx={{ fontSize: 25, p: 1 }}>
                {title}
            </Box>
            <Box sx={{ marginLeft: 'auto' }}>
                <Button variant="outlined" size="small" color="success" sx={{ backgroundColor: 'white', mx: '3px' }} onClick={handleApply}>Apply</Button>
                <Button variant="outlined" size="small" color="success" sx={{ backgroundColor: 'white', mx: '3px' }}>Save</Button>
                <Button variant="outlined" size="small" color="error" sx={{ backgroundColor: 'white', mx: '3px' }}>Cancel</Button>
            </Box>
        </Box>
    )
}

export default Header