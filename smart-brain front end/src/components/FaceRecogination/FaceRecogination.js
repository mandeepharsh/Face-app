import React from 'react';
import './FaceRecogination.css'

const FaceRecogination = ({imageUrl,box})=>{
  return (
    <div className = "center mt2" >
     <div className = "absolute">
      <img id = 'imageInput'alt = '' src={imageUrl} height='auto' width='500px'/ >
      <div className = "boundry" style = {{top : box.top , right: box.right , left: box.left , bottom: box.bottom}}></div>
      </div>
    </div>

  )
}

export default FaceRecogination
