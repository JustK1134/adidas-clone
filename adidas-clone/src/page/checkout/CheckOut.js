import React from 'react'
import './CheckOut.css'
import {BsTruck} from 'react-icons/bs'
import {AiOutlineCheck} from 'react-icons/ai'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

// const data_cart_item_1 = {product:'Ultraboost light shoes', color:'Cloud white', size:'12 UK', price:5200000, image:'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/0fbed4646c1d46e0aae0af6901301ff4_9366/HQ6351_700_HQ6351_01_standard.jpg.jpg?sh=364&strip=false&sw=364'}
// const data_cart_item_2 = {product:'Ultraboost light shoes', color:'Cloud white', size:'12 UK', price:5200000, image:'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/b9bd6dc6bbb84a8faa3dae8400320b3e_9366/GX6632_700_GX6632_01_standard.jpg.jpg?sh=364&strip=false&sw=364'}
// const data_cart_item_3 = {product:'Ultraboost light shoes', color:'Cloud white', size:'12 UK', price:5200000, image:'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/fad67a1b20b846bc9307aead0167670a_9366/GY7477_700_GY7477_01_standard.jpg.jpg?sh=364&strip=false&sw=364'}
// const data_cart_item_4 = {product:'Ultraboost light shoes', color:'Cloud white', size:'12 UK', price:5200000, image:'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/42fe8c7f1eb14c548bceaf1800d3b0e1_9366/IC1299_160_IC1299_03_standard.jpg.jpg?sh=364&strip=false&sw=364'}
// const data_cart = [data_cart_item_1,data_cart_item_2,data_cart_item_3,data_cart_item_4]

