import React from 'react'
import CardProduct2 from '../card_2/CardProduct2'
import './New_arrivals.css'

const new_arrivals_product_1 = "https://assets.adidas.com/images/w_600,f_auto,q_auto/df21d2da153f447a8c40af9b00ed91b5_9366/adidas_Astir_Sandals_Brown_HP9571_01_standard.jpg"
const new_arrivals_product_2 = "https://assets.adidas.com/images/w_600,f_auto,q_auto/f70361a6bb664c33ba24af8d008336a7_9366/adidas_Astir_Sandals_White_HP9570_01_standard.jpg"
const new_arrivals_product_3 = "https://assets.adidas.com/images/w_600,f_auto,q_auto/a83a298f23f047588233af9c009f63cd_9366/Adilette_Ayoon_Slides_Green_FZ6411_01_standard.jpg"
const new_arrivals_product_4 = "https://assets.adidas.com/images/w_600,f_auto,q_auto/44f156eeb7a84125ada7af8d0080cc35_9366/Forum_Low_Shoes_White_FZ6463_01_standard.jpg"
const new_arrivals_product_5 = "https://assets.adidas.com/images/w_600,f_auto,q_auto/394853d9113341c4829faf9c011d9cd1_9366/Superstar_Shoes_White_HQ1906_01_standard.jpg"

const new_arrivals_product_6 = "https://assets.adidas.com/images/w_600,f_auto,q_auto/850b7cdf4c974c41aa12af8e00c3a24e_9366/Stan_Smith_Vegan_Shoes_Pink_HQ6669_01_standard.jpg"
const new_arrivals_product_7 = "https://assets.adidas.com/images/w_600,f_auto,q_auto/dab1151d49324c57ae8eaf23012c028a_9366/Rivalry_Low_86_Shoes_White_FZ6334_01_standard.jpg"
const new_arrivals_product_8 = "https://assets.adidas.com/images/w_600,f_auto,q_auto/cfea2404919c4578998faf8c012ba6fc_9366/NMD_S1_Shoes_Orange_ID1653_01_standard.jpg"
const new_arrivals_product_9 = "https://assets.adidas.com/images/w_600,f_auto,q_auto/666a04f1338045568e39af9d00032f77_9366/Superstar_Hanami_Shoes_White_IG9648_01_standard.jpg"
const new_arrivals_product_10 = "https://assets.adidas.com/images/w_600,f_auto,q_auto/c61a24587171400fba8daf8800e9a5c3_9366/adidas_x_Marimekko_Superstar_Shoes_White_HP9779_01_standard.jpg"


const NaArrivals = ({page}) => {
  return page === '1' ? 
(
        <div className='new_arrivals-card'>
            <CardProduct2 image = {new_arrivals_product_1} price='2,000,000' product='adidas Astir Sandals' categories= 'Women Originals' />
            <CardProduct2 image = {new_arrivals_product_2} price='2,000,000' product='adidas Astir Sandals' categories= 'Women Originals'/>
            <CardProduct2 image = {new_arrivals_product_3} price='1,400,000' product='adilette Ayoon Slides' categories= 'Women Originals'/>
            <CardProduct2 image = {new_arrivals_product_4} price='2,500,000' product='Forum Low Shoes' categories= 'Women Originals'/>
            <CardProduct2 image = {new_arrivals_product_5} price='2,600,000' product='Superstar Shoes' categories= 'Women Originals'/>
        </div>
  ) :(
        <div className='new_arrivals-card'>
            <CardProduct2 image = {new_arrivals_product_6} price='2,600,000' product='Stan Smith Vegan Shoes' categories= 'Women Originals' />
            <CardProduct2 image = {new_arrivals_product_7} price='2,300,000' product='Rivalry Low 86 Shoes' categories= 'Women Originals'/>
            <CardProduct2 image = {new_arrivals_product_8} price='5,000,000' product='NMD_S1 Shoes' categories= 'Women Originals'/>
            <CardProduct2 image = {new_arrivals_product_9} price='2,600,000' product='Superstar Hanami Shoes' categories= 'Women Originals'/>
            <CardProduct2 image = {new_arrivals_product_10} price='2,800,000' product='adidas x Marimekko Superstar Shoes' categories= 'Women Originals'/>
        </div> 
  )
}

export default NaArrivals

   