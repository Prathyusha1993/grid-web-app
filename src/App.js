//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Header from "./components/header";
import Login from "./components/login";
import Search from './components/search'
import Table from "./components/table";

class App extends Component {
  state={};

  render() {
    return(
      <div>
        <Header />
        <Login />
        <Search />
        {/* <Table /> */}
        
      </div>
    );
  }
}

export default App;
