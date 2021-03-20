import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck'
import NewsData from '../Model/model'
import 'bootstrap/dist/css/bootstrap.min.css';

class DisplayCard extends React.Component{
    constructor() {
        super();
        this.newsapp = new NewsData();
        this.state = {
            url : "",
            description : ""
        }
        
        this.savenews = this.savenews.bind(this);
        
        this.handleOnClick= this.handleOnClick.bind(this);
    }

    async savenews(newsdata) {
        //console.log(newsdata.url)
        
        return fetch("http://localhost:3010/news",{
            method: "post",
         
            headers:{
              'content-Type':"application/json"
        },
          body: JSON.stringify(newsdata),
      })
    }

    async handleOnClick(value) {
        //this.props.info
        //event.preventDefault()
        this.newNews = new NewsData();
        //console.log(this.props.info.description)
        //console.log(this.props.info.url)
        //console.log('url = ' + this.props.info.url);
        this.state = {
            url: value.url,
            description : value.description
        }
        // this.newNews.description = this.props.info.description;
        // this.newNews.url = this.props.info.url;
        console.log("url : " + this.state.url)
        this.savenews(this.state);
    }


    render(){        
      
      //const { items = [] } = this.props;
        console.log(this.props.info)
        return (
            
            
            <div className = "grid-container">
            
                {this.props.info.map((news) => (
           
                    <Card style={{ width: '18rem'}}>

                        <Card.Body>
                            <Card.Title>{news.title}</Card.Title>

                            <Card.Img src={news.urlToImage} alt="Image Unavailable" ></Card.Img>
                          
                            <Card.Text >{news.description}</Card.Text>
                          
                            <Button variant="dark" href={news.url} target="_blank">Read More</Button>
                            <br></br>
                            <br></br>
                            <Button type = "submit" onClick={()=>this.handleOnClick(news)}>Read Later</Button>
                        </Card.Body>
                     
                    </Card>
              
                  ))}
            </div>
           
        )
    }
}

export default DisplayCard
