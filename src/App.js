import React, {Component} from 'react';
import './App.css';
import MyBtn from './components/buttons/MyBtn';
import logo from '../src/images/logo.png';
import MyForm from './components/myForm/MyForm';
import Search from './components/search/Search';

class App extends Component {
  render() {
    return(
      <div>
        <MyBtn btnText="Home" />
        <MyBtn btnText="About" />
        <MyBtn btnText="Contact" />

        <p>
          <img src={logo} alt="Logo" />
        </p>
        <MyForm addName={this.addName} />
        <Search searchMe={this.searchMe} />

      </div>
      
    )
  }
}

export default App;
