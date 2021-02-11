//import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Header from "./components/header";
import Login from "./components/login";
import { Switch, Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div className="header">
            <Header to="/login"/>
          </div>
          <div className="content">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;


