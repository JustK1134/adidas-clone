import React from 'react'
import './Footer.css'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {BsCCircle} from 'react-icons/bs'

const footer_icon_facebook = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/NEWfacebook_image_footer_tcm337-875964.png"
const footer_icon_instagram = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/NEWinstagram_logo-footer_tcm337-875968.png"
const footer_icon_twitter = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/NEWBlack-icon-Twitter-logo-transparent-PNG_tcm337-875966.png"
const footer_icon_pinterest = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/NEWpinterest_logo_footer_tcm337-875965.png"
const footer_icon_tiktok = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/NEWtiktok-black-share-icon1189_tcm337-875969.png"
const footer_icon_youtube = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/NEWyoutube_icon_footer_tcm337-875967.png"
const footer_icon_bo_cong_thuong = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/vn_footer_logo_tcm212-852364.jpg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <h1>BECOME A MEMBER & GET 15% OFF</h1>
            <button>
                <p>SIGN UP FOR FREE</p>
                <div><HiOutlineArrowNarrowRight size='2rem'/></div>
            </button>
        </div>
        <div className='footer-middle'>
            <div className='footer-middle-category'>
                <h2>PRODUCTS</h2>
                <p>Shoes</p>
                <p>Clothing</p>
                <p>Accessories</p>
                <p>New Arrivals</p>
                <p>Release Dates</p>
                <p>Top Sellers</p>
                <p>Member Exclusive</p>
                <p>Member Exclusive</p>
            </div>

            <div className='footer-middle-category'>
                <h2>SPORTS</h2>
                <p>Running</p>
                <p>Golf</p>
                <p>Gym & Training</p>
                <p>Football</p>
                <p>Basketball</p>
                <p>Tennis</p>
                <p>Outdoor</p>
                <p>Swimming</p>
            </div>

            <div className='footer-middle-category'>
                <h2>COLLECTION</h2>
                <p>IVY PARK</p>
                <p>Pharrell Williams</p>
                <p>Ultraboost</p>
                <p>PureBoots</p>
                <p>Predators</p>
                <p>X</p>
                <p>Copa</p>
                <p>Stan Smith</p>
            </div>
            <div className='footer-middle-category'>
                <h2>COMPANY INFO</h2>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press</p>
                <p>adidas Blog</p>
            </div>

            <div className='footer-middle-category'>
                <h2>SUPPORT</h2>
                <p>Help & Customer Service</p>
                <p>Store Locator</p>
                <p>Size Chart</p>
                <p>Payment</p>
                <p>Delivery</p>
                <p>Return & Refund</p>
                <p>Promotion</p>
                <p>Sitemap</p>
                <img className='bocongthuong' src={footer_icon_bo_cong_thuong} alt ='bocongthuong'/>
            </div>

            <div className='footer-middle-category'>
                <h2>FOLLOW US</h2>
                <img src={footer_icon_facebook} alt='icon-facebook'/>
                <img src={footer_icon_instagram} alt='icon-insta'/>
                <img src={footer_icon_twitter} alt='icon-twitter'/>
                <img src={footer_icon_pinterest} alt='icon-pinter'/>
                <img src={footer_icon_tiktok} alt='icon-tiktok'/>
                <img src={footer_icon_youtube} alt='icon-youtube'/>
            </div>
        </div>
        <div className='footer-bottom'>
            <p>Cookie Settings</p>
            <p>Private Policy</p>
            <p>Terms and Conditions</p>
            <p>Imprint</p>
            <p><BsCCircle/>2020 adidas Vietnam Company Limited</p>
        </div>
    </div>
  )
}

export default Footer