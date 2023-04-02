import React from 'react'
import './CardAd.css'

const CardAd = ({image, video, title, content}) => {
  return (
    <div className='cardAd'>
      <div className='cardAd-image'>
        {(video) ? 
        <video autoPlay muted loop>
          <source src = {video} type="video/mp4"/>
        </video>
        : <img src={image} />}
      </div>

      <div className='cardAd-content'>
        <h3 className='cardAd-content-title'>{title}</h3>
        <p className='cardAd-content-description'>{content}</p>
        <h4 className='cardAd-shopnow'>SHOP NOW</h4>
      </div>

    </div>
  )
}

export default CardAd