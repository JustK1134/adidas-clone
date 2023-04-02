import React, { useRef } from 'react'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import './Interest.css'
import CardProduct from '../card/CardProduct';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';




const interest_product_1 = "https://assets.adidas.com/images/w_600,f_auto,q_auto/195b8cd218f849fc9166ae7b012d370c_9366/Harden_Vol._6_Shoes_Yellow_GV9586_01_standard.jpg"
const interest_product_2 = "https://assets.adidas.com/images/w_600,f_auto,q_auto/ab41ecad0fd343c69a42ae5f0177b369_9366/Harden_Vol._6_Shoes_Beige_GW9030_01_standard.jpg"
const interest_product_3 = "https://assets.adidas.com/images/w_600,f_auto,q_auto/ffc90aecd24e49028e89ae79003f65ae_9366/Harden_Vol._6_Shoes_Black_GW1712_01_standard.jpg"
const interest_product_4 = "https://assets.adidas.com/images/w_600,f_auto,q_auto/b9bd6dc6bbb84a8faa3dae8400320b3e_9366/Ultra_4DFWD_Shoes_Black_GX6632_01_standard.jpg"


const Interest = () => {
    const slideRef = useRef();

  return (
    <div className='interest'>
        <div className='interest-title'>
            <h2>Still Interested?</h2> 
            <div className='interest-title-arrow'>
                <div className='interest-title-arrow-button' onClick={()=>slideRef.current.goBack()}><IoIosArrowBack size='1.5rem'/></div>
                <div className='interest-title-arrow-button' onClick={()=>slideRef.current.goNext()}><IoIosArrowForward size='1.5rem'/></div>
            </div>
        </div>
        <div className='interest-card'>
            <Slide ref ={slideRef} arrows={false} slidesToScroll = {1} slidesToShow={1} autoplay={false}  >
                <div className='interest-card-group'>
                    <CardProduct image = {interest_product_1} price = '2,400,000' product = 'Harden Vol 6 Shoes' categories = 'Performance' />
                    <CardProduct image = {interest_product_2} price = '2,400,000' product = 'Harden Vol 6 Shoes' categories = 'Performance'/>
                    <CardProduct image = {interest_product_3} price = '2,400,000' product = 'Harden Vol 6 Shoes' categories = 'Performance'/>
                    <CardProduct image = {interest_product_4} price = '6,000,000' product = 'Ultra 4DFWD Shoes' categories = 'Performance'/>
                </div>
                <div className='interest-card-group'>
                    <CardProduct image = {interest_product_1} price = '2,400,000' product = 'Harden Vol 6 Shoes' categories = 'Performance' />
                    <CardProduct image = {interest_product_2} price = '2,400,000' product = 'Harden Vol 6 Shoes' categories = 'Performance'/>
                    <CardProduct image = {interest_product_3} price = '2,400,000' product = 'Harden Vol 6 Shoes' categories = 'Performance'/>
                    <CardProduct image = {interest_product_4} price = '6,000,000' product = 'Ultra 4DFWD Shoes' categories = 'Performance'/>
                </div>
            </Slide>
        </div>
    </div>
  )
}

export default Interest