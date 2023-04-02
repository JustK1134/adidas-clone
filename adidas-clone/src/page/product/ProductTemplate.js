import React from 'react'
import './ProductTemplate.css'
import RightPart from './RightPart'
import LeftPart from './LeftPart'
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const ProductTemplate = () => {
  const {product_id} =useParams()
  let {HandleError} =useContext(AuthContext)

  let navigate = useNavigate()


  const setDefaultFaqState = (data) =>{
    let defaulFaqState = []
    for (let i = 0; i< data.length; i++){
      defaulFaqState.push(false)
    }
    return defaulFaqState
  }

  const [productData, setProductData] =useState()
  const getProductData = async ()=>{
    let response = await fetch(`http://127.0.0.1:8000/api/shop/product/${product_id}/`)
    let fetch_data = await response.json()
    if (response.status === 200){
      console.log('FETCH_DATA: ', fetch_data[0])
      console.log('FETCH_DATA:', fetch_data[0].id )
      setProductData(fetch_data[0])
    }else{
      console.log(response.status)
      HandleError({status:response.status, detail:'No product found', toshop:true})
      navigate('/error')
    }

    
    
  }


    useEffect(()=>{
    getProductData()
    console.log("useEffect run")
  },[product_id])


  const [sideBar, setSideBar] =useState(false)
  const [stopPosition, setStopPosition] =useState('empty')

  const controlSideBar =() =>{
    let element_left = document.getElementById('left')
    let element_right = document.getElementById('right')
        if (typeof window !== 'undefined'){
            if (element_right.scrollHeight - window.scrollY < 460){
              setSideBar(true)
              
              if (stopPosition === 'empty'){
                console.log("set true")
                console.log("stop position",stopPosition)
                setStopPosition(window.scrollY)
              }
              
            }else if(element_right.scrollHeight - window.scrollY > 460) {
                setSideBar(false)
                console.log("set false")
                setStopPosition('empty')

            }
        }
        // console.log("scrolling to:",Math.round(window.scrollY  * 100) / 100)
        
        // console.log("left: ",element_left.scrollHeight)
        // console.log("right: ",element_right.scrollHeight)
        
    }
    
    useEffect(()=>{
        if(typeof window !== 'undefined'){
            
            window.addEventListener('scroll', controlSideBar,true);

        }
        return () => window.removeEventListener('scroll', controlSideBar, true);
    },[stopPosition])

  return (

    <div className='product-template'>
        {productData && <RightPart productData = {productData} defaulFaqState ={()=>setDefaultFaqState(productData.product_info_faq)}/>}
        {productData && <LeftPart stopPosition ={stopPosition} sideBar = {sideBar}  productData = {productData}/>}

    </div>

  )
}

export default ProductTemplate