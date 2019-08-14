import React, {Component} from 'react';
import './App.css';
import MyBtn from './components/buttons/MyBtn';

class App extends Component {
  render() {
    return(
      <div>
        <MyBtn btnText="Home" />
        <MyBtn btnText="About" />
        <MyBtn btnText="Contact" />
      </div>
    )
  }
}

export default App;
