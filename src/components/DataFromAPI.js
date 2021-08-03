import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
 class DataFromAPI extends Component {
    render() {
        return (
            <div>
                 {this.props.colorFav.map((item,idx)=>{
          return(
            <Card style={{ width: '18rem' , display:"inlin-block"}}>
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
             
              <Button variant="primary" onClick={()=>this.props.delfun(idx)} >Del</Button>
              <Button variant="primary" onClick={()=>this.props.showfun(idx)} >Update</Button>
            </Card.Body>
          </Card>

          )
        })}
            </div>
        )
    }
}

export default DataFromAPI
