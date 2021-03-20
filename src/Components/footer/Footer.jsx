import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

class Footer extends React.Component{
    constructor()
    {
        super();
    }
    render(){
        return(
            <Navbar bg="dark" variant="dark" fixed="bottom" className="justify-content-center">
            <Navbar.Brand href="#home">News Manager @2021</Navbar.Brand>
          </Navbar>
        )
    }
}

export default Footer