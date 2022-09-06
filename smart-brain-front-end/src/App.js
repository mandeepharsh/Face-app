import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank'
import Particle from './components/Particle/Particle'
import FaceRecogination from './components/FaceRecogination/FaceRecogination'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'

const initialState = {
  input : '',
  imageUrl : '',
  box : {},
  route : 'SignIn',
  isSignedIn : false,
  users : {
    id:'',
    name : "",
    email: "",
    entries :0,
    joined:""
  }
}
class App extends React.Component{
  constructor(){
    super()
    this.state = initialState;
  }

  loadUser =(data)=>{
    this.setState({users:{
      id:data.id,
      name : data.name,
      email: data.email,
      entries :data.entries,
      joined:data.joined
    }})

  }
  calculateFaceLocation = (data) =>{
     const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
     const image = document.getElementById('imageInput');
     const width = Number(image.width);
     const height = Number(image.height);
     return {
     left: clarifaiFace.left_col * width,
     top : clarifaiFace.top_row * height,
     right : width - (clarifaiFace.right_col * width),
     bottom : height -(clarifaiFace.bottom_row * height)
     }
  }


displayFaceBox = (box) => {
   this.setState({box :box});
}

  onSearchChange= (event) =>{
    this.setState({input:event.target.value})
  }

  onButtonClick =() =>{
    this.setState({imageUrl :this.state.input});
    fetch('https://afternoon-earth-99700.herokuapp.com/imageUrl',{
      method : 'post' ,
      headers : {'Content-Type': 'application/json'},
      body : JSON.stringify({
        input : this.state.input
      })
    }).then(response => response.json())
      .then(response => {
        if(response) {
          fetch('https://afternoon-earth-99700.herokuapp.com/image',{
    method : 'put' ,
    headers : {'Content-Type': 'application/json'},
    body : JSON.stringify({
      id : this.state.users.id
    })
  })
  .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.users, { entries: count}))
            }).catch(console.log)
        }
        this.displayFaceBox(this.calculateFaceLocation(response))})
      .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
   if (route === 'signout') {
     this.setState(initialState)
   } else if (route === 'home') {
     this.setState({isSignedIn: true})
   }
   this.setState({route: route});
 }
  render(){
    const {isSignedIn,route,imageUrl,box,} = this.state;
     return (
      <div className="App">

         <Navbar isSignedIn= {isSignedIn} onRouteChange = {this.onRouteChange}/>
         <Particle/>
         { route === 'home' ?
         <div>
         <Logo/>
         <Rank name= {this.state.users.name} entries = {this.state.users.entries}/>  
         <ImageLinkForm
         onSearchChange = {this.onSearchChange}
         onButtonClick = {this.onButtonClick} />
         <FaceRecogination imageUrl = {imageUrl}
                           box = {box}/>
         </div>
         :(route === 'SignIn'?
         <SignIn loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>:
         <Register loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>
         )
          }
      </div>
    );
   }
  }

export default App;
