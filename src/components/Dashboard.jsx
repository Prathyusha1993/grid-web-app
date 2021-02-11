import React, { Component } from "react";
import Search from "./Search";
import AgGrid from "./AgGrid";
import { Link } from "react-router-dom";

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchParams: {},
		};
	}

	handleSearch = (searchParams) => {
		this.setState({
			searchParams: searchParams,
		});
	};

	render() {
		return (
			<div>
				{/* Welcome user! */}
				<Search onSearch={this.handleSearch} />
				<AgGrid searchParams={this.state.searchParams} />
				{/* <Link to="/logout"></Link> */}
			</div>
		);
	}
}

export default Dashboard;
