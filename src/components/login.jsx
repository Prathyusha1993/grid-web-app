import React, { useState, Component} from 'react';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
        password: '',
        }
    }

     handleSubmit = (e) => {
        e.preventDefault();
    }
    
     validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length> 0;
    }

    handleChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value})
    }

    render(){
        return(
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label className="font-weight-bold">Email: </Form.Label>
                        <Form.Control 
                        type="email" 
                        value={this.state.email} 
                        onChange={this.handleChange}
                        placeholder="Enter email" 
                        style={{border:"1px solid black"}}/>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label className="font-weight-bold">Password: </Form.Label>
                        <Form.Control 
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="Enter password"
                        style={{border:"1px solid black"}}/>
                    </Form.Group >
                    <Form.Group className="custom-control custom-checkbox">
                        <Form.Label  className="custom-control-label" htmlFor="customCheck1"> Remember me</Form.Label>
                        <Form.Control 
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                        />
                    </Form.Group >
                    <button type="submit" className="btn-lg btn-block" disabled={!this.validateForm}>Sign In</button>
                </Form>
            </div>
        );
    }
    
}

export default Login;