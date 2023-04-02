import React from 'react'
import './Theme.css'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'


const brand_image_2 = "https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/running-ss23-ultraboost-light-global-launch-hp-masthead-large-d_sw5pet.mp4"

const Theme = () => {
  return (
    <div className='theme-container'>
      <div className='theme_1'>
        <div className='theme-poster-container_1'>
            <h2>ADIDAS X MARIMEKO</h2>
            <p>Celebrating self-expression through movement and iconic prints</p>
            <button>
              <p>SHOP NOW</p>
              <div className='button-arrow'>
                <HiOutlineArrowNarrowRight size='1.5em'  />
              </div>
            </button>
        </div>
      </div>
 
      <div className='theme_2'>
        <video autoPlay muted loop >
              <source src={brand_image_2} type = "video/mp4"/>
        </video>
        <div className='theme-poster-container_2'>
            <h2>EPIC ENERGY. <br/>LIGHTEST EVER.</h2>
            <p>Our lightest Ultraboost ever.</p>
            <button>
              <p>SHOP MEN</p>
              <div className='button-arrow'>
                <HiOutlineArrowNarrowRight size='1.5em' color='white'  />
              </div>
            </button>
            <button>
              <p>SHOP WOMEN</p>
              <div className='button-arrow'>
                <HiOutlineArrowNarrowRight size='1.5em' color='white'  />
              </div>
            </button>
        </div>
      </div>
    </div>

  )
}

export default Theme