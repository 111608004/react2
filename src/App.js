import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import React from 'react';
import Dashboard from './Components/dashboard/Dashboard';

import {BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import ReadNow from './Components/readNow/ReadNow';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';

class App extends React.Component{
  render(){
    return(
      <div>
          <Container>
          <Row className="row-header">
              <Header></Header>   
          </Row>

          <Row className="row-container">
              <Router>
              <Route exact path='/' component={Login}></Route>
              <Route exact path='/login' component={Login}></Route>
              <Route exact path='/dashboard' component={Dashboard}></Route>
              <Route exact path='/register' component={Register}></Route>
              <Route exact path='/readNow' component={ReadNow}></Route>
              </Router>
          </Row>
          <Row >
              <Footer></Footer>   
          </Row>

          </Container>
      </div>
    )

  }

}
export default App;
