import React, { Component } from 'react';
import Header from './components/header/Header'
import Nav from '../src/components/nav/Nav'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from '../src/components/Routes'
import MyCard from './components/MyCard'
import MyCard2 from './components/MyCard2'
import Grid from '@material-ui/core/Grid';
//Its better to create a route file to hold all your routes.  You may get a lot of routes.  


class App extends Component {

  render() {
    return (
      <Router>
        <div style={styles.container}>
          <Header pgTitle="Neutron Gram" />
          <Grid container spacing={24}>
            <Grid item xs={8}>
              <nav style={styles.nav}>
                <Nav />
              </nav>
            </Grid>
            <Grid item xs={12}>
              <Routes />
            </Grid>  
          </Grid>
          
          <div style={styles.rtContainer}>
            <Grid container spacing={12}>
              <Grid item xs={6}>
                <MyCard />
              </Grid>
              <Grid item xs={6}>
                <MyCard2 />
              </Grid>
            </Grid>

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
    //backgroundSize: '50% 100%'


  },
  nav: {
    marginLeft: '5%',
    position: 'relative',
    bottom: '-25%'
  },
  rtContainer: {
    marginTop: '2%'
  }


}