import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { AppBar, Box, Toolbar, IconButton, Typography, Menu } from '@mui/material';
import { Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { getSubNav } from '../../redux/slices/subNav.slice'
import { useSelector } from 'react-redux'

const SubNav = () => {
    const SOUSPAGES = useSelector(getSubNav)

    const [anchorElNav, setAnchorElNav] = useState(null);
    const navigate = useNavigate()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (

        <AppBar position="static" style={{ height: '30px' }}>
            <Toolbar style={{ minHeight: '30px' }} >
                {/*-------- Mobile --------*/}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
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
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, paddingTop: '3px' }}>
                    {SOUSPAGES.map((page) => (
                        <Button
                            key={page.label}
                            component={Link}
                            to={`/${page.path.toLowerCase()}`}
                            onClick={handleCloseNavMenu}
                            sx={{ mx: 2, textAlign: 'center', color: 'white', display: 'block', fontSize: '0.8rem' }}
                        >
                            {page.label}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>

    )
}

export default SubNav