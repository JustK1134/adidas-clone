import React from 'react'
import './WhatHot.css'
import Card4 from '../card_4/Card4'

const WhatHotTemplate = ({whathot_temtplate_1_data}) => {
  return (
    <div className='whathot_temtplate_1'>
        {whathot_temtplate_1_data.map((item)=>{return <Card4 image = {item.image} title = {item.title} content = {item.content} video = {item.video}/>})}
    </div>
  )
}

export default WhatHotTemplate