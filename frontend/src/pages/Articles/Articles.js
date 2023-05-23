import React from 'react'
import { Container } from '@mui/material'
import ListArticles from '../../components/ListArticles/ListArticles'

import classes from './Articles.css'

const Articles = () => {
    return (
        <Container maxWidth="xl">
            <h1 >Articles</h1>
            <ListArticles />
        </Container>
    )
}

export default Articles