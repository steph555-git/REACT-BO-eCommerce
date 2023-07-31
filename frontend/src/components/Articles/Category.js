import React, { useState } from 'react'
import { Box, Typography, Alert } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Card, CardContent } from '@mui/material';
import TreeViewCompo from './TreeViewCompo';

import { setCategories, getCategories } from '../../redux/slices/article.slice'
import { useDispatch, useSelector } from 'react-redux'

const Category = () => {
    const [selectedCat, setSelectedCat] = useState([])
    return (
        <Box >
            <Box sx={{ backgroundColor: '#666967', color: 'white' }}>
                <Typography sx={{ p: '5px' }}>Categories</Typography>
            </Box >

            <Box sx={{ backgroundColor: '#f3f3f3', color: '#666967', px: 4, py: 1 }}>
                <Grid container spacing={2} sx={{ py: 1 }}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ minWidth: 275, height: 300 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 25 }} variant="h2" component="div">
                                    Coordonnées :
                                </Typography>
                                <Typography sx={{ fontSize: 12, mb: 2 }}>
                                    Cochez les gammes dans lequelles apparaitra cet article. Celles-ci apparaissent ci-dessous.<br /><br />

                                    Vous pourrez alors régler leurs priorité, en les faisant glisser avec votre pointeur, la plus haute gamme de la liste étant la gamme principale de l'article. Cette dernière est mise en évidence dans l'arbre.
                                </Typography>
                                {/* PLACER ICI LES CATEGORIES SELECTIONNEES */}
                                <Alert onClose={() => { }} sx={{ mb: 1 }}>Categorie A</Alert>
                                <Alert onClose={() => { }}>Categorie B</Alert>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ minWidth: 275, height: 500 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 25 }} variant="h2" component="div">
                                    Arborescence :
                                </Typography>
                                <TreeViewCompo />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid >
            </Box>
        </Box>
    )
}

export default Category