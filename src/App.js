//import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Login from "./components/Login";
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter as Router,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { isUserLoggedIn } from "./utils/util";

class App extends Component {

    conditionalRender = () => {
        if(isUserLoggedIn()) {
            return <Dashboard />
        } else {
            return <Login />;
        }
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route 
                            exact 
                            path="/" 
                            render={() => this.conditionalRender()} />
                        <Route 
                            exact 
                            path="/login" 
                            render={() => this.conditionalRender()} />
                        <Route 
                            exact 
                            path="/dashboard" 
                            render={() => this.conditionalRender()} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
