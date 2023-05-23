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

import './EditArticles.css'

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
const a11yProps = (index) => {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
const EditArticles = () => {

    const { id } = useParams()
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const tabStyle = { color: 'white', backgroundColor: 'rgb(166, 199, 222)', fontWeight: 400 }
    const selectedTabStyle = { color: 'black', backgroundColor: 'white', fontWeight: 500 }

    return (
        <>
            <div className='headerDiv'>
                <div className="textInfo">
                    Article n°{id}
                    <p>créé le DATE à HEURE par USER, modifié le DATE à HEURE</p>
                </div>
                <div
                    style={{
                        marginLeft: 'auto'
                    }}
                >
                    <Button variant="outlined" size="small" color="success" sx={{ backgroundColor: 'white', mx: '3px' }}>Apply</Button>
                    <Button variant="outlined" size="small" color="success" sx={{ backgroundColor: 'white', mx: '3px' }}>Save</Button>
                    <Button variant="outlined" size="small" color="error" sx={{ backgroundColor: 'white', mx: '3px' }}>Cancel</Button>
                </div>
            </div>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 240 }}
            >
                <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >


                    <Tab label="Informations" {...a11yProps(0)} style={value === 0 ? { ...tabStyle, ...selectedTabStyle } : tabStyle} />
                    <Tab label="Category" {...a11yProps(1)} style={value === 1 ? { ...tabStyle, ...selectedTabStyle } : tabStyle} />
                    <Tab label="Images" {...a11yProps(2)} style={value === 2 ? { ...tabStyle, ...selectedTabStyle } : tabStyle} />
                    <Tab label="Réferencement" {...a11yProps(3)} style={value === 3 ? { ...tabStyle, ...selectedTabStyle } : tabStyle} />
                    <Tab label="Stats" {...a11yProps(4)} style={value === 4 ? { ...tabStyle, ...selectedTabStyle } : tabStyle} />
                </Tabs>
                <TabPanel value={value} index={0} sx={{ width: '100%' }}>
                    <Informations />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Category />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Images />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Seo />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Stats />
                </TabPanel>
            </Box>
        </>
    )
}

export default EditArticles