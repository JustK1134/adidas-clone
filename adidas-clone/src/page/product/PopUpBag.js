import React from 'react'
import './ProductTemplate.css'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import CardProduct2 from '../../component/card_2/CardProduct2'
import {RxCross1} from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'

const PopUpBag = ({size,image, productname, price, color, cart}) => {
  return (
    <div className='pop-up-bag-content'>
        <div className='pop-up-bag-close' onClick={()=>document.getElementById('pop-up-cart').style.display = 'none'}><RxCross1 size='2rem'/></div>
        <div className='pop-up-bag-content-header'>
            <h5>successfully add to bag!</h5>
        </div>
        <div className='pop-up-bag-content-main'> 
            <div className='pop-up-bag-content-product-info'>
                <img src = {image} alt='bag-item'/>
                <div className='pop-up-bag-content-product-info-text'>
                    <h2>{productname}</h2>
                    <p>{price}$</p>
                    <p>Color: {color}</p>
                    <p>Size: {size}</p>
                    <p>Quantity: 1</p>
                </div>
            </div>
            <div className='pop-up-bag-total-price'>
                <p>Your Bag</p>
                <p>{cart.total_item} items</p>
                <div className='pop-up-bag-total-price-info'><p>Total Product Cost:</p> <p> {cart.total_price} $</p> </div>
                <div className='pop-up-bag-total-price-info'><p>Total Delivery Cost:</p> <p> 0 $</p> </div>
                <div className='pop-up-bag-total-price-info'><p>Total:</p> <p> {cart.total_price} $</p> </div>
                <p>(inclusive of tax)</p>
                <Link className='pop-up-bag-link' to='/cart'>
                    <button className='pop-up-bag-button-viewbag'>
                        <p>VIEW BAG</p>
                        <div className='button-arrow'>
                            <HiOutlineArrowNarrowRight size='3rem'  />
                        </div>
                    </button>
                </Link>
                <Link className='pop-up-bag-link' to='/checkout'>
                    <button className='pop-up-bag-button-viewbag' id='hello' style={{backgroundColor:'black', color:'white'}}>
                            <p style={{color:'white', textDecoration:'underline', }}>CHECK OUT</p>
                            <div className='button-arrow'>
                                <HiOutlineArrowNarrowRight size='3rem'  />
                            </div>
                    </button>
                </Link>
            </div>
        </div>
 
        <div className='pop-up-bag-product-matchup'>
            <p className='pop-up-bag-product-matchup-title'>These will match perfectly</p>
            <div className='pop-up-bag-product-matchup-image' >
                <div onClick={()=>{console.log('hello')}}> <CardProduct2 image = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c6ae91f16354f0a9041a9d300d8884e_9366/EE1151_03_standard.jpg" price='350,000' product='Sock' categories= 'Women Originals' /></div>
                <div onClick={()=>{console.log('hello')}}> <CardProduct2 image = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c6ae91f16354f0a9041a9d300d8884e_9366/EE1151_03_standard.jpg" price='350,000' product='Sock' categories= 'Women Originals' /></div>
                <div onClick={()=>{console.log('hello')}}> <CardProduct2 image = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c6ae91f16354f0a9041a9d300d8884e_9366/EE1151_03_standard.jpg" price='350,000' product='Sock' categories= 'Women Originals' /></div>
                
            </div>
        </div>
    </div>
  )
}

export default PopUpBag