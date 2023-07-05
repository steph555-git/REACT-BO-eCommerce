import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Box, Toolbar, IconButton, Typography, Menu } from '@mui/material';
import { Button, MenuItem, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { getSubNav } from '../../redux/slices/subNav.slice'
import { useSelector } from 'react-redux'

const SubNav = ({ dataSubNav }) => {
    const SOUSPAGES = dataSubNav

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (

        <AppBar position="static" style={{ height: '30px' }}>
            <Container maxWidth="xl">
                <Toolbar style={{ minHeight: '30px', paddingLeft: 0 }} >
                    {/*-------- Mobile --------*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="small"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{ mx: 1, paddingTop: '3px' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {SOUSPAGES.map((page) => (
                                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" >
                                        <Link to={`/${page.path.toLowerCase()}`}
                                            style={{
                                                color: 'black',
                                                textDecoration: 'none',
                                            }}>{page.label}</Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/*-------- Desktop --------*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {SOUSPAGES.map((page) => (
                            <Button
                                key={page.label}
                                component={Link}
                                to={`/${page.path.toLowerCase()}`}
                                onClick={handleCloseNavMenu}
                                sx={{ mr: 3, textAlign: 'center', color: 'white', display: 'block', fontSize: '0.8rem' }}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default SubNav
