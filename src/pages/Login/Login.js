import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, TextField, InputLabel, OutlinedInput, IconButton, InputAdornment, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { UserAuth } from '../../context/AuthContext'

const Login = () => {

    const { logIn, logOut } = UserAuth()
    const navigate = useNavigate()

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
            setError(e.message)
            console.log(e.message)
        }
    }
    const handleLogout = async () => {
        try {
            await logOut()
            navigate('/')
            console.log('You are logged out')
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
            <Typography
                component="div"
                variant="body1"
                style={{
                    height: '70vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > :not(style)': { m: 2, width: '90%' },
                        border: 4,
                        borderColor: 'rgb(236, 236, 236)',
                        boxShadow: 2,
                        borderRadius: 2,
                        maxWidth: 400,
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
                <Button variant="contained" type='submit' onClick={handleLogout}>Logout</Button>
            </Typography>

        </>
    )
}

export default Login