import React, { useState } from 'react'
import './Card5.css'
import {RxHeart} from 'react-icons/rx'
import { Slide } from 'react-slideshow-image'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';


const Card5 = ({product, price, sport, description, main_image, secondary_image, mainlink, slider_image}) => {
    const slideRef_6 = useRef()
    const [showImageSlider, setShowImageSlider] = useState(false)
    const [imageSlider, setImageSlider] = useState(secondary_image)
    let navigate = useNavigate()

  return (
    <div className='card5'>
        <div className='card5-hidden-card'>
            <div className='card5-hidden-image'>
                {showImageSlider && <img className='card5-hidden-image-slider-when-hover' src={imageSlider} alt=''/>}
                <img onClick={()=>{navigate(mainlink)}} className='card5-secondary-image' src = {secondary_image} alt ={product}></img>
                {slider_image[0].small_img !== 'None' &&
                <div className='card5-hidden-image-slider'>
                    <Slide ref={slideRef_6} autoplay={false} slidesToShow={6} infinite={true} arrows={slider_image.length > 5 ? true : false} className='slider'>  
                        {slider_image.map((item)=>{return (
                            <div className='card5-hidden-image-slider-small' onMouseOver={()=>{setShowImageSlider(true); setImageSlider(item.big_img)}} onMouseOut={()=>{setShowImageSlider(false); setImageSlider(secondary_image)}}>
                                <img onClick={()=>{navigate(item.small_link)}} src={item.small_img} className='small' alt={item.small_img} id ={item.small_img} />
                            </div>
                        )})}
                    </Slide> 
                </div>}
            </div>
            <div className='card5-hidden-content'>
                <p className='card5-hidden-product'>{product}</p>
                <p className='card5-hidden-sport'>{sport}</p>
                <p className='card5-hidden-description'>{description}</p>
            </div>
        </div> 


        <div className='card5-heart'><RxHeart/></div>
        <div className='card5-image'>
            <img className='card5-main-image' src = {main_image} alt ={product}></img>
        </div>
        <div className='card5-content'>
            <p className='card5-price'>{price}$</p>
            <p className='card5-product'>{product}</p>
            <p className='card5-sport'>{sport}</p>
            <p className='card5-description'>{description}</p>
        </div>
    </div>
    
  )
}

export default Card5