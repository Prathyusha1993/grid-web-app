import React, { useState, Component} from 'react';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {loginInfo} from '../services/loginService'

class DemoLogin extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
        }
    }


    render(){
        return(
            <div className="Login">
                <h3>Login</h3><br />
                <Form >
                    <Form.Group controlId="email">
                        <Form.Label className="font-weight-bold">Email: </Form.Label>
                        <Form.Control 
                        type="email" 
                        name="email"
                        value={this.state.email} 
                        onChange={this.handleChange}
                        placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label className="font-weight-bold">Password: </Form.Label>
                        <Form.Control 
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="Enter password"/>
                    </Form.Group >
                    <button type="submit" className="btn-lg btn-block"  onClick={this.handleLogin}>Sign In</button>
                </Form>
            </div>
        );
    }
    
}

export default DemoLogin;