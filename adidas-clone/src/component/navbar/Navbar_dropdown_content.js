import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const dropdown_content_men_feature = ['FEATURED','New Arrivals','Only at adidas', 'Member exclusive','This week\'s top sellers','_','Ultraboots', 'Stan Smith','Superstar','Adilette','Adizero']
const dropdown_content_men_shoe = ['SHOES','New Arrivals','Originals','Football','Running','Training','Essentials','Outdoor', 'Basketball','Slides','Sportwear']
const dropdown_content_men_clothing = ['CLOTHING','T-SHIRTS & Polos','Jerseys','Hoodies & Jackets','Sweatshirts & Tracksuits','Pants','Tights', 'Shorts','Compression Layers','Sportwears']
const dropdown_content_men_accessories = ['ACCESSORIES','All Bags','Backpacks','Training Bags','Socks', 'Caps & Headwears']
const dropdown_content_men_sale = ['SALE','Shoes','All Clothing', 'Accessories']
const dropdown_content_men_sport = ['SPORTS','Football','Running','Training','Basketball','Swiming','Golf','Tennis']


const Navbar_dropdown_content_men = () => {
  return (
    <div className='navbar-header-content-bot-categories-dropdown-content'>
        <div className='navbar-header-content-bot-categories-dropdown-content-top'>
            <div className='dropdown-content'>
                {dropdown_content_men_feature.map((item)=>{
                    return <div>
                        <p>
                        <Link to ='/shop' className='click-able'>{item}</Link>
                    </p>
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_men_shoe.map((item)=>{
                    return <div>
                        <p>
                        <Link to ='/shop/category/Men-Shoes' className='click-able'>{item}</Link>
                    </p>
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_men_clothing.map((item)=>{
                    return <div>
                        <p>
                        <Link to ='/shop/category/Men-Clothing' className='click-able'>{item}</Link>
                    </p>
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_men_accessories.map((item)=>{
                    return <div>
                        <p>
                        <Link to ='/shop/category/Men-Accessory' className='click-able'>{item}</Link>
                    </p>
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_men_sale.map((item)=>{
                    return <div>
                        <p>
                        <Link to ='/shop' className='click-able'>{item}</Link>
                    </p>
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_men_sport.map((item)=>{
                    return <div>
                        <p>
                        <Link to ='/shop/category/Men-Sport' className='click-able'>{item}</Link>
                    </p>
                    <div/>
                    </div>
                })}
            </div>
        </div>

        <div className='navbar-header-content-bot-categories-dropdown-content-bot'>
            <p><Link to ='/shop' className='click-able'>ALL MEN's</Link></p>
            <p><Link to ='/shop/category/Men-Shoes' className='click-able'>ALL MEN's Shoes</Link></p>
            <p><Link to ='/shop/category/Men-Clothing' className='click-able'>ALL MEN's Clothing</Link></p>
            <p><Link to ='/shop/category/Accessory' className='click-able'>ALL MEN's Accessories</Link></p>
            <p><Link to ='/shop' className='click-able'>ALL MEN's</Link></p>
            <p><Link to ='/shop/category/Men-Sport' className='click-able'>ALL MEN's Sports</Link></p>
        </div>
    </div>
  )
}

export default Navbar_dropdown_content_men

