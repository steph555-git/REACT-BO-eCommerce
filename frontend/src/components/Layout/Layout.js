import React from 'react'
import { Container } from '@mui/material'

import Nav from '../Nav/Nav'
import SubNav from '../Nav/SubNav'

const Layout = (props) => {
    return (
        <>
            <Nav />
            <Container maxWidth="xl">
                {props.children}
            </Container>
        </>
    )
}

export default Layout