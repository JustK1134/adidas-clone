import React from 'react'
import './CardProduct2.css'
import {RxHeart} from 'react-icons/rx'

const CardProduct2 = ({image, price, product, categories}) => {
  return (
    <div className='card2'>
        <div className='card2-heart'><RxHeart/></div>
        <img src = {image} alt ={product}></img>
        <div className='card2-content'>
            <p className='card2-price'>{price}$</p>
            <p className='card2-product'>{product}</p>
            <p className='card2-categories'>{categories}</p>
        </div>
    </div>
    
  )
}

export default CardProduct2