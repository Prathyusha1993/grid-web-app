import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
    }
    
    function validateForm() {
        return email.length > 0 && password.length> 0;
    }

    return(
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Username: </Form.Label>
                    <Form.Control 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group >
                <Button type="submit" disabled={!validateForm()}>Login</Button>
            </Form>
        </div>
    );
}

export default Login;