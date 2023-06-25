import React from 'react'
import { Container } from '@mui/material'

import Nav from '../Nav/Nav'
import SubNav from '../Nav/SubNav'

import Footer from '../Footer/Footer'

import styles from './Layout.module.css'

const Layout = (props) => {
    return (
        <>
            <Nav />
            <SubNav />
            <Container maxWidth="xl">
                {props.children}
            </Container>
            <Footer />
        </>
    )
}

export default Layout