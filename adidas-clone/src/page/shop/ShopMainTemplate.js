import React from 'react'
import './ShopMainTemplate.css'
import { Card5 } from '../../component'

const ShopMainTemplate = ({shopData}) => {


  return (
    <div className='shop-main-template'>
      {/* <Card5 product ={shopData[0].productname} price ={shopData[0].price} sport ={shopData[0].sport} main_image={shopData[0].main_image} secondary_image={shopData[0].secondary_image} description={shopData[0].productname} slider_image={shopData[0].sublink}  /> */}
      {shopData && shopData.map((item)=>{return (
        <Card5 product ={item.productname} price ={item.price} sport ={item.sport} main_image={item.main_image} secondary_image={item.second_image} description={item.id} mainlink={item.mainlink} slider_image={item.sublink}  />
      )})}
    </div>
  )
}

export default ShopMainTemplate