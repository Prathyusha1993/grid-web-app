//import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Header from "./components/header";
import Login from "./components/login";
import Search from "./components/Search";
import { Switch, Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import AgGrid from "./components/AgGrid";
import Dashboard from "./components/Dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: '',
      token:''
    };
  }

  handleLogin = () => {
    this.setState({ email: this.state.email });
  };

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

{
  /* <Router>
        <div>
          <Header />
          <Login 
            onLogin={this.handleLogin}/>
          <br />
          {/* <Switch>
            <Route exact path="/">
              <Login />
            </Route>
          </Switch> */
}
// <Search
//   onSearch={this.handleSearch}
// />
// <AgGrid
//   searchParams={this.state.searchParams}
// />
{
  /* <AgGrid /> 
        </div>
      </Router> */
}
