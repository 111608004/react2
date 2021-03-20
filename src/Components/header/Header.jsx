import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard';

import {BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../login/Login';

class Header extends React.Component {
    render() {
        return (

            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">News App</Navbar.Brand>
                <Navbar.Brand >
                 <Router>
                 <Link to='/login'>Login    </Link>
                    <Link to='/dashboard'>Dashboard</Link>
                 </Router>
                </Navbar.Brand>

            </Navbar>

        )
    }
}

export default Header