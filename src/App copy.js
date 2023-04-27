import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Customers from './components/Customers/Customers'
import Orders from './components/Orders/Orders'
import Articles from './components/Articles/Articles'
import Settings from './components/Settings/Settings'
import Statistics from './components/Statistics/Statistics'
import Site from './components/Site/Site'


import './App.css';

function App() {
  const [tabsList, setTabsList] = useState([])
  useEffect(() => {
    axios.get('https://bo-ecommerce-f3e6bf.appdrag.site/api/getTabs', {
      params: {
        "AD_PageNbr": "1",
        "AD_PageSize": "500"
      }
    })
      .then((response) => {
        setTabsList(response.data.Table)
      });
  }, [])

  const componentsMap = {
    'home': Home,
    'products': Products,
    'customers': Customers,
    'orders': Orders,
    'articles': Articles,
    'settings': Settings,
    'statistics': Statistics,
    'site': Site
  }

  //  return tabsList.reduce((acc, tab) => {
  //    const name = tab.tabName;
  //    //const [first, ...rest] = name
  //    //acc[name] = [first.toUpperCase(), ...rest].join('')
  //    acc[name] = name
  //    console.log(typeof (acc[name]))
  //    return acc;
  //  }, {})

  return (
    <div className="header">
      <h3>monsite.fr</h3>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="m-4"
        style={{ fontSize: '14px', lineHeight: '15px' }}
      >
        {console.log({ tabsList })}

        {
          tabsList.map((tab, i) => {
            const TabMenu = componentsMap[tab.tabName]
            debugger
            console.log(TabMenu)
            return (
              <Tab
                key={i}
                eventKey={tab.tabName}
                tabClassName={`${tab.tabName.toLowerCase()} tab-spacing`}
                title={tab.tabName.toUpperCase()}
              >
                <TabMenu />
              </Tab>
            )
          })
        }

        <Tab eventKey="website" tabClassName="website tab-spacing" title={<FontAwesomeIcon icon={faGlobe} />}>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
