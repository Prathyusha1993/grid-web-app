//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Header from "./components/header";
import Login from "./components/login";
import Search from './components/search'
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import AgGrid from './components/agGrid'


class App extends Component {
  state={
  
  };

  render() {
    return(
      <div>
        <Header />
        <br />
        <Search />
        <br />
        <br />
        <AgGrid />
      </div>
    );
  }

}

export default App;


{/* <div>
        <Router>
          <Header />
          {!this.state.user ? (
            <Login />
          ): (
            <Link to="/" onClick={this.logout}>Logout</Link>
          )}
          <Search />
          <TableInfo />
        </Router>
         <Switch>
          <Route />    first i have to kepp search and tableinfo in one file and then route that path to login 
        </Switch> 
      </div> */}
    