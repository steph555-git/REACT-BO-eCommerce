import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'

import Informations from '../../components/Articles/Informations'
import Category from '../../components/Articles/Category'
import Images from '../../components/Articles/Images'
import Seo from '../../components/Articles/Seo'
import Stats from '../../components/Articles/Stats'
import Header from '../../components/Articles/Header';

import styles from './EditArticles.module.css'


const EditArticles = () => {

    const { id } = useParams()

    const handleApply = () => {
        console.log('Apply')
    }

    return (
        <>
            <Header title={`Article #${id}`} handleApply={handleApply} />



        </>
    )
}

export default EditArticles