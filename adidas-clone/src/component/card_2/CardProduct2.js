import React from 'react'
import './CardProduct2.css'
import {RxHeart} from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'

const CardProduct2 = ({image, price, product, categories}) => {
  let navigate = useNavigate()
  return (
    <div className='card2' onClick={()=>{navigate('/shop/product/1')}}>
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