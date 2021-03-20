import React from 'react';

import { Redirect } from 'react-router';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            cpassword: ''
        }
    }

    loginUser = (event) => {
        alert("Please login");
        return <Redirect to='/login'></Redirect>

    }
    handleUserInput = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        localStorage.setItem('username', '')
        localStorage.setItem('password', '')
        return (
            // <h1>Register</h1>
            <Form>
                
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleUserInput} />
            </Form.Group>

            <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Enter password" value={this.state.password} onChange={this.handleUserInput} />
            </Form.Group>

            <Form.Group >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control name="confirm password" type="password" placeholder="Confirm password" value={this.state.password} onChange={this.handleUserInput} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.loginUser}>
                Submit
            </Button>

        </Form>
        )
    }

}

export default Register