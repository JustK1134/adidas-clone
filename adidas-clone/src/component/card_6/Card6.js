import React from 'react'
import './Card6.css'



const Card6 = ({product, color, size, price, image, total_price}) => {
  return (
    <div className='card6'>
        <img className='card6-image' src = {image}/>
        <div className='card6-content'>
            <p>{product}</p>
            <p>color: {color}</p>
            <p>price: {price}$</p>
            <p>Size: {size}</p>

        </div>
        <p className='card6-price'>total:{total_price}$</p>


    </div>
  )
}

export default Card6