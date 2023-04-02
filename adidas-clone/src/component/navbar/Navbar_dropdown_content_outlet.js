import React from 'react'


const dropdown_content_outlet_brand = ['BRANDS','Originals','Running','Football','Golf']
const dropdown_content_outlet_men = ['ALL Men\'s', 'Shoes','Slides','All Clothing', 'T-Shirts & Polos','Shorts & Pants','Accessories']
const dropdown_content_outlet_women = ['ALL Women\'s', 'Shoes','Slides','All Clothing', 'T-Shirts & Polos','Shorts & Pants','Accessories']
const dropdown_content_outlet_kid = ['KIDS', 'All kids','Shoes','Clothing', 'Accessories','0-4 years old','4-8 years old','8-16 years old']

const Navbar_dropdown_content_outlet = () => {
  return (
    <div className='navbar-header-content-bot-categories-dropdown-content'>
        <div className='navbar-header-content-bot-categories-dropdown-content-top'>
            <div className='dropdown-content'>
                {dropdown_content_outlet_brand.map((item)=>{
                    return <div>
                        <p>
                        {item}
                    </p>
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_outlet_men.map((item)=>{
                    return <div>
                        <p>
                        {item}
                    </p>
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_outlet_women.map((item)=>{
                    return <div>
                        <p>
                        {item}
                    </p>
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_outlet_kid.map((item)=>{
                    return <div>
                        <p>
                        {item}
                    </p>
                    <div/>
                    </div>
                })}
            </div>
        </div>

    </div>
  )
}

export default Navbar_dropdown_content_outlet