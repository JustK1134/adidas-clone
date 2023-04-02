import React from 'react'
import './Login.css'
import {AiOutlineCheck, AiFillFacebook, AiFillGoogleSquare} from 'react-icons/ai'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { useState, useContext } from 'react'
import AuthContext from '../../context/AuthContext'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleLoginSubmit = (e)=>{
        e.preventDefault()
        console.log("email",username)
        console.log("password",password)
    }

    const [toggleLoginValidation, setToggleLoginValidation] = useState({m:false,p:false})

    let {loginUser} = useContext(AuthContext)

  return (
    <div className='login'>
  
            <form className='login-form' onSubmit={loginUser}>
                <h1>LOG IN</h1>
                <p><span>Forgotten your password?</span> </p>
                <div className='inputBox'>
                    <input placeholder=' ' type='text' required="required" value={username} name='username' onChange={(e) => {setToggleLoginValidation({...toggleLoginValidation,m:true});setUsername(e.target.value)}}/>
                    <span className='inputBox-effect'>Email</span>
                    {toggleLoginValidation.m && <span className='inputBox-error'>Please enter a valid e-mail address</span>}
                </div>
                <div className='inputBox'>
                    <input  placeholder=' '  type='password' required="required" value={password} name ='password' onChange={(e)=>{setToggleLoginValidation({...toggleLoginValidation,p:true});setPassword(e.target.value)}} pattern="^(?=.*[a-z])(?=.*[0-9]).{4,12}$"/>
                    <span className='inputBox-effect'>Password</span>
                    {toggleLoginValidation.p && <span className='inputBox-error'>Please enter a valid password.</span>}
                </div>
                <label className='login-checkbox-field'> Keep me logged in. <span>More Info</span>
                    <input type = 'checkbox' id='login-checkbox-field'></input>
                    <span className='login-checkmark'> <AiOutlineCheck className='login-checkmark-icon' size='2rem' /></span>
                    
                </label>
                <button type = 'submit' className='login-button' onClick={()=>{setToggleLoginValidation({m:true,p:true})}}>
                    <p>Login</p>
                    <div className='button-arrow'>
                    <HiOutlineArrowNarrowRight size='3rem'  />
                    </div>
                </button>

                <p>By clicking “LOGIN”, I acknowledge that I have read, understood and accepted the <span>adiClub Terms and Conditions</span>, the <span>Website Terms and Conditions</span> and <span>adidas Privacy Policy</span>, and that I hereby consent to the transfer, sharing, use, collection and disclosure of my personal data to third parties as set out in the <span>adidas Privacy Policy</span>.</p>
                <div className='login-google'>
                    <p>Facebook</p>
                    <AiFillFacebook size='1.5rem' className='login-google-icon'/>
                </div>
                <div className='login-google'>
                    <p>Google</p>
                    <AiFillGoogleSquare size='1.5rem' className='login-google-icon'/>
                </div>
            </form>
            <div className='login-more-info'>
                <h1>JOIN ADICLUB. GET REWARD TODAY.</h1>
                <p>As an adiClub member you get rewarded with what you love for doing what you love. Sign up today and receive immediate access to these Level 1 benefits:</p>
                <div className='login-more-info-list'>
                    <AiOutlineCheck size='1.5rem'/>
                    <p>Free delivery</p>
                </div>
                <div className='login-more-info-list'>
                    <AiOutlineCheck size='1.5rem'/>
                    <p>A 15% off voucher for your next purchase</p>
                </div>
                <div className='login-more-info-list'>
                    <AiOutlineCheck size='1.5rem'/>
                    <p>Access to Members Only products and sales</p>
                </div>
                <div className='login-more-info-list'>
                    <AiOutlineCheck size='1.5rem'/>
                    <p>Special offers and promotions</p>
                </div>
                <p>Join now to start earning points, reach new levels and unlock more rewards and benefits from adiClub.</p>
                <button className='login-button'>
                    <p>JOIN THE CLUB</p>
                    <div className='button-arrow'>
                    <HiOutlineArrowNarrowRight size='3rem'  />
                    </div>
                </button>
                <img src="https://www.adidas.com.vn/glass/react/a0bfb79/assets/img/adiClub-account-register.jpeg"/>
            </div>
        </div>

  )
}

export default Login