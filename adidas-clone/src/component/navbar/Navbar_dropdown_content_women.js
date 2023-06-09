import React from 'react'
import { Link } from 'react-router-dom'

const dropdown_content_women_feature = ['FEATURED','New Arrivals','Only at adidas', 'Member exclusive','This week\'s top sellers','_','Ultraboots', 'Stan Smith','Superstar','Adilette','Adizero']
const dropdown_content_women_shoe = ['SHOES', 'Originals','Running','Training', 'Slides','Essential','Tennis','Sportwear']
const dropdown_content_women_clothing = ['CLOTHING','T-Shirts & Tops','Sweatshirts & Tracksuits','Sport Bras', 'Jerseys']
const dropdown_content_women_accessories = ['ACCESSORIES','All Bags','Backpacks','Training Bags','Socks', 'Caps & Headwears']
const dropdown_content_women_sale = ['SALE','Shoes','All Clothing', 'Accessories']
const dropdown_content_women_sport = ['SPORTS','Football','Running','Training','Basketball','Swiming','Golf','Tennis']

const Navbar_dropdown_content_women = () => {
  return (
    <div className='navbar-header-content-bot-categories-dropdown-content'>
        <div className='navbar-header-content-bot-categories-dropdown-content-top'>
            <div className='dropdown-content'>
                {dropdown_content_women_feature.map((item)=>{
                    return <div>
                        <p>
                        <Link to ='/shop/category/WOMEN' className='click-able'>{item}</Link>
                    </p>
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_women_shoe.map((item)=>{
                    return <div>
                        <p>
                        <Link to ='/shop/category/Women-Shoes' className='click-able'>{item}</Link>
                    </p>
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_women_clothing.map((item)=>{
                    return <div>
                        <p>
                        <Link to ='/shop/category/Women-Clothing' className='click-able'>{item}</Link>
                    </p>
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_women_accessories.map((item)=>{
                    return <div>
                        <p>
                        <Link to ='/shop/category/Women-Accessory' className='click-able'>{item}</Link>
                    </p>
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_women_sale.map((item)=>{
                    return <div>
                        <p>
                        <Link to ='/shop/category/WOMEN' className='click-able'>{item}</Link>
                    </p>
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_women_sport.map((item)=>{
                    return <div>
                        <p>
                        <Link to ='/shop/category/Women-Sport' className='click-able'>{item}</Link>
                    </p>
                    <div/>
                    </div>
                })}
            </div>
        </div>

        <div className='navbar-header-content-bot-categories-dropdown-content-bot' >
            <p><Link to ='/shop/category/WOMEN' className='click-able'>ALL WOMEN's</Link></p>
            <p><Link to ='/shop/category/Women-Shoes' className='click-able'>ALL WOMEN's Shoes</Link></p>
            <p><Link to ='/shop/category/Women-Clothing' className='click-able'>ALL WOMEN's Clothing</Link></p>
            <p><Link to ='/shop/category/Women-Clothing' className='click-able'>ALL WOMEN's Accessories</Link></p>
            <p><Link to ='/shop/category/WOMEN' className='click-able'>ALL WEMEN's</Link></p>
            <p><Link to ='/shop/category/Women-Sport' className='click-able'>ALL WOMEN's Sports</Link></p>
        </div>

    </div>
  )
}

export default Navbar_dropdown_content_women