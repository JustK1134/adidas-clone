import React from 'react'
import './CardProduct.css'
import {RxHeart} from 'react-icons/rx'




const CardProduct = ({image, price, product, categories}) => {
  return (
    <div className='card'>
        <div className='card-heart'><RxHeart/></div>
        <img src = {image} alt ={product}>
          
        </img>

            <p className='card-price'>{price}$</p>
            <p className='card-product'>{product}</p>
            <p className='card-categories'>{categories}</p>

    </div>
    
  )
}
 
export default CardProduct