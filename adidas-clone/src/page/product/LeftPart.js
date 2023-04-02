import React, { useEffect, useState } from 'react'
import './LeftPart.css'
import {AiFillStar} from 'react-icons/ai'
import {BsTruck} from 'react-icons/bs'
import {RxRulerHorizontal, RxLoop} from 'react-icons/rx'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {RxHeart} from 'react-icons/rx'
import PopUpBag from './PopUpBag'
import AuthContext from '../../context/AuthContext'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const LeftPart = ({productData, sideBar, stopPosition}) => {
  const {product_id} = useParams()
  let {user, authToken, logoutUser, HandleError} = useContext(AuthContext)
  const [cart, setCart] = useState()

  const handleUpdateCart = async (e) =>{
    if (size === 'no size select'){
      setToggleSizeValidation(true)
      console.log(size)
      return null
    }

    e.preventDefault()
    const response = await fetch('http://127.0.0.1:8000/api/cart/',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + String(authToken.access)
      },
      body: JSON.stringify({"product":productData.id, "quantity":1, "size":size}),

    })
    let data = await response.json()
    console.log(data)
    getpopUpCartData()
    if (cart){
      document.getElementById('pop-up-cart').style.display = "flex"
    }
    
  }

  const getpopUpCartData = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/cart/',{
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + String(authToken.access),
      }
    })
    let fetch_cart_data = await response.json()
    if (response.status === 200){
      console.log("response status:", response.status)
      console.log("FETCH_CART_DATA:", fetch_cart_data[0])
      setCart(fetch_cart_data[0])
    }else{
      console.log("response status:", response.status)
      HandleError({status: response.status + ":" + response.statusText, detail: fetch_cart_data.detail, toshop: true})
    }
  }



  const setDefaultSizeCheckboxState = () =>{
    let new_sizeCheckbox_array = []
    for (let i = 0; i<productData.size.length; i++){
      
      if (productData.size[i].quantity !== 0){
        new_sizeCheckbox_array.push(false)
      }
    }
    return new_sizeCheckbox_array
  }
  const [sizeCheckboxState, setSizeCheckboxState] = useState(setDefaultSizeCheckboxState)
  const [size, setSize] = useState(false)
  const [toggleSizeValidation, setToggleSizeValidation] = useState(false)

  const handleSizeCheckboxState = (index) =>{
    let new_sizeCheckbox_array = setDefaultSizeCheckboxState()
    new_sizeCheckbox_array[index] = true
    setSizeCheckboxState(new_sizeCheckbox_array)
  }

  const getSizeSubmit = () =>{
    let index = sizeCheckboxState.findIndex((value)=>{return value === true})
    if (index !== -1){
      setSize(productData.size[index].size.split('_')[1])
      console.log("set")
    }else{
      setSize('no size select')
    }
  }
  
  useEffect(()=>{
    getSizeSubmit()
  },[sizeCheckboxState])

  useEffect(()=>{
    setToggleSizeValidation(false)
    setSizeCheckboxState(setDefaultSizeCheckboxState)
  },[product_id])


  let style_1 = {    backgroundColor: "white",
    marginRight:"45px",
    padding: "0 2px",
    borderLeft: "0.8px",
    position: "fixed",
    overflowY: "scroll",
    overflow:"hidden",
    top:"100px",
    right:"0",
    height: "fit-content",
    width: "35%"}

    let top = (stopPosition-150) + 'px'

    let style_2 = {    backgroundColor: "white",
    marginRight:"45px",
    padding: "0 2px",
    borderLeft: "0.8px",
    position: "relative",
    overflowY: "scroll",
    overflow:"hidden",
    top:top,
    right:"0",
    height: "fit-content",
    width: "35%"}

    console.log(top)

// className={sideBar ? 'product-template-left-footer' :'product-template-left'}
  return (
    
    <div id='left' style={sideBar ? style_2 : style_1} >
        <div className='product-template-left-header'>
          <p className='product-template-left-header-division'>{productData.sport}</p>
          <div className='product-template-left-rating'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <p>104</p>
          </div>
        </div>
        <h1 className='product-template-left-product-name'>{productData.productname}</h1>

        <p className='product-template-left-product-price'>{productData.price}$</p>

        <p className='product-template-left-product-color-way'>{productData.color}</p>

        <div className='product-template-left-size'>
          <div className='product-template-left-size-title'>
              <h3>Sizes</h3>
          </div>

          <div className='product-template-left-size-description'>
              {productData.size.map((item,index)=>{ return item.quantity !== 0 &&
                <label className='product-template-left-checkbox-field'>{item.size.split('_')[1]}
                  <input type="checkbox" checked={sizeCheckboxState[index]}  onClick={()=>{handleSizeCheckboxState(index);}} /> <span className='product-template-left-checkmark'>{item.size.split('_')[1]}</span>
                </label>
              })}
              
              {/* <label className='product-template-left-checkbox-field'>10 UK
                  <input type="checkbox"/> <span className='product-template-left-checkmark'>10 UK</span>
              </label>
              <label className='product-template-left-checkbox-field'>10.5 UK
                  <input type="checkbox"/> <span className='product-template-left-checkmark'>10.5 UK</span>
              </label>
              <label className='product-template-left-checkbox-field'>11 UK
                  <input type="checkbox"/> <span className='product-template-left-checkmark'>11 UK</span>
              </label>
              <label className='product-template-left-checkbox-field'>11.5 UK
                  <input type="checkbox"/> <span className='product-template-left-checkmark'>11.5 UK</span>
              </label>
              <label className='product-template-left-checkbox-field'>12 UK
                  <input type="checkbox"/> <span className='product-template-left-checkmark'>12 UK</span>
              </label>
              <label className='product-template-left-checkbox-field'>12.5 UK
                  <input type="checkbox"/> <span className='product-template-left-checkmark'>12.5 UK</span>
              </label> */}
          </div>
          {toggleSizeValidation && size === 'no size select' && <span className='product-template-size-checkbox-error'>Please select one</span>}
        </div>

        <div className='product-template-left-size-guide'>
          <RxRulerHorizontal size='1.5rem'/>
          <p >Size Guide</p>
        </div>
        

        <div className='product-template-left-button'>
          {/* onClick={handleUpdateCart} */}
          {/* onClick={()=>{document.getElementById('pop-up-cart').style.display = "flex"; document.getElementById('pop-up-cart').style.justifyContent = "center"}} */}
          <button className='product-template-left-button-add-bag' onClick={handleUpdateCart}>
            <p>ADD TO BAG</p>
            <div className='button-arrow'>
              <HiOutlineArrowNarrowRight size='3rem'  />
            </div>
          </button>
          <button className='product-template-left-button-wishlist'>
            <div>
              <RxHeart size='1.5em'/>
            </div>
            
          </button>
        </div>

        <div className='product-template-left-size-guide'  >
          <BsTruck size='1.5rem'/>
          <p>FREE SHIPPING FOR ADICLUB MEMBERS</p>
        </div>
        
        <div className='product-template-left-size-guide' >
          <RxLoop size='1.5rem'/>
          <p>Find out when to order to get before Lunar New Year</p>
        </div>
        
        {cart &&
        <div className='pop-up-cart' id='pop-up-cart' >
          <PopUpBag size={size} image={productData.main_image} productname = {productData.productname} price = {productData.price} color = {productData.color} cart={cart}   />
        </div>
        }
        
    </div>
  )
}

export default LeftPart