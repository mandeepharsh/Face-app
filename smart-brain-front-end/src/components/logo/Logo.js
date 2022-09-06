import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css'

const Logo = ()=>{
  return (
    <div className = '  ma4 mt0  '>
     <Tilt className = ' br2 Tilt shadow-2  ' style={{ height: 150, width: 150 } }>
        <div className= 'pa3' >
         <img  className = 'pt2'  src={brain} alt="Logo"/>
       </div>
     </Tilt>
    </div>
  )
}

export default Logo
