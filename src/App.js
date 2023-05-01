import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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

  const handleSelect = (e) => {
    setActiveTab(e.target.hash.slice(1))
  }
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" style={{ position: "relative" }}>
        <Container>
          <Navbar.Brand href="#home"><h3>mywebsite.fr</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ position: "absolute", bottom: -1 }}>
              <Nav.Link href="#home" className={activeTab === 'home' ? 'home tab-color active' : 'home tab-color'} onClick={handleSelect}>HOME</Nav.Link>
              <Nav.Link href="#products" className={activeTab === 'products' ? 'products tab-color active' : 'products tab-color'} onClick={handleSelect}>PRODUCTS</Nav.Link>
              <Nav.Link href="#customers" className={activeTab === 'customers' ? 'customers tab-color active' : 'customers tab-color'} onClick={handleSelect}>CUSTOMERS</Nav.Link>
              <Nav.Link href="#orders" className={activeTab === 'orders' ? 'orders tab-color active' : 'orders tab-color'} onClick={handleSelect}>ORDERS</Nav.Link>
              <Nav.Link href="#articles" className={activeTab === 'articles' ? 'articles tab-color active' : 'articles tab-color'} onClick={handleSelect}>ARTICLES</Nav.Link>
              <Nav.Link href="#statistics" className={activeTab === 'statistics' ? 'statistics tab-color active' : 'statistics tab-color'} onClick={handleSelect}>STATISTICS</Nav.Link>
              <Nav.Link href="#settings" className={activeTab === 'settings' ? 'settings tab-color active' : 'settings tab-color'} onClick={handleSelect}>SETTINGS</Nav.Link>
              <Nav.Link href="#site" className={activeTab === 'site' ? 'site tab-color active' : 'site tab-color'} onClick={handleSelect}>SITE</Nav.Link>
              <Nav.Link href="#website" className='website'>{<FontAwesomeIcon icon={faGlobe} />}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {activeTab === 'home' && <Home />}
      {activeTab === 'products' && <Products />}
      {activeTab === 'customers' && <Customers />}
      {activeTab === 'orders' && <Orders />}
      {activeTab === 'articles' && <Articles />}
      {activeTab === 'statistics' && <Statistics />}
      {activeTab === 'settings' && <Settings />}
      {activeTab === 'site' && <Site />}
    </>
  )
}

export default App;
