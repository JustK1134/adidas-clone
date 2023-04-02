import React from 'react'
import CardProduct2 from '../card_2/CardProduct2'
import './New_arrivals.css'


const RD_product_1 = "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/caa81aee929343349898af5100c77bc7_9366/adidas_x_Marimekko_Aqualette_Ocean_Clogs_White_HP6730_01_standard.jpg"
const RD_product_2 = "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/753c36f24e1c4e5fb218af8c00fbc546_9366/RapidaSport_Bounce_Marimekko_Running_Elastic_Lace_Top_Strap_Shoes_White_H06362_01_standard.jpg"
const RD_product_3 = "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/1013e152c01c4551b87caf8e012a5478_9366/Stan_Smith_Shoes_White_HP9656_01_standard.jpg"
const RD_product_4 = "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/321c32effa674084ad06af8e012ad38c_9366/Forum_Bonega_Shoes_White_HP9781_01_standard.jpg"
const RD_product_5 = "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/da58bf7d32634753bcd8af8e012b49f2_9366/Adi2000_X_Shoes_White_HQ4507_01_standard.jpg"
const RD_product_6 = "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/166ffc2a30fc471ca515af410126b4e2_9366/adidas-x-marimekko-pocket-tee.jpg"


const NaReleaseDate = ({page}) => {

  return (page === '1') ? 
(
        <div className='new_arrivals-card'>
            <CardProduct2 image = {RD_product_1} price='2,000,000' product='adidas Astir Sandals' categories= 'Women Originals' />
            <CardProduct2 image = {RD_product_2} price='2,000,000' product='adidas Astir Sandals' categories= 'Women Originals'/>
            <CardProduct2 image = {RD_product_3} price='1,400,000' product='adilette Ayoon Slides' categories= 'Women Originals'/>
            <CardProduct2 image = {RD_product_4} price='2,500,000' product='Forum Low Shoes' categories= 'Women Originals'/>
            <CardProduct2 image = {RD_product_5} price='2,600,000' product='Superstar Shoes' categories= 'Women Originals'/>
        </div>
  ) :(
        <div className='new_arrivals-card'>
            <CardProduct2 image = {RD_product_6} price='2,600,000' product='Stan Smith Vegan Shoes' categories= 'Women Originals' />
            <CardProduct2 image = {RD_product_6} price='2,300,000' product='Rivalry Low 86 Shoes' categories= 'Women Originals'/>
            <CardProduct2 image = {RD_product_6} price='5,000,000' product='NMD_S1 Shoes' categories= 'Women Originals'/>
            <CardProduct2 image = {RD_product_6} price='2,600,000' product='Superstar Hanami Shoes' categories= 'Women Originals'/>
            <CardProduct2 image = {RD_product_6} price='2,800,000' product='adidas x Marimekko Superstar Shoes' categories= 'Women Originals'/>
        </div> 
  )
}

export default NaReleaseDate