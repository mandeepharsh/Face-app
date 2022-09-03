import React from 'react';

const Navbar =  ({onRouteChange,isSignedIn}) => {

    if(isSignedIn) {return(
    <nav style = {{display :'flex' ,justifyContent : 'flex-end'}}>
      <p  onClick = {()=>onRouteChange('SignIn')}className = 'f3 link dim black underline pa3 pointer'> Sign out </p>

     </nav>);}
     else 
      {return (
     <nav style = {{display :'flex' ,justifyContent : 'flex-end'}}>
        <p  onClick = {()=>onRouteChange('SignIn')}className = 'f3 link dim black underline pa3 pointer'> Signin </p>
        <p  onClick = {()=>onRouteChange('Register')}className = 'f3 link dim black underline pa3 pointer'> register</p>
     </nav>);}
}




export default Navbar
