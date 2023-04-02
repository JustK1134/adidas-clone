import React from 'react'

const dropdown_content_brands_originals_img = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/Originals_Brand_Nav_Image_tcm212-843840.jpg"
const dropdown_content_brands_sportwear_img = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/TIRO_SUIT_UP_AVRYN_SS23_Onsite_Navigator_tcm212-927866.jpg"
const dropdown_content_brands_plastic_img = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/nav-brand-desktop-clp-endplasticwaste-multimedia_tcm212-762059.jpeg"

const dropdown_content_brands_originals = ['ORIGINALS',dropdown_content_brands_originals_img,'Shoes','Clothing','Accessories','New Arrivals', 'Stan Smith', 'ZX', 'Superstar', 'NMD']
const dropdown_content_brands_sportwear = ['SPORTWEAR',dropdown_content_brands_sportwear_img,'Shoes','Clothing','Accessories','Ultraboots DNA', 'Adillete','Essential']
const dropdown_content_brands_plastic = ['END PLASTIC WASTE',dropdown_content_brands_plastic_img,'Parley','Vegan Shoes', 'Made With Recycle Content', 'Organic Cotton Clothing','Sustainable Sportswear','Run For The Ocean','LEARN MORE']

const Navbar_dropdown_content_brand = () => {
  return (
    <div className='navbar-header-content-bot-categories-dropdown-content'>
        <div className='navbar-header-content-bot-categories-dropdown-content-top'>
            <div className='dropdown-content'>
                {dropdown_content_brands_originals.map((item,index)=>{
                    return <div>
                        {index === 1 ? <img className='navbar-brand-image' src={item} alt = 'navbar-original'/>  : <p>{item}</p>}
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_brands_sportwear.map((item,index)=>{
                    return <div>
                        {index === 1 ? <img className='navbar-brand-image' src={item} alt = 'navbar-sportwear'/>  : <p>{item}</p>}
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_brands_plastic.map((item,index)=>{
                    return <div>
                        {index === 1 ? <img className='navbar-brand-image' src={item} alt = 'navbar-plastic'/>  : <p>{item}</p>}
                    <div/>
                    </div>
                })}
            </div>
        </div>

        <div className='navbar-header-content-bot-categories-dropdown-content-bot'>
            <p>All adidas Originals</p>
            <p>All Sportwear</p>
            <p>All Sustainable</p>
        </div>

    </div>
  )
}

export default Navbar_dropdown_content_brand