import React from 'react'
import { Box, Typography, Paper } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Card, CardContent, CardActions } from '@mui/material';
import TreeViewCompo from '../TreeView/TreeViewCompo';

const Category = () => {
    return (

        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Card sx={{ minWidth: 275, height: 300 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 25 }} variant="h2" component="div">
                            Coordonnées :
                        </Typography>
                        <Typography sx={{ fontSize: 12 }}>
                            Cochez les gammes dans lequelles apparaitra cet article. Celles-ci apparaissent ci-dessous.<br /><br />

                            Vous pourrez alors régler leurs priorité, en les faisant glisser avec votre pointeur, la plus haute gamme de la liste étant la gamme principale de l'article. Cette dernière est mise en évidence dans l'arbre.
                        </Typography>
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

    )
}

export default Category