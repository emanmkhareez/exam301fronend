import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap/'
import CardAPI from './components/CardAPI';


class AllDataAPI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            DataAPI: [],
            userEmail: ''

        }
    }
    componentDidMount = async () => {
        let result = await axios.get(`${process.env.REACT_APP_SERVER}/getfromAPI`)
       await  this.setState({
            DataAPI: result.data
        })

console.log('kkkkk',this.state.DataAPI)


    }

    ADDFUN = async (item) => {

        const { user } = this.props.auth0
        await this.setState({
            userEmail:`${user.email}`

        })

        const email = this.state.userEmail

        let result=await axios.post(`${process.env.REACT_APP_SERVER}/addToDB?email=${email}`,item)


console.log('adddd')

    }
    render() {
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>

                <CardAPI
                DataAPI={this.state.DataAPI}
                ADDFUN={this.ADDFUN}
                />
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
