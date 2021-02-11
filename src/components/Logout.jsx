import React, { Component } from "react";

class Logout extends Component {

    /**
     * 1. Remove auth token from local storage
     * 2. Redirect to Login.
     */
    handleLogout = () => {
        window.localStorage.removeItem('AUTH-TOKEN');
        window.location.href = "/login";
    }

    render() {
        return (
            <a style={{ paddingLeft: "20px" }} href="#logout" onClick={this.handleLogout}>
                Logout
            </a>
        );
    }
}

export default Logout;
