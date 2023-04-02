import React from 'react'
import CardProduct2 from '../card_2/CardProduct2'
import './New_arrivals.css'

const member_product_6 = "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/166ffc2a30fc471ca515af410126b4e2_9366/adidas-x-marimekko-pocket-tee.jpg"

const NaMember = ({page}) => {
  return (page === '1') ? 
(
        <div className='new_arrivals-card'>
            <CardProduct2 image = {member_product_6} price='2,000,000' product='adidas Astir Sandals' categories= 'Women Originals' />
            <CardProduct2 image = {member_product_6} price='2,000,000' product='adidas Astir Sandals' categories= 'Women Originals'/>
            <CardProduct2 image = {member_product_6} price='1,400,000' product='adilette Ayoon Slides' categories= 'Women Originals'/>
            <CardProduct2 image = {member_product_6} price='2,500,000' product='Forum Low Shoes' categories= 'Women Originals'/>
            <CardProduct2 image = {member_product_6} price='2,600,000' product='Superstar Shoes' categories= 'Women Originals'/>
        </div>
  ) :(
        <div className='new_arrivals-card'>
            <CardProduct2 image = {member_product_6} price='2,600,000' product='Stan Smith Vegan Shoes' categories= 'Women Originals' />
            <CardProduct2 image = {member_product_6} price='2,300,000' product='Rivalry Low 86 Shoes' categories= 'Women Originals'/>
            <CardProduct2 image = {member_product_6} price='5,000,000' product='NMD_S1 Shoes' categories= 'Women Originals'/>
            <CardProduct2 image = {member_product_6} price='2,600,000' product='Superstar Hanami Shoes' categories= 'Women Originals'/>
            <CardProduct2 image = {member_product_6} price='2,800,000' product='adidas x Marimekko Superstar Shoes' categories= 'Women Originals'/>
        </div> 
  )
}

export default NaMember