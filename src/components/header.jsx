import React from "react";
import { Navbar } from "react-bootstrap";
import Logout from "./Logout";
import { isUserLoggedIn } from "../utils/util";

const getLoggedInUserEmail = () => {
    return localStorage.getItem("USER-EMAIL");
};

function Header() {
    return (
        <div>
            <Navbar
                class="navbar navbar-light"
                style={{ background: "#4CAF50", }}
            >
                <Navbar.Brand style={{ color: 'white' }}>PathGroup</Navbar.Brand>
                {isUserLoggedIn() && (
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="font-weight-bold" style={{ color: 'white' }}>
                            Email: {getLoggedInUserEmail()}
                        </Navbar.Text>
                        <Navbar.Text>
                            <Logout />
                        </Navbar.Text>
                    </Navbar.Collapse>
                )}
            </Navbar>
        </div>
    );
}

export default Header;
