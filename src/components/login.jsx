import React, { useState, Component } from "react";
import { Redirect } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { fetchAuthToken } from "../services/loginService";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			token: "",
			navigate: false,
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
		fetchAuthToken().then((authToken) => {
			// Todo: Move AUTH-TOKEN to constants.
			window.localStorage.setItem("AUTH-TOKEN", authToken);
			window.location.href = "/dashboard";
		});
	};

	render() {
		return (
			<div className="Login">
				<h3>Login</h3>
				<br />
				<Form onSubmit={this.handleLogin}>
					<Form.Group controlId="email">
						<Form.Label className="font-weight-bold">Email: </Form.Label>
						<Form.Control
							type="email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
							placeholder="Enter email"
						/>
					</Form.Group>
					<Form.Group controlId="password">
						<Form.Label className="font-weight-bold">Password: </Form.Label>
						<Form.Control
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
							placeholder="Enter password"
						/>
					</Form.Group>
					<button
						type="submit"
						className="btn-lg btn-block"
						onClick={this.handleLogin}
					>
						Sign In
					</button>
				</Form>
			</div>
		);
	}
}

export default Login;