const CheckOut = () => {
    const [checkoutCheckboxValidation, setCheckoutCheckboxValidation] = useState([true,true,true,true])
    const handleCheckoutCheckboxValidation = () => {
        let new_arr_checkbox = [...checkoutCheckboxValidation]
        new_arr_checkbox[0] = document.getElementById('checkout-checkbox-0').checked
        new_arr_checkbox[1] = document.getElementById('checkout-checkbox-1').checked
        new_arr_checkbox[2] = document.getElementById('checkout-checkbox-2').checked
        new_arr_checkbox[3] = document.getElementById('checkout-checkbox-3').checked
        setCheckoutCheckboxValidation(new_arr_checkbox)
        if (new_arr_checkbox[0] === false || new_arr_checkbox[1] === false || new_arr_checkbox[2] === false ||new_arr_checkbox[3] === false){
            return false
        }
        return true
    }



    const [toggleCheckoutValidation, setToggleCheckoutValidation] = useState({fname:false,lname:false,street:false,building:false,province:false,district:false,ward:false,postal:false,m:false,p:false,promo:false})
    
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [street, setStreet] = useState('')
    const [building, setBuilding] = useState('')
    const [province, setProvince] = useState('')
    const [district, setDistrict] = useState('')
    const [ward, setWard] = useState('')
    const [postal, setPostal] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    let navigate = useNavigate()
    const [cart,setCart] = useState()
    let {authToken, HandleError} = useContext(AuthContext)

    const handleCheckoutSubmit = async (e) =>{
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/cart/checkout/',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authToken.access),
            },
            body: JSON.stringify({"customer":cart.customer,"order":cart.id,"first_name":firstName,"last_name":lastName,"street":street,"building":building,"province":province,"district":district,"ward":ward,"postal":postal,"email":email,"phone":phone})
        })
        let data = await response.json()
        if (response.status === 201){
            console.log("return data:", data)
            HandleError({status: response.status + ":" + response.statusText, detail: 'We receive your order', order_id:data.order, toshop:true, toorderstatus:true})
            navigate('/success')
        }else{
            console.log("return data:", data)
            HandleError({status: response.status, detail: data.detail, toshop:true})
            navigate('/error')
        }
        
        
    }



    const getCartData = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/cart/checkout/',{
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authToken.access),
            }
        })
        let fetch_cart_data = await response.json()
        if (response.status == 200){
            console.log("response status:",response.status)
            console.log("FETCH_CART_DATA:", fetch_cart_data[0])
            setCart(fetch_cart_data[0])
        }else{
            console.log("response status:",response.status)
            HandleError({status: response.status, detail: fetch_cart_data.detail, toshop:true})
            navigate('/error')
        }
    }

    useEffect(()=>{
        getCartData()
    },[])

  return (
    <div className='checkout'>
        <form className='checkout-shipping' onSubmit={handleCheckoutSubmit}>
            <h1>SHIPPING ADDRESS</h1>
            <div className='checkout-shipping-double'>
                <div className='checkout-inputBox'>
                    <input type='text' required="required" value={firstName} onChange={(e)=>{setFirstName(e.target.value);setToggleCheckoutValidation({...toggleCheckoutValidation,fname:true})}}/>
                    <span className='checkout-inputBox-effect'>First Name</span>
                    {toggleCheckoutValidation.fname && <span className='checkout-inputBox-error'>Please enter a valid First Name</span>}
                </div>
                <div className='checkout-inputBox'>
                    <input type='text' required="required" value={lastName} onChange={(e)=>{setLastName(e.target.value);setToggleCheckoutValidation({...toggleCheckoutValidation,lname:true})}}/>
                    <span className='checkout-inputBox-effect'>Last Name</span>
                    {toggleCheckoutValidation.lname && <span className='checkout-inputBox-error'>Please enter a valid Last Name</span>}
                </div>
            </div>
            <div className='checkout-inputBox'>
                    <input type='text' required="required" value={street} onChange={(e)=>{setStreet(e.target.value);setToggleCheckoutValidation({...toggleCheckoutValidation,street:true})}}/>
                    <span className='checkout-inputBox-effect'>Street Numbers/Street Name</span>
                    {toggleCheckoutValidation.street && <span className='checkout-inputBox-error'>Please enter a valid Street</span>}
            </div>
            <div className='checkout-inputBox'>
                    <input type='text' required="required" value={building} onChange={(e)=>{setBuilding(e.target.value);setToggleCheckoutValidation({...toggleCheckoutValidation,building:true})}}/>
                    <span className='checkout-inputBox-effect'>Building Name</span>
                    {toggleCheckoutValidation.building && <span className='checkout-inputBox-error'>Please enter a valid Building</span>}
            </div>
            <div className='checkout-shipping-double'>
                <div className='checkout-inputBox'>
                    <input type='text' required="required" value={province} onChange={(e)=>{setProvince(e.target.value);setToggleCheckoutValidation({...toggleCheckoutValidation,province:true})}}/>
                    <span className='checkout-inputBox-effect'>Province</span>
                    {toggleCheckoutValidation.province && <span className='checkout-inputBox-error'>Please enter a valid province</span>}
                </div>
                <div className='checkout-inputBox'>
                    <input type='text' required="required" value={district} onChange={(e)=>{setDistrict(e.target.value);setToggleCheckoutValidation({...toggleCheckoutValidation,district:true})}}/>
                    <span className='checkout-inputBox-effect'>District</span>
                    {toggleCheckoutValidation.district && <span className='checkout-inputBox-error'>Please enter a valid District</span>}
                </div>
            </div>
            <div className='checkout-shipping-double'> 
                <div className='checkout-inputBox'>
                    <input type='text' required="required" value={ward} onChange={(e)=>{setWard(e.target.value);setToggleCheckoutValidation({...toggleCheckoutValidation,ward:true})}}/>
                    <span className='checkout-inputBox-effect'>Ward</span>
                    {toggleCheckoutValidation.ward && <span className='checkout-inputBox-error'>Please enter a valid Ward</span>}
                </div>
                <div className='checkout-inputBox'>
                    <input type='text' required="required" value={postal} onChange={(e)=>{setPostal(e.target.value);setToggleCheckoutValidation({...toggleCheckoutValidation,postal:true})}}/>
                    <span className='checkout-inputBox-effect'>Postal code</span>
                    {toggleCheckoutValidation.postal && <span className='checkout-inputBox-error'>Please enter a valid Postal</span>}
                </div>
            </div>
            <div className='checkout-question'>
                <h1>ARRIVING</h1>
                <p className='checkout-question-mark'>?</p>

            </div>

            <div className='checkout-delivery'>
                <h2>STANDARD</h2>
                <p> <BsTruck/>  GHN (Standard delivery)</p>
                <p>FREE</p>
                
            </div>
            <h1>CONTACT INFORMATION</h1>
            <p>We'll use these details to keep you informed on your delivery</p>
            <div className='checkout-inputBox'>
                    <input type='email' required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" value={email} onChange={(e)=>{setEmail(e.target.value);setToggleCheckoutValidation({...toggleCheckoutValidation,m:true})}}/>
                    <span className='checkout-inputBox-effect'>Email</span>
                    {toggleCheckoutValidation.m && <span className='checkout-inputBox-error'>Please enter a valid Email</span>}
            </div>
            <div className='checkout-inputBox'>
                    <input type='text' required="required" pattern="^(?=.*[0-9]).{4,12}$" value={phone} onChange={(e)=>{setPhone(e.target.value);setToggleCheckoutValidation({...toggleCheckoutValidation,p:true})}}/>
                    <span className='checkout-inputBox-effect'>Phone Numbers</span>
                    {toggleCheckoutValidation.p && <span className='checkout-inputBox-error'>Please enter a valid Phone</span>}
            </div>

            <label className='checkout-checkbox-field'>My billing / tax invoice and delivery information are the same.
                    <input type = 'checkbox' id = 'checkout-checkbox-0' required></input>
                    <span className='checkout-checkmark'> <AiOutlineCheck className='checkout-checkmark-icon' size='2rem' /></span>
                    {!checkoutCheckboxValidation[0] &&<span className='checkout-checkbox-error'>Please select one</span>}
            </label>
            <label className='checkout-checkbox-field'>Yes, I am over 16 years old
                    <input type = 'checkbox' id = 'checkout-checkbox-1' required></input>
                    <span className='checkout-checkmark'> <AiOutlineCheck className='checkout-checkmark-icon' size='2rem' /></span>
                    {!checkoutCheckboxValidation[1] &&<span className='checkout-checkbox-error'>Please select one</span>}
            </label>
            <label className='checkout-checkbox-field'>I hereby consent to the transfer, sharing, use, collection and disclosure of my personal data to third parties as set out in the adidas Privacy Policy.
                    <input type = 'checkbox' id = 'checkout-checkbox-2' required></input>
                    <span className='checkout-checkmark'> <AiOutlineCheck className='checkout-checkmark-icon' size='2rem' /></span>
                    {!checkoutCheckboxValidation[2] &&<span className='checkout-checkbox-error'>Please select one</span>}
            </label>
            <label className='checkout-checkbox-field'>I have read, understood and accepted the Privacy Notice and Terms and Conditions.
                    <input type = 'checkbox' id = 'checkout-checkbox-3' required></input>
                    <span className='checkout-checkmark'> <AiOutlineCheck className='checkout-checkmark-icon' size='2rem' /></span>
                    {!checkoutCheckboxValidation[3] &&<span className='checkout-checkbox-error'>Please select one</span>}
            </label>

            <button className='promo-button' onClick={()=>{handleCheckoutCheckboxValidation();setToggleCheckoutValidation({...toggleCheckoutValidation,fname:true,lname:true,street:true,building:true,province:true,district:true,ward:true,postal:true,m:true,p:true})}} >
                <p>REVIEW & PAY</p>
                <div className='button-arrow' >
                <HiOutlineArrowNarrowRight size='3rem'  />
                </div>
            </button>
        </form>
        {cart &&
        <div className='checkout-summary'>
            <h2 className='checkout-summary-title'>Order Summary</h2>
            <div className='checkout-summary-table'>
                <div className='checkout-summary-detail'>
                    <p>{cart.total_item} items</p>
                </div>
                <div className='checkout-summary-detail'>
                    <p>Original Price</p>
                    <p>{cart.total_price}$</p>
                </div>
                <div className='checkout-summary-detail'>
                    <p>Delivery</p>
                    <p>0$</p>
                </div>
                <div className='checkout-summary-detail'>
                    <p>On Sale</p>
                    <p>0$</p>
                </div>
                <div className='checkout-summary-detail'>
                    <p>Total</p>
                    <p>{cart.total_price}$</p>
                </div>
                <p >inclusive of tax</p>
            </div>

            <form >
                <div className='checkout-inputBox'>
                    <input type='text' required="required" onChange={()=>{setToggleCheckoutValidation({...toggleCheckoutValidation,promo:true})}} />
                    <span className='checkout-inputBox-effect'>Enter your promo code</span>
                    {toggleCheckoutValidation.promo && <span className='checkout-inputBox-error'>Please enter a valid Promo-code</span>}
                </div>
                <button className='promo-button' onClick={()=>{setToggleCheckoutValidation({...toggleCheckoutValidation,promo:true})}} >
                    <p>Apply</p>
                    <div className='button-arrow' >
                    <HiOutlineArrowNarrowRight size='3rem'  />
                    </div>
                </button>
            </form>
            <h2 className='checkout-summary-title'>Order Details</h2>
            {cart.order_item.map((item)=>{return (
                <div className='checkout-summary-detail-product'>
                    <img src ={item.detail.main_image}/>
                    <div>
                        <p>{item.detail.productname}. Size: </p>
                        <p>Color: {item.detail.color}</p> 
                        <p>Price: {item.detail.price}$</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                </div>
            )})}


            <p className='checkout-summary-payment'>ACCEPTED PAYMENT METHOD</p>
            <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/paymentmethodsvmp_VN_new_tcm212-713926.png"></img>
        </div>
        }
    </div>
  )
}

export default CheckOut