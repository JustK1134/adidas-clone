import React from 'react'


const dropdown_content_kid_feature = ['FEATURED','New Arrivals','This week\'s top sellers','_','Performance','Originals','Lego','Adicolor','Sportwear']
const dropdown_content_kid_youth_1 = ['YOUTH (8-16)','Boys Clothing', 'Girls Clothing','_', 'Boys Shoes','Girls Shoes']
const dropdown_content_kid_youth_2 = ['KIDS (4-8)','Boys Clothing', 'Girls Clothing','_', 'Boys Shoes','Girls Shoes']
const dropdown_content_kid_youth_3 = ['BABY & TODDLERS(1-4)','New Arrivals','Clothing','Shoes']
const dropdown_content_kid_sale = ['SALE','Shoes','All Clothing', 'Accessories']
const dropdown_content_kid_sport = ['SPORTS','Football','Running','Training','Golf']

const Navbar_dropdown_content_kid = () => {
  return (
    <div className='navbar-header-content-bot-categories-dropdown-content'>
        <div className='navbar-header-content-bot-categories-dropdown-content-top'>
            <div className='dropdown-content'>
                {dropdown_content_kid_feature.map((item)=>{
                    return <div>
                        <p>
                        {item}
                    </p>
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_kid_youth_1.map((item)=>{
                    return <div>
                        <p>
                        {item}
                    </p>
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_kid_youth_2.map((item)=>{
                    return <div>
                        <p>
                        {item}
                    </p>
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_kid_youth_3.map((item)=>{
                    return <div>
                        <p>
                        {item}
                    </p>
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_kid_sale.map((item)=>{
                    return <div>
                        <p>
                        {item}
                    </p>
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_kid_sport.map((item)=>{
                    return <div>
                        <p>
                        {item}
                    </p>
                    <div/>
                    </div>
                })}
            </div>
        </div>

        <div className='navbar-header-content-bot-categories-dropdown-content-bot'>
            <p>ALL KIDS</p>
            <p>ALL YOUTH</p>
            <p>ALL KIDS</p>
            <p>ALL BABIES</p>
            <p>ALL KID SALE</p>
            <p>ALL PRODUCTS</p>
        </div>

    </div>
  )
}

export default Navbar_dropdown_content_kid