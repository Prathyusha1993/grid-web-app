//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Header from "./components/header";
import Login from "./components/login";
import Search from './components/search'
import Table from "./components/table";
import TableInfo from './components/tableInfo'
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import ExpandRow from './components/expandRow'

class App extends Component {
  state={
    user: null
  };

  render() {
    return(
      <div>
        <ExpandRow />
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
    