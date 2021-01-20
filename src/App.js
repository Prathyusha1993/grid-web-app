//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Header from "./components/header";
import Login from "./components/login";

class App extends Component {
  state={};

  render() {
    return(
      <div>
        <Header />
        <Login />
      </div>
    );
  }
}

export default App;
