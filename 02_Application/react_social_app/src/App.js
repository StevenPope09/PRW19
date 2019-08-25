import React, { Component } from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewsFeed from './components/pages/NewsFeed';
import Messages from './components/pages/Messages'
import Watch from './components/pages/Watch';
import Image from './images/image1.jpg'

class App extends Component {

  render() {
    return (
      <Router>

        <div style={styles.container}>

          <Header pgTitle="Neutron Gram" />
          
          <Route exact path='/News-Feed' component={NewsFeed} />
          <Route exact path='/Messages' component={Messages} />
          <Route exact path='/Watch' component={Watch} />

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