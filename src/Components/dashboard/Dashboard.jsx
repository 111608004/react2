import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NewsCard from '../card/Card'
import Login from '../login/Login'
import validate from '../login/Login'
import { Redirect } from 'react-router';

class Dashboard extends React.Component{
    constructor()
    {
        super();
        this.state = {
            items : [],
            
        }
        this.getnews = this.getnews.bind(this);
    }

    componentDidMount() {
        
        this.getnews()
    }

    
       
    validate(username, password) {
        if(username == 'admin' && password == 'password')
            return true
        else
            return false
    }
    async getnews() {
        let items = this.state.items;
        await fetch('http://newsapi.org/v2/top-headlines?country=in&apiKey=26f9c2b379c642ea94598c8ca2b65417')
                        .then((response) =>
                            response.json())
                        .then(records => {
                            items.push(records.articles)
                        });
                        this.setState({
                            items
                        })
                        
        
    }

    render(){
        //validate()
        let username = localStorage.getItem('username');
        let password = localStorage.getItem('password');
        
        if(this.validate(username, password)) {
            return(
                
                <div>
                    
                
                    {/* {this.state.items.map((user) => ( */}
                        <NewsCard items = {this.state.items}></NewsCard>
                    {/* ))}
                */}
                </div>
            ) 
        }
        else {
            return <Redirect to='/login'></Redirect>
        }       
    }
}

export default Dashboard