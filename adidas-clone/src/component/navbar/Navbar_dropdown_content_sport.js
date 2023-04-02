import React from 'react'
const dropdown_content_sport_football_img = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/football-nav-img_tcm212-843786.jpg"
const dropdown_content_sport_running_img = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/Navi_Header_tcm212-996539.jpg"
const dropdown_content_sport_basketball_img = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/chapter2bballnavi_tcm212-843792.png"
const dropdown_content_sport_training_img = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/rdy_header_navigation_tcm212-843794.jpg"

const dropdown_content_sport_football = ['FOOTBALL', dropdown_content_sport_football_img , 'Boots', 'Clothing', 'Accessories','_','Predator','X']
const dropdown_content_sport_running = ['RUNNING',dropdown_content_sport_running_img,'Shoes','Clothing','Accessories','_','Ultraboots','Adizero','Supernova','4DFWD']
const dropdown_content_sport_basketball = ['BASKETBALL',dropdown_content_sport_basketball_img,'Shoes','Clothing','Accessories','_','Traeyoung','Donovan Mitchell','James Harden','Damian Lillard']
const dropdown_content_sport_training = ['TRAINING',dropdown_content_sport_training_img,'Shoes','Clothing','Accessories','_','Heat RDY','Climacool','Essentials']
const dropdown_content_sport_other = ['OTHER SPORTS','Swimming','Golf','Tennis','Cycling','Yoga']


const Navbar_dropdown_content_sport = () => {
  return (
    <div className='navbar-header-content-bot-categories-dropdown-content'>
        <div className='navbar-header-content-bot-categories-dropdown-content-top'>
            <div className='dropdown-content'>
                {dropdown_content_sport_football.map((item,index)=>{
                    return <div>
                        {index === 1 ? <img src={item}  alt = 'navbar-football'/>  : <p>{item}</p>}
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_sport_running.map((item,index)=>{
                    return <div>
                        {index === 1 ? <img src={item} alt = 'navbar-running'/>  : <p>{item}</p>}
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_sport_basketball.map((item,index)=>{
                    return <div>
                        {index === 1 ? <img src={item}  alt = 'navbar-basketball'/>  : <p>{item}</p>}
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_sport_training.map((item,index)=>{
                    return <div>
                        {index === 1 ? <img src={item} alt = 'navbar-training' />  : <p>{item}</p>}
                    <div/>
                    </div>
                })}
            </div>
            <div className='dropdown-content'>
                {dropdown_content_sport_other.map((item)=>{
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
            <p>All Football</p>
            <p>All Running</p>
            <p>All Basketball</p>
            <p>All Training</p>
            <p>All Other Sport</p>
        </div>
    </div>
  )
}

export default Navbar_dropdown_content_sport