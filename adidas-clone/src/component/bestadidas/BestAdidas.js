import React from 'react'
import './BestAdidas.css'
import CardProduct2 from '../card_2/CardProduct2'
import { Slide } from 'react-slideshow-image'
import { useRef } from 'react'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const bestadidas_product_img_1 = 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb1316406e584892bdb3a991001bd46d_9366/F35543_01_standard.jpg'
const bestadidas_product_img_2 = 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/EG4958_01_standard.jpg'
const bestadidas_product_img_3 = 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/5ead264780e14befbd84ae760105da3b_9366/GX1979_01_standard.jpg'
const bestadidas_product_img_4 = 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/FX5502_01_standard.jpg'
const bestadidas_product_img_5 = 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c807f726ecb463ca5bcae8300ef9664_9366/GV9536_01_standard.jpg'


const BestAdidas = () => {
    const slideRef_4 = useRef()
  return (
    <div className='bestadidas'>
        <div className='bestadidas-title'>
            <h2>BEST OF ADIDAS</h2>
            <div className='interest-title-arrow'>
                <div className='interest-title-arrow-button' onClick={()=>slideRef_4.current.goBack()} ><IoIosArrowBack size='1.5rem'/></div>
                <div className='interest-title-arrow-button' onClick={()=>slideRef_4.current.goNext()}><IoIosArrowForward size='1.5rem'/></div>
            </div>
        </div>
        <div className='bestadidas-group-card'>
            <Slide ref={slideRef_4} arrows={false} autoplay={false} infinite={false}>
                <div className='bestadidas-card'>
                    <CardProduct2 image = {bestadidas_product_img_1} price='600,000' product='Adilette Aqua Slides' categories= 'Sportswear'/>
                    <CardProduct2 image = {bestadidas_product_img_2} price='2,600,000' product='SUPERSTART SHOES' categories= 'Originals'/>
                    <CardProduct2 image = {bestadidas_product_img_3} price='1,400,000' product='Adilette Ayoon Slides' categories= 'Originals'/>
                    <CardProduct2 image = {bestadidas_product_img_4} price='2,600,000' product='Stan Smith Shoes' categories= 'Originals'/>
                    <CardProduct2 image = {bestadidas_product_img_5} price='1,400,000' product='Adilette Ayoon Slides' categories= 'Originals'/>
                </div>
                <div className='bestadidas-card'>
                    <CardProduct2 image = {bestadidas_product_img_1} price='600,000' product='Adilette Aqua Slides' categories= 'Sportswear'/>
                    <CardProduct2 image = {bestadidas_product_img_1} price='600,000' product='Adilette Aqua Slides' categories= 'Sportswear'/>
                    <CardProduct2 image = {bestadidas_product_img_1} price='600,000' product='Adilette Aqua Slides' categories= 'Sportswear'/>
                    <CardProduct2 image = {bestadidas_product_img_1} price='600,000' product='Adilette Aqua Slides' categories= 'Sportswear'/>
                    <CardProduct2 image = {bestadidas_product_img_1} price='600,000' product='Adilette Aqua Slides' categories= 'Sportswear'/>
                </div>
            </Slide>
        </div>
    </div>
  )
}

export default BestAdidas