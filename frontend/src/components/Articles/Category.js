import React, { useState } from 'react'
import { Box, Typography, Alert, Snackbar } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Card, CardContent } from '@mui/material';
import TreeViewCompo from './TreeViewCompo';

import { setCategories, getCategories } from '../../redux/slices/article.slice'
import { useDispatch, useSelector } from 'react-redux'

const Category = () => {
    const dispatch = useDispatch()
    const CATEGORIES = useSelector(getCategories)

    const [selectedCat, setSelectedCat] = useState([])
    const [checkedKeys, setCheckedKeys] = useState([CATEGORIES.categorie1, CATEGORIES.categorie2, CATEGORIES.categorie3]);
    const [checkedTitles, setCheckedTitles] = useState([])
    const [open, setOpen] = useState(false)
    const [stateSave, setStateSave] = useState({
        severity: '',
        message: ''
    })

    const onCheck = (checkedKeysValue, e) => {
        if (checkedKeysValue.length > 4) {
            setStateSave({ severity: 'error', message: 'Maximum 3 categories selected' })
            setOpen(true)
        } else {
            setCheckedKeys(checkedKeysValue);
            const filledCheckedKeys = [...checkedKeysValue, '', '', ''].slice(0, 3);
            const [cat1, cat2, cat3] = filledCheckedKeys.map((value) => (value !== undefined ? value : ''));
            dispatch(setCategories({ ...CATEGORIES, categorie1: cat1, categorie2: cat2, categorie3: cat3, }))

            //get title checked keys
            const checkedNodeTitles = [];
            e.checkedNodes.forEach((node) => {
                checkedNodeTitles.push(node.title);
            });
            setCheckedTitles(checkedNodeTitles)
        };
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    return (
        <Box >
            <Box sx={{ backgroundColor: '#666967', color: 'white' }}>
                <Typography sx={{ p: '5px' }}>Categories</Typography>
            </Box >

            <Box sx={{ backgroundColor: '#f3f3f3', color: '#666967', px: 4, py: 1 }}>
                <Grid container spacing={2} sx={{ py: 1 }}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ minWidth: 275, height: 320 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 25 }} variant="h2" component="div">
                                    Selected categorie(s) :
                                </Typography>
                                <Typography sx={{ fontSize: 12, mb: 2 }}>
                                    Cochez les gammes dans lequelles apparaitra cet article. Celles-ci apparaissent ci-dessous.<br /><br />

                                    Vous pourrez alors régler leurs priorité, en les faisant glisser avec votre pointeur, la plus haute gamme de la liste étant la gamme principale de l'article. Cette dernière est mise en évidence dans l'arbre.
                                </Typography>
                                {/* PLACER ICI LES CATEGORIES SELECTIONNEES */}
                                {CATEGORIES.categorie1 !== '' && <Alert onClose={() => { }} sx={{ mb: 1 }}>{checkedTitles[0]}</Alert>}
                                {CATEGORIES.categorie2 !== '' && <Alert onClose={() => { }} sx={{ mb: 1 }}>{checkedTitles[1]}</Alert>}
                                {CATEGORIES.categorie3 !== '' && <Alert onClose={() => { }}>{checkedTitles[2]}</Alert>}
                                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={5000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity={stateSave.severity} sx={{ width: '100%' }}>
                                        {stateSave.message}
                                    </Alert>
                                </Snackbar>

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ minWidth: 275, height: 500 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 25 }} variant="h2" component="div">
                                    Arborescence :
                                </Typography>
                                <TreeViewCompo checkedKeys={checkedKeys} onCheck={onCheck} />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid >
            </Box>
        </Box>
    )
}

export default Category