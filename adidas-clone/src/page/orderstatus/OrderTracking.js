import React from 'react'
import './OrderStatus.css'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const OrderTracking = () => {

    const [orderID, setOrderID] =useState()
    const [toggleOrderValidation, setToggleOrderValidation] = useState(false)
    let navigate = useNavigate()
    const handleOrderTrackingSubmit = ()=>{
        navigate(`/orderstatus/${orderID}`)
    }

  return (
    <div className='order-tracking'>
        <form onSubmit={()=>{handleOrderTrackingSubmit()}}>
            <h1>ORDER TRACKING</h1>
            <div className='order-tracking-inputBox'>
                <input  placeholder=' ' type='text' value={orderID} required="required" onChange={(e)=>{setOrderID(e.target.value); setToggleOrderValidation(true)}}/>
                <span  className='order-tracking-inputBox-effect'>Order ID</span>
                {toggleOrderValidation && <span className='order-tracking-inputBox-error'>Please enter a valid Order</span>}
            </div>
            <button className='order-tracking-button' >
                    <p>FIND IT</p>
                    <div className='button-arrow'>
                    <HiOutlineArrowNarrowRight size='3rem'  />
                    </div>
            </button>
        </form>
    </div>
  )
}

export default OrderTracking