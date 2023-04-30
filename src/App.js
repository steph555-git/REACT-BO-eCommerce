import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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

  const [activeTab, setActiveTab] = useState('home');

  const handleSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  }
  return (

    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><h3>monsite.fr</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='home tab-color'>HOME</Nav.Link>
            <Nav.Link href="#products" className='products tab-color'>PRODUCTS</Nav.Link>
            <Nav.Link href="#customers" className='customers tab-color'>CUSTOMERS</Nav.Link>
            <Nav.Link href="#orders" className='orders tab-color'>ORDERS</Nav.Link>
            <Nav.Link href="#articles" className='articles tab-color'>ARTICLES</Nav.Link>
            <Nav.Link href="#statistics" className='statistics tab-color'>STATISTICS</Nav.Link>
            <Nav.Link href="#settings" className='settings tab-color'>SETTINGS</Nav.Link>
            <Nav.Link href="#site" className='site tab-color'>SITE</Nav.Link>
            <Nav.Link href="#website" className='website'>{<FontAwesomeIcon icon={faGlobe} />}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




    //    <Navbar style={{ backgroundColor: 'black' }} expand="lg">
    //      <Container>
    //        <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //        <Navbar.Collapse id="basic-navbar-nav">
    //          <Nav
    //            variant="tabs"
    //            activeKey={activeTab}
    //            onSelect={handleSelect}
    //            className=""
    //
    //            style={{ fontSize: '14px', lineHeight: '15px' }}
    //          >
    //            <Nav.Item>
    //              <Nav.Link
    //                eventKey="home"
    //                tabClassName='home tab-spacing'
    //                style={{ backgroundColor: activeTab !== 'home' ? '#4f4f4f' : '' }}>HOME</Nav.Link>
    //            </Nav.Item>
    //            <Nav.Item>
    //              <Nav.Link 
    //              eventKey="products" 
    //              tabClassName='products tab-spacing'
    //              style={{ backgroundColor: activeTab !== 'products' ? '#4f4f4f' : '' }}>PRODUCTS</Nav.Link>
    //            </Nav.Item>
    //            <Nav.Item>
    //              <Nav.Link 
    //              eventKey="customers" 
    //              tabClassName='customers tab-spacing'
    //              style={{ backgroundColor: activeTab !== 'customers' ? '#4f4f4f' : '' }}>CUSTOMERS</Nav.Link>
    //            </Nav.Item>
    //            <Nav.Item>
    //              <Nav.Link 
    //              eventKey="orders" 
    //              tabClassName='orders tab-spacing'
    //              style={{ backgroundColor: activeTab !== 'orders' ? '#4f4f4f' : '' }}>ORDERS</Nav.Link>
    //            </Nav.Item>
    //            <Nav.Item>
    //              <Nav.Link 
    //              eventKey="articles" 
    //              tabClassName='articles tab-spacing'
    //              style={{ backgroundColor: activeTab !== 'articles' ? '#4f4f4f' : '' }}>ARTICLES</Nav.Link>
    //            </Nav.Item>
    //            <Nav.Item>
    //              <Nav.Link 
    //              eventKey="statistics" 
    //              tabClassName='statistics tab-spacing'
    //              style={{ backgroundColor: activeTab !== 'statistics' ? '#4f4f4f' : '' }}>STATISTICS</Nav.Link>
    //            </Nav.Item>
    //            <Nav.Item>
    //              <Nav.Link 
    //              eventKey="settings" 
    //              tabClassName='settings tab-spacing'
    //              style={{ backgroundColor: activeTab !== 'settings' ? '#4f4f4f' : '' }}>SETTINGS</Nav.Link>
    //            </Nav.Item>
    //            <Nav.Item>
    //              <Nav.Link 
    //              eventKey="site" 
    //              tabClassName='site tab-spacing'
    //              style={{ backgroundColor: activeTab !== 'site' ? '#4f4f4f' : '' }}>SITE</Nav.Link>
    //            </Nav.Item>
    //            <Nav.Item>
    //              <Nav.Link 
    //              eventKey="website" 
    //              tabClassName='website tab-spacing'
    //              style={{ backgroundColor: activeTab !== 'website' ? '#4f4f4f' : '' }}>{<FontAwesomeIcon icon={faGlobe} />}</Nav.Link>
    //            </Nav.Item>
    //
    //            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="custom-dropdown">
    //              <div className="dropdown-menu-horizontal">
    //                <NavDropdown.Item eventKey="action/3.1" href="#">Action</NavDropdown.Item>
    //                <NavDropdown.Item eventKey="action/3.2" href="#">Another action</NavDropdown.Item>
    //                <NavDropdown.Item eventKey="action/3.3" href="#">Something</NavDropdown.Item>
    //                <NavDropdown.Item eventKey="action/3.4" href="#">Separated link</NavDropdown.Item>
    //              </div>
    //            </NavDropdown>
    //
    //          </Nav>
    //        </Navbar.Collapse>
    //      </Container>
    //    </Navbar>




  );
}

export default App;
