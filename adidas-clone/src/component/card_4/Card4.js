import React from 'react'
import './Card4.css'

const Card4 = ({image, title, content, video}) => {
  return (
    <div className='card4'>
      <div className='card4-image'>
        {(video) ? 
        <video autoPlay muted loop src = {video} type="video/mp4"/>

        : <img src={image} />}
      </div>

      <div className='card4-content'>
        <h3 className='card4-content-title'>{title}</h3>
        <p className='card4-content-description'>{content}</p>
        <h4 className='card4-shopnow'>SHOP NOW</h4>
      </div>
    </div>
  )
}

export default Card4