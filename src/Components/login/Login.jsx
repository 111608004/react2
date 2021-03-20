import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import loginService from '../../Services/loginservices'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }


    handleUserInput = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    loginUser = (event) => {
        event.preventDefault();

        // let auth = loginService(this.state.username, this.state.password)
        // console.log(this.state.username)
        // console.log(this.state.password)
        // auth.then((data) => {
            //console.log(data.token);
            //localStorage.setItem('token', data.token);
        localStorage.setItem('username', this.state.username)
        localStorage.setItem('password', this.state.password)
        //     this.setState({
        //         token: data.token
        //     })
        // })
            // console.log(localStorage.getItem('token'));
        //if (this.state.token != '') {
        if(this.validate(this.state.username, this.state.password)) {
            let { history } = this.props;
                history.push({
                    pathname: '/dashboard'
                })
        }
        else {
            alert("Username and Password is invalid");
        }

     
    }

    validate(username, password) {
        if(username == 'admin' && password == 'password')
            return true
        else
            return false
    }

    render() {
        
        localStorage.setItem('username', '')
        localStorage.setItem('password', '')
        return (
            // <div>
            //     <h1>Login</h1>
            // </div>
            
            <Form>
                
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleUserInput} />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Enter password" value={this.state.password} onChange={this.handleUserInput} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.loginUser}>
                    Submit
                </Button>

            </Form>
        )
    }
}

export default Login
