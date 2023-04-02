import React from 'react'
import './Shop.css'
import ShopHeader from './ShopHeader'
import ShopMainTemplate from './ShopMainTemplate'
import {small_image_1, main_image_1, secondary_image_1, slider_image_1} from './Data'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const data_header = {title: 'Men', division:'Shoes', quantity:'1020', description:"Shop adidas for all styles of men's shoes including casual sneakers, high-performance running shoes, and comfty slide. Browse styles for woman and kids here"}
const data_product = [{product:'Ultraboost Light Shoes', sport:'Running', slider_image:slider_image_1, main_image:main_image_1,secondary_image:secondary_image_1, description:'7 colours', price:'5,200,000'}, ]

const Shop = () => {


  const [shopData, setShopData] = useState()
  let {HandleError} = useContext(AuthContext)
  let navigate = useNavigate()

  useEffect(()=>{
    getShopData()
  },[]) 

  const getShopData = async () =>{

    let response = await fetch('http://127.0.0.1:8000/api/shop/')
    let fetch_data = await response.json()
    if (response.status === 200){
      console.log('FETCH_DATA: ', fetch_data)
      setShopData(fetch_data)
      HandleError({status: response.status, detail:'no error'})
    }
    else{
      
      console.log(response.status)
      HandleError({status: response.status, detail:'Something wrong. Couldnt load the products', toshop:true})
      navigate('/error')
      console.log("second",response.status)
    }

    
  }
 



  return (
    <div className='shop'>
        <ShopHeader data_header={data_header}/>
        <ShopMainTemplate shopData={shopData}/>
        
    </div>
  )
}

export default Shop