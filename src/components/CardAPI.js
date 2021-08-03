import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap/'

 class CardAPI extends Component {
    render() {
        return (
            <div>
              {this.props.DataAPI.map((item, index) => {
                    return (
                        <Card style={{ width: '18rem' ,display:"inline-block"}}>
                            <Card.Img variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>


                                <Button variant="primary" onClick={()=>this.props.ADDFUN(item)} >ADDFAV</Button>
                            </Card.Body>
                        </Card>

                    )
                })}  
            </div>
        )
    }
}

export default CardAPI
