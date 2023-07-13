import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, FormControl, TextField, InputLabel, OutlinedInput, IconButton, InputAdornment, Typography } from '@mui/material'
import Alert from '@mui/material/Alert'
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { UserAuth } from '../../context/AuthContext'

import styles from './Login.module.css'

const Login = () => {

    const { logIn } = UserAuth()
    const navigate = useNavigate()
    const theme = useTheme();
    const matches = useMediaQuery('(min-width:600px)')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await logIn(email, password)
            navigate('/')
        } catch (e) {
            setError(true)
            console.log(e.message)
        }
    }

    return (
        <>
            <Typography
                component="div"
                variant="body1"
                style={{
                    height: '60vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > :not(style)': { m: 2, width: matches ? '90%' : '100%' },
                        border: matches ? 4 : 0,
                        borderColor: 'rgb(236, 236, 236)',
                        boxShadow: matches ? 2 : 0,
                        borderRadius: matches ? 2 : 0,
                        maxWidth: matches ? 400 : '100%',
                        p: 4,
                        mx: 'auto',
                        width: '80%',
                        top: 500,
                        zIndex: 'tooltip',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <p style={{ textAlign: 'center', marginBottom: '20px', fontWeight: '400', fontSize: '18px' }}>Connexion au backoffice</p>
                    {error &&
                        < Alert severity="error" > Error alert — login or password incorrect!</Alert >}
                    <TextField
                        id="user-email"
                        label="Email"
                        type="email"
                        autoComplete='current-email'
                        size="small"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormControl variant="outlined" onChange={(e) => setPassword(e.target.value)}>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            size="small"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Button variant="contained" type='submit'>Login</Button>
                </Box>
            </Typography>

        </>
    )
}

export default Login