import React from 'react'
import CardProduct2 from '../card_2/CardProduct2'
import './New_arrivals.css'

const trending_product_1 = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb1316406e584892bdb3a991001bd46d_9366/F35543_01_standard.jpg"
const trending_product_2 = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/EG4958_01_standard.jpg"
const trending_product_3 = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/5ead264780e14befbd84ae760105da3b_9366/GX1979_01_standard.jpg"
const trending_product_4 = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c807f726ecb463ca5bcae8300ef9664_9366/GV9536_01_standard.jpg"
const trending_product_5 = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b47d77eba6f945ea8dabac210127b11e_9366/FX5501_01_standard.jpg"

const NaTrending = ({page}) => {
  return page === '1' ? 
(
        <div className='new_arrivals-card'>
            <CardProduct2 image = {trending_product_1} price='2,000,000' product='adidas Astir Sandals' categories= 'Women Originals' />
            <CardProduct2 image = {trending_product_2} price='2,000,000' product='adidas Astir Sandals' categories= 'Women Originals'/>
            <CardProduct2 image = {trending_product_3} price='1,400,000' product='adilette Ayoon Slides' categories= 'Women Originals'/>
            <CardProduct2 image = {trending_product_4} price='2,500,000' product='Forum Low Shoes' categories= 'Women Originals'/>
            <CardProduct2 image = {trending_product_5} price='2,600,000' product='Superstar Shoes' categories= 'Women Originals'/>
        </div>
  ) :(
        <div className='new_arrivals-card'>
            <CardProduct2 image = {trending_product_1} price='2,600,000' product='Stan Smith Vegan Shoes' categories= 'Women Originals' />
            <CardProduct2 image = {trending_product_1} price='2,300,000' product='Rivalry Low 86 Shoes' categories= 'Women Originals'/>
            <CardProduct2 image = {trending_product_1} price='5,000,000' product='NMD_S1 Shoes' categories= 'Women Originals'/>
            <CardProduct2 image = {trending_product_1} price='2,600,000' product='Superstar Hanami Shoes' categories= 'Women Originals'/>
            <CardProduct2 image = {trending_product_1} price='2,800,000' product='adidas x Marimekko Superstar Shoes' categories= 'Women Originals'/>
        </div> 
  )
}

export default NaTrending