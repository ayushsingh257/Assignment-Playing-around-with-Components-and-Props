import "../styles/body.css"
import DataImages from "../ImageData/imageData"

import React from 'react'

function GalleryBody() {
  return (
    <div>
        {
          DataImages.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      </div>
  )
}

export default GalleryBody
