import React from 'react'
import './Shop.css'
import ShopHeader from './ShopHeader'
import ShopMainTemplate from './ShopMainTemplate'
import {small_image_1, main_image_1, secondary_image_1, slider_image_1} from './Data'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'




const ShopByCategory = () => {
    let {category} = useParams()


  const [shopDataCategory, setShopDataCategory] = useState()
  const [shopHeaderData, setShopHeaderData] = useState()
  let {HandleError} = useContext(AuthContext)
  let navigate = useNavigate()

  useEffect(()=>{
    getShopData()
  },[category]) 

  const getShopData = async () =>{

    let response = await fetch(`https://khoiluc-portfolio-adidas-clone.up.railway.app/api/shop/category/${category}/`)
    let fetch_data = await response.json()
    if (response.status === 200){
      console.log('FETCH_DATA: ', fetch_data)
      setShopDataCategory(fetch_data.data_product)
      setShopHeaderData(fetch_data.data_header)
      HandleError({status: response.status, detail:'no error'})
    }
    else{
      
      console.log(response.status)
      HandleError({status: response.status, detail:'Something wrong. Couldnt load the products', toshop:true})
      navigate('/error')
      console.log("second",response.status)
    }

    
  }
 
console.log(shopHeaderData)



  return (
    <div className='shop'>
        <ShopHeader data_header={shopHeaderData}/>
        <ShopMainTemplate shopData={shopDataCategory}/>
        
    </div>
  )
}

export default ShopByCategory