import React from 'react'
import './Cart.css'
import { Card6 } from '../../component'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {RxCross1, RxHeart} from 'react-icons/rx'
import { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const data_cart_item_1 = {product:'Ultraboost light shoes', color:'Cloud white', size:'12 UK', price:5200000, image:'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/0fbed4646c1d46e0aae0af6901301ff4_9366/HQ6351_700_HQ6351_01_standard.jpg.jpg?sh=364&strip=false&sw=364'}
const data_cart_item_2 = {product:'Ultraboost light shoes', color:'Cloud white', size:'12 UK', price:5200000, image:'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/b9bd6dc6bbb84a8faa3dae8400320b3e_9366/GX6632_700_GX6632_01_standard.jpg.jpg?sh=364&strip=false&sw=364'}
const data_cart_item_3 = {product:'Ultraboost light shoes', color:'Cloud white', size:'12 UK', price:5200000, image:'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/fad67a1b20b846bc9307aead0167670a_9366/GY7477_700_GY7477_01_standard.jpg.jpg?sh=364&strip=false&sw=364'}
const data_cart_item_4 = {product:'Ultraboost light shoes', color:'Cloud white', size:'12 UK', price:5200000, image:'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/42fe8c7f1eb14c548bceaf1800d3b0e1_9366/IC1299_160_IC1299_03_standard.jpg.jpg?sh=364&strip=false&sw=364'}
const data_cart = [data_cart_item_1,data_cart_item_2,data_cart_item_3,data_cart_item_4]
const Cart = () => {
    const [cart,setCart] = useState()
    const [quantity, setQuantity] = useState()

    const [togglePromoCodeValidation, setTogglePromoCodeValidation] = useState(false)
    let {authToken, HandleError} = useContext(AuthContext)
    let navigate = useNavigate()

    const getCartData = async() => {
        let response = await fetch('http://127.0.0.1:8000/api/cart/',{
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authToken.access)
            }
        })
        let fetch_cart_data = await response.json()
        if (response.status === 200){
            console.log("response status:",response.statusText)
            console.log("FETCH_CART_DATA:", fetch_cart_data[0])
            setCart(fetch_cart_data[0])
            let new_quantity_array = []
            for (let i = 0; i <fetch_cart_data[0].order_item.length; i++){
                new_quantity_array.push(1)
            }
            setQuantity(new_quantity_array)
        } else{
            console.log("response status:", response.statusText)
            HandleError({status: response.status + ' : ' + response.statusText, detail: fetch_cart_data.detail, toshop: true })
            navigate('/error')
        }


    }

    useEffect(()=>{
        getCartData()
    },[])

    const getTotalQuantity = () =>{
        let total = 0
        for (let i = 0; i< quantity.length; i++){
            total = total + quantity[i]
        }
        return total
    }

    const getTotalPrice = () =>{
        let total = 0
        for (let i = 0; i<quantity.length; i++){
            total = total + quantity[i] * cart.order_item[i].detail.price
        }
        return total
    }

    const handleSelectQuantity = (e,index) =>{
        let new_quantity_array = [...quantity]
        new_quantity_array[index] = parseInt(e.target.value)
        setQuantity(new_quantity_array)
    }

    const getOrderItemId = () =>{
        let new_order_item_array = []
        for (let i = 0; i<quantity.length; i++){
            new_order_item_array.push(cart.order_item[i].id)
        }
        return new_order_item_array
    }

    

    const handleSubmitUpdatequantity = async ()=>{
        let response = await fetch("http://127.0.0.1:8000/api/cart/update/",{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authToken.access)
            },
            body: JSON.stringify({"order_item_id":getOrderItemId(), "quantity":quantity}),
        })
        let data = await response.json()
        console.log(data)
        if (response.status === 201){
            console.log("response status:", response.statusText)
            navigate('/checkout')
        }
        else{
            console.log("response status:", response.statusText)
            HandleError({status: response.status + ' : ' + response.statusText, detail: data.detail, toshop: true })
            navigate('/error')
        }
    }

    const handleRemoveCart =(e) =>{
        console.log("index:",e.target.id)
        let remove_item_index = parseInt(e.target.id)


        

        console.log(cart)

        let new_order_item_array =[]
        new_order_item_array =[...cart.order_item]
        console.log("old:", new_order_item_array)
        console.log(new_order_item_array.splice(remove_item_index,1))
        console.log("new:",new_order_item_array)
        setCart({...cart,order_item:new_order_item_array})

        let new_quantity_array = []
        new_quantity_array = [...quantity]
        new_quantity_array.splice(remove_item_index,1)
        setQuantity(new_quantity_array)
        // console.log(cart)
        // setCart({...cart, })
        
        
        
    }


    
  return cart &&  quantity &&(
    
    <div className='cart'>
        <div className='cart-yourbag'>
            <h1>YOUR BAG</h1>
            <p>TOTAL [{getTotalQuantity()} items] <span>{getTotalPrice()} $</span></p>
            <p>Items in your bag are not reserved — check out now to make them yours.</p>
            {cart.order_item.map((item,index)=>{return (
            <div className='cart-yourbag-item' id={"item_"+index}>
                <div className='cart-yourbag-icon'>
                    {/* onClick={()=>{setCart(cart.filter((itemvalue,index)=>{console.log( index);console.log( removeindex);return index !== removeindex }))}} */}
                    <RxCross1 className='cart-yourbag-icon_1' size='1rem' id={index}  onClick={(e)=>{handleRemoveCart(e)}}/>
                    <RxHeart className='cart-yourbag-icon_1' size='1rem'/>
                </div>
            <Card6 product={item.detail.productname} color={item.detail.color} size = {item.detail.productname} total_price={item.detail.price*quantity[index]} price = {item.detail.price} image = {item.detail.main_image} /> 
            <select name="quantity" id="quantity" onChange={(e)=>{handleSelectQuantity(e,index)}}>
                <option value={1} >1</option>
                <option value={2} >2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>
            </div>)})}
            
        </div>
        <div className='cart-summary'>
            <button className='promo-button' onClick={handleSubmitUpdatequantity}>
                <p>Checkout</p>
                <div className='button-arrow'>
                <HiOutlineArrowNarrowRight size='3rem'  />
                </div>
            </button>
            <h2 className='cart-summary-title'>Order Summary</h2>
            <div className='cart-summary-table'>
                <div className='cart-summary-detail'>
                    <p>{getTotalQuantity()} items</p>
                    <p>{getTotalPrice()}$</p>
                </div>
                <div className='cart-summary-detail'>
                    <p>Original Price</p>
                    <p>{getTotalPrice()}$</p>
                </div>
                <div className='cart-summary-detail'>
                    <p>Delivery</p>
                    <p>0$</p>
                </div>
                <div className='cart-summary-detail'>
                    <p>On Sale</p>
                    <p>0$</p>
                </div>
                <div className='cart-summary-detail'>
                    <p>Total</p>
                    <p>{getTotalPrice()}$</p>
                </div>
                <p >inclusive of tax</p>
            </div>
            
            <form >
                <div className='cart-inputBox'>
                    <input placeholder=' ' type='text' required  id='promo-input' pattern='promo-code' onChange={()=>{setTogglePromoCodeValidation(true)}}/>
                    <span className='cart-inputBox-effect'>Enter your promo code</span>
                    {togglePromoCodeValidation && <span className='cart-inputBox-error'>Please enter a valid Promo-code</span>}
                </div>
                <button className='promo-button' >
                    <p>Apply</p>
                    <div className='button-arrow' >
                    <HiOutlineArrowNarrowRight size='3rem'  />
                    </div>
                </button>
            </form>
            <p className='cart-summary-payment'>ACCEPTED PAYMENT METHOD</p>
            <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/paymentmethodsvmp_VN_new_tcm212-713926.png"></img>
        </div>
    </div>
    
  )
}

export default Cart