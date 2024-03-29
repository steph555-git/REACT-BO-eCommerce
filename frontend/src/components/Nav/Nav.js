import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { AppBar, Box, Toolbar, IconButton, Typography, Menu } from '@mui/material';
import { Button, MenuItem, Container, Badge } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { UserAuth } from '../../context/AuthContext'

import SubNav from './SubNav'

const pages = ['home', 'articles', 'settings', 'statistics', 'site'];

const Nav = () => {

    const { logOut } = UserAuth()
    const navigate = useNavigate()

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [dataToSubNav, setDataToSubNav] = useState([])

    const categoryName = localStorage.getItem('page')
    let indexPage = pages.indexOf(categoryName)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
    })
    const logout = async () => {
        try {
            localStorage.removeItem('page')
            await logOut()
            navigate('/')
            console.log('You are logged out')
        } catch (error) {
            console.log(error.message)

        }
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/subnav');
                const jsonData = await response.json();

                const filteredData = jsonData.map(item => {
                    const newItem = [];
                    for (const key in item) {
                        if (item[key] !== null) {
                            newItem.push(item[key]);
                        }
                    }
                    return newItem;
                });

                setDataToSubNav(
                    indexPage === -1 ? filteredData[0] : filteredData[indexPage]
                )

            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        };
        fetchData();
    }, [indexPage])

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" color='primary'>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                variant="h7"
                                noWrap
                                component="a"
                                href="/"
                                onClick={() => localStorage.setItem('page', 'home')}
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                BACKOFFICE
                            </Typography>

                            {/*--------  MOBILE ------- */}
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
                                    {pages.map((page, index) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center" >
                                                <Link to={`/${page.toLowerCase()}`}
                                                    style={{
                                                        color: 'white',
                                                        textDecoration: 'none',
                                                    }}
                                                    onClick={() => localStorage.setItem('page', page)}>
                                                    {index === 0 ? (<Badge badgeContent={3} color="error">{page}</Badge>
                                                    ) : (page)
                                                    }
                                                </Link>
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>

                            {/*--------  DESKTOP ------- */}
                            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href=""
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                BACKOFFICE
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page, index) => (
                                    <Button
                                        key={page}
                                        component={Link}
                                        to={`/${page.toLowerCase()}`}
                                        sx={{
                                            my: 2,
                                            mx: 2,
                                            textAlign: 'center',
                                            color: 'white',
                                            fontSize: 15,
                                            display: 'block',
                                            position: 'relative',
                                            borderRadius: 0,
                                            height: 35,
                                            transition: 'background-color 0.3s ease-in-out',
                                            '&::before': {
                                                content: "''",
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '2px',
                                                borderBottom: '3px solid transparent',
                                                transition: 'border-color 0.3s ease-in-out',
                                                borderBottomColor: localStorage.getItem('page') === page ? 'blue' : 'transparent',
                                            },
                                            '&:hover': {
                                                '&::before': {
                                                    borderBottomColor: localStorage.getItem('page') === page ? 'blue' : 'transparent',
                                                },
                                            },
                                        }}
                                        onClick={() => localStorage.setItem('page', page)}>
                                        {index === 0 ? (
                                            <Badge badgeContent={3} color="error" >
                                                {page}
                                            </Badge>
                                        ) : (page)
                                        }
                                    </Button>
                                ))}
                            </Box>
                            {/*--------  LOGOUT ------- */}
                            <ExitToAppIcon onClick={logout} fontSize='medium' style={{ cursor: 'pointer' }} />
                        </Toolbar>
                    </Container>
                </AppBar>
            </ThemeProvider >

            {dataToSubNav && <SubNav dataToSubNav={dataToSubNav} />}
        </>
    )
}

export default Nav