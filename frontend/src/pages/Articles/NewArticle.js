import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Tabs, Tab, Button, ListItemIcon, ListItemText } from '@mui/material';
import { Box, Typography } from '@mui/material';

import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

import Informations from '../../components/Articles/Informations'
import Category from '../../components/Articles/Category'
import Seo from '../../components/Articles/Seo'

import styles from './NewArticle.module.css'

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
                <Box sx={{ p: 1 }}>
                    <Typography component="div">{children}</Typography>
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
const NewArticle = () => {

    const [value, setValue] = useState(0);
    const [labelsSideMenu, SetLabelsSideMenu] = useState(['Informations', 'Categories', 'Seo'])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const tabStyle = { color: 'white', backgroundColor: 'rgb(166, 199, 222)', fontWeight: 400, height: '30px' }
    const selectedTabStyle = { color: 'black', backgroundColor: 'white', fontWeight: 500, height: '30px' }

    return (
        <>
            <div className={styles.headerDiv}>
                <div>
                    New article
                </div>
                <div style={{ marginLeft: 'auto' }}>
                    <Button variant="outlined" size="small" color="success" sx={{ backgroundColor: 'white', mx: '3px' }}>Apply</Button>
                    <Button variant="outlined" size="small" color="success" sx={{ backgroundColor: 'white', mx: '3px' }}>Save</Button>
                    <Button variant="outlined" size="small" color="error" sx={{ backgroundColor: 'white', mx: '3px' }}>Cancel</Button>
                </div>
            </div>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
            >
                <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs"
                    sx={{ borderRight: 1, borderColor: 'divider', width: '200px' }}
                >
                    {/** INFORMATIONS / CATEGORIES / SEO **/}
                    {labelsSideMenu.map((label, index) => (
                        <Tab key={index}
                            iconPosition="start"
                            icon={index === 0 ? <InfoIcon /> : index === 1 ? <AccountTreeIcon /> : index === 2 ? <AutoGraphIcon /> : null}
                            label={label}
                            sx={{ paddingLeft: '15px', textAlign: 'left', justifyContent: 'left' }}
                            {...a11yProps(index)} style={value === index ? { ...tabStyle, ...selectedTabStyle } : tabStyle} />
                    ))}

                </Tabs >

                <TabPanel value={value} index={0} style={{ width: '100%' }}>
                    <Informations />
                </TabPanel>
                <TabPanel value={value} index={1} style={{ width: '100%' }}>
                    <Category />
                </TabPanel>
                <TabPanel value={value} index={2} style={{ width: '100%' }}>
                    <Seo />
                </TabPanel>
            </Box >
        </>
    )
}

export default NewArticle