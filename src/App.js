import React, { Component } from 'react';
import Header from './components/header/Header'
import Nav from '../src/components/nav/Nav'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from '../src/components/Routes'
//Its better to create a route file to hold all your routes.  You may get a lot of routes.  


class App extends Component {

  render() {
    return (
      <Router>
        <div style={styles.container}>
          <Header pgTitle="Neutron Gram" /> 
          <nav style={styles.nav}>
            <Nav />
          </nav>
          <Routes />
          <div style={styles.rtContainer}>
            You can make components for advertising...
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;

const styles = {
  container: {
    display: 'block',
    background: 'white',
    backgroundSize: '50% 100%'


  },


}