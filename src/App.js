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
  return (
    <div className="header">
      <h3>monsite.fr</h3>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="m-4"
        style={{ fontSize: '14px', lineHeight: '15px' }}
      >
        <Tab eventKey="home" tabClassName="home tab-spacing" title="HOME" >
          <Home />
        </Tab>
        <Tab eventKey="products" tabClassName="products tab-spacing" title="PRODUCTS">
          <Products />
        </Tab>
        <Tab eventKey="customers" tabClassName="customers tab-spacing" title="CUSTOMERS">
          <Customers />
        </Tab>
        <Tab eventKey="orders" tabClassName="orders tab-spacing" title="ORDERS">
          <Orders />
        </Tab>
        <Tab eventKey="articles" tabClassName="articles tab-spacing" title="ARTICLES">
          <Articles />
        </Tab>
        <Tab eventKey="settings" tabClassName="settings tab-spacing" title="SETTINGS">
          <Settings />
        </Tab>
        <Tab eventKey="statistics" tabClassName="statistics tab-spacing" title="STATISTICS">
          <Statistics />
        </Tab>
        <Tab eventKey="site" tabClassName="site tab-spacing" title="SITE">
          <Site />
        </Tab>
        <Tab eventKey="website" tabClassName="website tab-spacing" title={<FontAwesomeIcon icon={faGlobe} />}>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
