import React from 'react'
import './Men.css'
import { WhatHot, BestAdidas, WhatHotTemplate, Theme } from '../../component'


const whathot_temtplate_1_data =[{image: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enVN/Images/football-ss21-euro-nonfed-away-launch-GLPm-tc-d_tcm212-644400.jpg', title: "MADE FOR UEFA", content:"The new away collection is out now"}
,{video:"https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/global%20brand%20publishing/Statement/ss21OAMC/ss21-oamc-hp-tc-d.mp4", title: "adidas Originals by OAMC", content:"The new away collection is out now"}]

const Men = () => {
  return (
    <>
    <Theme/>
    <WhatHot/>
    <WhatHotTemplate whathot_temtplate_1_data ={whathot_temtplate_1_data}/>
    <BestAdidas/>
    </>
  )
}

export default Men