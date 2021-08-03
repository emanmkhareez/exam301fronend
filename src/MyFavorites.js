import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap/'
import FormUpdate from './components/FormUpdate';
import DataFromAPI from './components/DataFromAPI';
class MyFavorites extends React.Component {
  constructor(props){
    super(props)
    this.state={
      colorFav:[],
      userEmail:"",
      show:false,
      title:'',
      imageUrl:'',
      index:0

    }
  }
  componentDidMount=async()=>{
    const {user}=this.props.auth0
    await  this.setState({
      userEmail:`${user.email}`

    })
    const email=this.state.userEmail
    let result= await axios.get(`${process.env.REACT_APP_SERVER}/getfav?email=${email}`)
   await  this.setState({
     colorFav:result.data
   })
   console.log('ggggggg',this.state.colorFav)
  }
  delfun =async(idx)=>{
    const email=this.state.userEmail
    let result=await axios.delete(`${process.env.REACT_APP_SERVER}/delfun/${idx}?email=${email}`)
await this.setState({
  colorFav:result.data
})
  }

showfun=async (idx)=>{
  await this.setState({
    show:true,
    title:this.state.colorFav[idx].title,
    imageUrl:this.state.colorFav[idx].imageUrl,
    index:idx
  })

}

updatefun =async(event)=>{
  event.preventdefault();
  const index=this.state.index

  const email=this.state.userEmail
  const obj={
    title:event.target.title.value,
      imageUrl:event.target.title.imageUrl,

  }
  let result=await axios.put(`${process.env.REACT_APP_SERVER}/updateFun/${index}?email=${email}`,obj)
  await this.setState({
    colorFav:result.data
  })
}
  render() {
    
    return(
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
       <DataFromAPI
       colorFav={this.state.colorFav}
       delfun={this.delfun}
       showfun={this.showfun}


       />
       {this.state.show &&
       <FormUpdate
       title={this.state.title}
       imageUrl={this.state.imageUrl}
       updatefun={this.updatefun}
       />
       }
      </>
    )
  }
}

export default withAuth0(MyFavorites);

