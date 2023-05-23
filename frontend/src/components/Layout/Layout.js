import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

import classes from './Layout.css'

const Layout = (props) => {
    return (
        <>
            <Nav />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default Layout