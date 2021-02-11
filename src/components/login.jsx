import React, { useState, Component } from "react";
import { Form } from "react-bootstrap";
import Header from "./header";
import { authenticateAndFetchUserDetails } from "../services/loginService";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            token: "",
            isAuthenticationfailed: "UNKNOWN",
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    /**
     * 1. Prevent auto form submit
     * 2. Fetch auth token
     * 3. Set auth token in localStorage
     * 4. Redirect to dashboard.
     */
    handleLogin = (e) => {
        e.preventDefault();
        authenticateAndFetchUserDetails(this.state.email, this.state.password)
            .then((userDetails) => {
                this.setState({
                    isAuthenticationfailed: "NO",
                });
                // Todo: Move AUTH-TOKEN to constants.
                window.localStorage.setItem(
                    "AUTH-TOKEN",
                    userDetails.AuthToken
                );
                window.localStorage.setItem("USER-EMAIL", userDetails.Email);
                window.location.href = "/dashboard";
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    isAuthenticationfailed: "YES",
                });
            });
    };

    validateForm = () => {
        return (
            this.state.email &&
            this.state.email.length > 0 &&
            this.state.password &&
            this.state.password.length > 0
        );
    };

    render() {
        return (
            <div>
                <Header />
                <div className="Login">
                    <Form onSubmit={this.handleLogin}>
                        <Form.Group controlId="email">
                            <Form.Label className="font-weight-bold">
                                Email:{" "}
                            </Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Enter email"
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label className="font-weight-bold">
                                Password:{" "}
                            </Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                placeholder="Enter password"
                            />
                        </Form.Group>
                        {this.state.isAuthenticationfailed === "YES" && (
                            <div style={{ color: "red", display: "flex", justifyContent: "center" }}>
                                Invalid credentials
                            </div>
                        )}
                        <button
                            type="submit"
                            className="btn-lg btn-block"
                            onClick={this.handleLogin}
                            style={{ background: "#4CAF50" }}
                            disabled={!this.validateForm()}
                        >
                            Sign In
                        </button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;
