import React from 'react'
import './CardProduct.css'
import {RxHeart} from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'




const CardProduct = ({image, price, product, categories}) => {
  let navigate =useNavigate()
  return (
    <div className='card' onClick={()=>{navigate('/shop/product/1')}}>
        <div className='card-heart'><RxHeart/></div>
        <img src = {image} alt ={product}/>
        
          


            <p className='card-price'>{price}$</p>
            <p className='card-product'>{product}</p>
            <p className='card-categories'>{categories}</p>

    </div>
    
  )
}
 
export default CardProduct