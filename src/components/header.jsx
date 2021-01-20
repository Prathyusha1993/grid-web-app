import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header () {
    return (
        <div>
            <Navbar bg="light">
            <Navbar.Brand href="#home">L O G O</Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default Header;