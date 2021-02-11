import React, { Component } from "react";
import Search from "./Search";
import AgGrid from "./AgGrid";
import Header from "./header";

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
                <Header />
                <Search onSearch={this.handleSearch} />
                <AgGrid searchParams={this.state.searchParams} />
            </div>
        );
    }
}

export default Dashboard;
