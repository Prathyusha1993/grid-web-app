//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Header from "./components/header";
import Login from "./components/login";
import Search from './components/Search'
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import AgGrid from './components/AgGrid';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: {}
    }
  }

  handleSearch = (searchParams) => {
    this.setState({
      searchParams: searchParams
    })
  }

  render() {
    return(
      <Router>
        <div>
          <Header />
          <br />
          {/* <Switch>
            <Route exact path="/">
              <Login />
            </Route>
          </Switch> */}
          <Search 
            onSearch={this.handleSearch}
          />
          <AgGrid
            searchParams={this.state.searchParams}
          />
          {/* <AgGrid /> */}
        </div>
      </Router>
    );
  }

}

export default App;
    