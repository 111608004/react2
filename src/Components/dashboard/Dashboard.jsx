import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NewsCard from '../card/Card'

class Dashboard extends React.Component{
    constructor()
    {
        super();
        this.state = {
            items : []
        }
        this.getnews = this.getnews.bind(this);
    }

    componentDidMount() {
        
        this.getnews()
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

        return(
            
             <div>
                
               
                {/* {this.state.items.map((user) => ( */}
                    <NewsCard items = {this.state.items}></NewsCard>
                {/* ))}
               */}
             </div>
        )            
    }
}

export default Dashboard