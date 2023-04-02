import React from 'react'
import './WhatHot.css'
import CardAd from '../card_3/CardAd'
import {Slide} from 'react-slideshow-image'
import { useRef } from 'react'
import {HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft} from 'react-icons/hi'

const trending_img_1 = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enVN/Images/fw22-football-manchester-united-home-hp-tcc_tcm212-895322.jpg"
const trending_img_2 = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enVN/Images/football-fw22-arsenal-home-hp-tcc-new_tcm212-885899.jpg"
const trending_img_3 = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enVN/Images/my-tc-hp_tcm212-942051.jpg"
const trending_img_4 = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enVN/Images/running-shoe-finder-attract-fw22-digital-hp-teaser-carousel-d_tcm212-938990.jpg"



const Trending = () => {
  const slideRef_5 = useRef()
  return (
    <div className='whathot'>
        <div className='whathot-arrow-right' onClick={()=>slideRef_5.current.goNext()}>
                <HiOutlineArrowNarrowRight size='1.5em'  />
        </div>

        <div className='whathot-arrow-left'onClick={()=>slideRef_5.current.goBack()}>
                <HiOutlineArrowNarrowLeft size='1.5em'  />
        </div>
        <div className='whathot-title'>
            <h2>TRENDING</h2>
        </div>
        <Slide ref ={slideRef_5} autoplay={false} infinite={false} arrows={false}>
          <div className='whathot-content'>
            <CardAd image = {trending_img_1} title = 'MAN UTD 22/23 HOME KIT' content = "Rooted in MUFC's collective memory, the iconic polo collar makes a comeback"/>
            <CardAd image = {trending_img_2} title='ARSENAL UTD 22/23 HOME KIT' content ="Unmistakably Arsenal. The club's classic colors, with a string polo collar"/>
            <CardAd image={trending_img_3} title='ADICLUB IS LIVE NOW' content = "Join now"/>
            <CardAd image={trending_img_4} title='Ready, set, find' content="Get the perfect fit for your run with the adidas Running Shoe Finder"/>
          </div>
          <div className='whathot-content'>
            <CardAd image = {trending_img_1} title = 'MAN UTD 22/23 HOME KIT' content = "Rooted in MUFC's collective memory, the iconic polo collar makes a comeback"/>
            <CardAd image = {trending_img_1} title = 'MAN UTD 22/23 HOME KIT' content = "Rooted in MUFC's collective memory, the iconic polo collar makes a comeback"/>
            <CardAd image = {trending_img_1} title = 'MAN UTD 22/23 HOME KIT' content = "Rooted in MUFC's collective memory, the iconic polo collar makes a comeback"/>
            <CardAd image = {trending_img_1} title = 'MAN UTD 22/23 HOME KIT' content = "Rooted in MUFC's collective memory, the iconic polo collar makes a comeback"/>                       
          </div>
        </Slide>
    </div>
  )
}

export default Trending