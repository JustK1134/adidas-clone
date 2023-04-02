import React from 'react'
import './WhatHot.css'
import CardAd from '../card_3/CardAd'
import {Slide} from 'react-slideshow-image'
import { useRef } from 'react'
import {HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft} from 'react-icons/hi'


const whathot_img_1 = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enVN/Images/Argentina_Jersey_Teaser_carousel_tcm212-1004789.jpg"
const whathot_img_3 = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enVN/Images/kids-ss23-lego-play-kids-lp-teaser-carousel-d_tcm212-986888.jpg"
const whathot_img_4 = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enVN/Images/ao-tc-m_tcm212-1002473.jpg"
const whathot_video_2 = "https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/horizontal-ss23-collective-power-global-launch-dotcom-hp-teaser-carousel-d_enynci.mp4"

const whathot_video_5 = "https://brand.assets.adidas.com/image/upload/q_auto,vc_auto,c_scale,w_0.5/enVN/Images/running-2023-tier2-non-sponsored-tokyo-marathon-reactive-marathon-winner-launch-hp-teaser-carousel-gif-final-d_tcm212-1000562.mp4"
const whathot_video_6 = "https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/running-ss23-global-brand-demand-hero-catlp-hp-teaser-carousel-d_mztpnd.mp4"
const whathot_video_7 = "https://brand.assets.adidas.com/image/upload/q_auto,vc_auto,c_scale,w_0.5/enVN/Images/hp-teaser-carousel_tcm212-998068.mp4"



const WhatHot = () => {
  const slideRef_3 = useRef()
  return (
    <div className='whathot'>
        <div className='whathot-arrow-right' onClick={()=>slideRef_3.current.goNext()}>
                <HiOutlineArrowNarrowRight size='1.5em'  />
        </div>

        <div className='whathot-arrow-left'onClick={()=>slideRef_3.current.goBack()}>
                <HiOutlineArrowNarrowLeft size='1.5em'  />
        </div>
        <div className='whathot-title'>
            <h2>WHAT'S HOT</h2>
        </div>
        <Slide ref ={slideRef_3} autoplay={false} infinite={false} arrows={false}>
          <div className='whathot-content'>
              <CardAd image = {whathot_img_1} title = 'Dress like a champion' content = "Made for fans. Celebrate victory with Argentina's latest home jersey "/>
              <CardAd video = {whathot_video_2} title='Collective Power' content ="We've even been together. Tap into the collective connection"/>
              <CardAd image={whathot_img_3} title='IMAGIN YOUR WOLD' content = "Enjoy every moment with new adidas LEGO@ collection. Made the play"/>
              <CardAd image={whathot_img_4} title='ALWAY ORIGINAL' content="Lifestyle essential made to fit every story. No matter your style"/>
          </div>
          <div className='whathot-content'>
              <CardAd video = {whathot_video_5} title = 'MARATHON WINNER' content = "02:16:28_Rosemary Wanjiru "/>
              <CardAd video = {whathot_video_6} title='Running needs nothing' content ="Running just need you to show up and run as you are"/>
              <CardAd video={whathot_video_7} title='FOOTBALL ICONS' content = "Get a dose of nostalgia with these '90s- inspired icon"/>
              <CardAd image={whathot_img_4} title='ALWAY ORIGINAL' content="Lifestyle essential made to fit every story. No matter your style"/>
          </div>
        </Slide>
    </div>
  )
}

export default WhatHot