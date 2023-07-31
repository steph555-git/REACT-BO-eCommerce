import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Tabs, Tab } from '@mui/material';
import { Box, Typography } from '@mui/material';

import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';

import Informations from '../../components/Articles/Informations'
import Category from '../../components/Articles/Category'
import Images from '../../components/Articles/Images'
import Seo from '../../components/Articles/Seo'
import Stats from '../../components/Articles/Stats';

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
const TAB_ICONS = [<InfoIcon />, <AccountTreeIcon />, <AutoGraphIcon />, <InsertPhotoOutlinedIcon />, <QueryStatsOutlinedIcon />]

const VerticalTabs = ({ mode }) => {

    const [value, setValue] = useState(0);
    const [sideTabMenu, setSideTabMenu] = useState([])

    useEffect(() => {
        const sideTabMenuOptions = {
            creation: ['Informations', 'Categories', 'Seo'],
            edition: ['Informations', 'Categories', 'Seo', 'Images', 'Statistics'],
        };
        setSideTabMenu(sideTabMenuOptions[mode] || []);
    }, [mode]);

    const tabStyle = { color: 'white', backgroundColor: 'rgb(166, 199, 222)', fontWeight: 400 }
    const selectedTabStyle = { color: 'black', backgroundColor: 'white', fontWeight: 500 }

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
        >
            <Tabs
                orientation="vertical"
                value={value}
                onChange={(e, newValue) => { setValue(newValue) }}
                aria-label="Vertical tabs"
                sx={{ borderRight: 1, borderColor: 'divider', width: '200px' }}
            >
                {/** INFORMATIONS / CATEGORIES / IMAGES / SEO / STATS**/}
                {sideTabMenu.map((label, index) => (
                    <Tab key={index}
                        iconPosition="start"
                        icon={TAB_ICONS[index] || null}
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
    )
}
VerticalTabs.propTypes = {
    mode: PropTypes.string.isRequired,
}
export default VerticalTabs