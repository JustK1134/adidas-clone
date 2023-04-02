import React from 'react'
import './Gender.css'

const Gender = () => {
  return (
    <div className='gender'>
      <div className='gender-title'>
        <h2>WHO ARE YOU SHOPPING FOR?</h2> 
      </div>
      <div className='gender-content'>

        <div className='gender-content-card'>
          <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enVN/Images/nav-women-d_tcm212-819363.jpg" alt ="women"/>
          <p>WOMEN</p>
        </div>

        <div className='gender-content-card'>
          <img src = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enVN/Images/nav-men-d_tcm212-819364.jpg" alt ="men"/>
          <p>MEN</p>
        </div>

        <div className='gender-content-card'>
          <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enVN/Images/nav-kids-d_tcm212-819367.jpg" alt ="kid"/>
          <p>KIDS</p>
        </div>

      </div>
    </div>
  )
}

export default Gender