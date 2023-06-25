import React, { useState, Fragment } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { AppBar, Box, Toolbar, IconButton, Typography, Menu } from '@mui/material';
import { Button, MenuItem, Container } from '@mui/material';
import Badge from '@mui/material/Badge'
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { UserAuth } from '../../context/AuthContext'

//import styles from './Nav.module.css'

const pages = ['Home', 'Articles', 'Settings', 'Statistics', 'Site'];

const Nav = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const { logOut } = UserAuth()
    const navigate = useNavigate()

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
            await logOut()
            navigate('/')
            console.log('You are logged out')
        } catch (error) {
            console.log(error.message)

        }
    }
    return (
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
                                    index === 0 ? (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Badge badgeContent={3} color="error">
                                                <Typography textAlign="center" >
                                                    <Link to={`/${page.toLowerCase()}`}
                                                        style={{
                                                            color: 'white',
                                                            textDecoration: 'none',
                                                        }}>{page}</Link>
                                                </Typography>
                                            </Badge>
                                        </MenuItem>

                                    ) : (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center" >
                                                <Link to={`/${page.toLowerCase()}`}
                                                    style={{
                                                        color: 'white',
                                                        textDecoration: 'none',
                                                    }}>{page}</Link>
                                            </Typography>
                                        </MenuItem>
                                    )

                                ))}
                            </Menu>
                        </Box>
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
                                <React.Fragment key={page}>
                                    {index === 0 ? (

                                        <Button
                                            key={page}
                                            component={Link}
                                            to={`/${page.toLowerCase()}`}
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, mx: 2, textAlign: 'center', color: 'white', display: 'block' }}
                                        >
                                            <Badge badgeContent={3} color="error" >
                                                {page}
                                            </Badge>
                                        </Button>

                                    ) : (
                                        <Button
                                            key={page}
                                            component={Link}
                                            to={`/${page.toLowerCase()}`}
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, mx: 2, textAlign: 'center', color: 'white', display: 'block' }}
                                        >
                                            {page}
                                        </Button>
                                    )}
                                </React.Fragment>
                            ))}
                        </Box>
                        <ExitToAppIcon onClick={logout} fontSize='medium' style={{ cursor: 'pointer' }} />
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider >
    )
}

export default Nav