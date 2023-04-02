import React from 'react'
import './OrderStatus.css'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const data_cart_item_1 = {product:'Ultraboost light shoes', color:'Cloud white', size:'12 UK', price:5200000, image:'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/0fbed4646c1d46e0aae0af6901301ff4_9366/HQ6351_700_HQ6351_01_standard.jpg.jpg?sh=364&strip=false&sw=364'}
const data_cart_item_2 = {product:'Ultraboost light shoes', color:'Cloud white', size:'12 UK', price:5200000, image:'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/b9bd6dc6bbb84a8faa3dae8400320b3e_9366/GX6632_700_GX6632_01_standard.jpg.jpg?sh=364&strip=false&sw=364'}
const data_cart_item_3 = {product:'Ultraboost light shoes', color:'Cloud white', size:'12 UK', price:5200000, image:'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/fad67a1b20b846bc9307aead0167670a_9366/GY7477_700_GY7477_01_standard.jpg.jpg?sh=364&strip=false&sw=364'}
const data_cart_item_4 = {product:'Ultraboost light shoes', color:'Cloud white', size:'12 UK', price:5200000, image:'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/42fe8c7f1eb14c548bceaf1800d3b0e1_9366/IC1299_160_IC1299_03_standard.jpg.jpg?sh=364&strip=false&sw=364'}
const data_cart = [data_cart_item_1,data_cart_item_2,data_cart_item_3,data_cart_item_4]

const OrderStatus = () => {
    const {order_id} = useParams()
    const [address, setAddress] = useState()
    const [cart, setCart] = useState()
    const [date, setDate] = useState()
    const [deliveryDate, setDeliveryDate] = useState()
    let {authToken, HandleError} = useContext(AuthContext)
    let navigate = useNavigate()

    const getOrderData = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/cart/orderstatus/${order_id}/`,{
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authToken.access),
            }
        })
        let fetch_order_data = await response.json()
        if (response.status === 200){
            console.log("FETCH ORDER DATA:", fetch_order_data.order[0])
            setCart(fetch_order_data.order[0])
            setAddress(fetch_order_data.address[0])
            let a = fetch_order_data.order[0].date_order
            let d = new Date(a)
            setDate(d)
            let b = new Date(a)
            b.setDate(d.getDate()+5)
            setDeliveryDate(b)
        }else{
            console.log(response.status)
            HandleError({status: response.status +":" +response.statusText, detail:fetch_order_data.detail, toshop:true, tohome:true, toorder:true})
            navigate('/error')

        }

    }

    useEffect(()=>{
        getOrderData()
    },[order_id])

    console.log(cart)
    console.log(address)
    console.log(date)
    
  return (
    address && cart && date && deliveryDate &&
    <div className='orderstatus'>
        <div className='orderstatus-status'>
            <p>Expected delivery</p>
            <h2>{deliveryDate.toLocaleDateString("en-US",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
            <div>

            </div>
            <p>Status:</p>
            <h2>ON THE WAY</h2>
            <p>Sorry, your order will be delivered a bit later than expected. We couldn’t retrieve the new date from the courier, but you can track your package for the up-to-date delivery date.</p>
            <button className='promo-button' >
                <p>TRACK YOUR PACKAGE</p>
                <div className='button-arrow' >
                <HiOutlineArrowNarrowRight size='3rem'  />
                </div>
            </button>

            {cart.order_item.map((item)=>{return (
                <div className='checkout-summary-detail-product'>
                    <img src ={item.detail.main_image}/>
                    <div>
                        <p>{item.detail.productname}. Quantity: {item.quantity}</p>
                        <p>color: {item.detail.color}</p> 
                        <p>price: {item.detail.price}$</p>
                    </div>
                </div>
            )})}
            <h2>DETAILS</h2>
            <p><span>Order</span></p>
            <p>{address.order}</p>
            <p>{date.toLocaleDateString("en-US",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <div className='orderstatus-split'>
                <div>
                    <p><span>Payment</span></p>
                    <p>Cash on delivery</p>
                </div>
                <div>
                    <p><span>Carrier</span></p>
                    <p>GHN Standard</p>
                </div>
            </div>

            <h2>ADDRESS</h2>
            <p>{address.first_name} {address.last_name} </p>
            <p>{address.street}</p>
            <p>{address.district} ,{address.province} ,{address.postal}, Vietnam</p>
            <p>{address.phone}</p>
            <p>{address.email}</p>

            <h2>TOTALS</h2>
            <div >
                <div className='orderstatus-split'>
                    <p> {cart.total_item} items</p>
                    <p> {cart.total_price}</p>
                </div>
                <div className='orderstatus-split'>
                    <p> Delivery</p>
                    <p> Free</p>
                </div>
                <div className='orderstatus-split'>
                    <p> Total discount</p>
                    <p> 0</p>
                </div>
                <div className='orderstatus-split'>
                    <p><span>Total</span></p>
                    <p><span>{cart.total_price}</span></p>
                </div>
                <p>Inclusive tax</p>
            </div>
        </div>

        <div className='orderstatus-needhelp'>
            <h2>NEED HELP</h2>
            <p><span>Product</span></p>
            <p><span>Ordering & Payment</span></p>
            <p><span>Delivery</span></p>
            <p><span>Promotion & Voucher</span></p>
            <p><span>Return & Refund</span></p>
            <p><span>Account & Newsletter</span></p>
            <p><span>Company information</span></p>
        </div>
    </div>
  )
}

export default OrderStatus