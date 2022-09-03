import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onSearchChange ,onButtonClick})=>{
  return (
    <div>
       <p className= ' f4'>
         {'This magic brain will detect faces in your picture.Giveit a try.'}
       </p>
         <div className = 'center '>
           <div className = ' center form pa4 br3 shadow-5'>
              <input className = 'f4 pa2 w-70 center ' type="text" onChange = {onSearchChange}/>
              <button className = 'w-30 grow   f4 link ph3 pv2 dib white bg-light-purple'
              onClick = {onButtonClick}>
              Detect
              </button>
           </div>
         </div>
    </div>
  )
}

export default ImageLinkForm
