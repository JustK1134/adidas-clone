import React from 'react'
import './Login.css'
import {AiOutlineCheck, AiFillFacebook, AiFillGoogleSquare} from 'react-icons/ai'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

const Register = () => {
    const defaultRegisterGender = {register_male:false, register_female:false, register_other:false}
    const [registerGender, setRegisterGender] =useState({register_male:true, register_female:false, register_other:false})
    console.log(registerGender.register_male)
    let {authToken, HandleError} = useContext(AuthContext)
    let navigate = useNavigate()

    const [checkboxValidation, setCheckboxValidation] = useState([true,true,true,true])
    const handleCheckboxValidation = () =>{
        let new_arr_checkbox = [...checkboxValidation]
        new_arr_checkbox[0] = document.getElementById('register-check-age').checked
        new_arr_checkbox[1] = document.getElementById('register-check-confirm_1').checked
        new_arr_checkbox[2] = document.getElementById('register-check-confirm_2').checked
        new_arr_checkbox[3] = document.getElementById('register-check-confirm_3').checked
        setCheckboxValidation(new_arr_checkbox)
        if (new_arr_checkbox[0] === false || new_arr_checkbox[1] === false || new_arr_checkbox[2] === false || new_arr_checkbox[3] === false){
            return false
        }
        return true

    }

    const [checkboxGenderValidation, setCheckboxGenderValidation] = useState(false)
    const handleRegisterGenderValidation = () =>{
        if ( registerGender.register_female === false && registerGender.register_male === false && registerGender.register_other === false){
            return true
        }
        return false
    }
    const handleRegisterSubmit = async () =>{

        let isCheckboxvalid = handleCheckboxValidation()
        setCheckboxGenderValidation(handleRegisterGenderValidation)
        if(isCheckboxvalid === false || (registerGender.register_female === false && registerGender.register_male === false && registerGender.register_other === false)){
            console.log("validate fail")
            return null
        }
        let response = await fetch('http://127.0.0.1:8000/api/authentication/token/register/',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authToken.access),
            },
            body: JSON.stringify({"username":email, "password":password, "firstname":firstName,"lastname":lastName}),
        })
        let data = await response.json()
        console.log(response.status)
        if (response.status === 201){
            HandleError({status: response.status + ":" + response.statusText, detail: data.detail, toshop:true, tohome:true, tologin:true})
            navigate('/success')
        }else{
            HandleError({status: response.status + ":" + response.statusText, detail: data.detail, toregister:true})
            navigate('/error')
        }
        

    }

    const [toggleRegisterValidation, setToggleRegisterValidation] = useState({fname:false,lname:false, m:false,p:false})

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')


  

  return (
    <div className='login'>
        
  
            <form className='login-form' onSubmit={handleRegisterSubmit} >
                <h1>REGISTER</h1>
                <p>Sign up with </p>
                <div className='register-with-google'>
                    <div className='login-google'>
                        <p>Facebook</p>
                        <AiFillFacebook size='1.5rem' className='login-google-icon'/>
                    </div>
                    <div className='login-google'>
                        <p>Google</p>
                        <AiFillGoogleSquare size='1.5rem' className='login-google-icon'/>
                    </div>
                </div>
                <p>OR</p>
                <h2>YOUR NAME</h2>
                <div className='inputBox'>
                    <input  placeholder=' ' type='text' value={firstName} required="required" onChange={(e)=>{setFirstName(e.target.value);setToggleRegisterValidation({...toggleRegisterValidation,fname:true})}}/>
                    <span  className='inputBox-effect'>First Name</span>
                    {toggleRegisterValidation.fname && <span className='inputBox-error'>Please enter a valid First Name</span>}
                </div>
                <div className='inputBox'>
                    <input  placeholder=' ' type='text' value={lastName} required="required" onChange={(e)=>{setLastName(e.target.value);setToggleRegisterValidation({...toggleRegisterValidation,lname:true})}}/>
                    <span  className='inputBox-effect'>Last Name</span>
                    {toggleRegisterValidation.lname && <span className='inputBox-error'>Please enter a valid Last Name</span>}
                </div>

                <h2>GENDER</h2>
                <div className='register-gender'>

                    <label className='register-gender-checkbox-field'> Male
                        <input type = 'checkbox'  checked={registerGender.register_male} onClick={()=>setRegisterGender({...defaultRegisterGender,register_male:!registerGender.register_male})}></input>
                        <span className='register-gender-checkmark'></span>
                    </label>

                    <label className='register-gender-checkbox-field'> Female
                        <input type = 'checkbox'  checked={registerGender.register_female} onClick={()=>setRegisterGender({...defaultRegisterGender,register_female:!registerGender.register_female})}></input>
                        <span className='register-gender-checkmark'></span>
                    </label>

                    <label className='register-gender-checkbox-field'> Other
                        <input type = 'checkbox'  checked={registerGender.register_other} onClick={()=>setRegisterGender({...defaultRegisterGender,register_other:!registerGender.register_other})}></input>
                        <span className='register-gender-checkmark'></span>
                    </label>
                </div>
                {checkboxGenderValidation && <span className='register-gender-checkbox-error'>Please select one</span>}

                <h2>LOGIN DETAILS</h2>
                <div className='inputBox'>
                    <input placeholder=' ' type='email' required="required" value={email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={(e)=>{setEmail(e.target.value);setToggleRegisterValidation({...toggleRegisterValidation,m:true})}}/>
                    <span  className='inputBox-effect'>Email</span>
                    {toggleRegisterValidation.m && <span className='inputBox-error'>Please enter a valid E-mail address</span>}
                </div>
                <div className='inputBox'>
                    <input  placeholder=' ' type='password' required="required" value={password} pattern="^(?=.*[a-z])(?=.*[0-9]).{4,12}$" onChange={(e)=>{setPassword(e.target.value);setToggleRegisterValidation({...toggleRegisterValidation,p:true})}}/>
                    <span  className='inputBox-effect'>Password</span>
                    {toggleRegisterValidation.p && <span className='inputBox-error'>Please enter a valid Password</span>}
                </div>

                <label className='login-checkbox-field'>Yes, I am over 16 years old
                    <input type = 'checkbox' id='register-check-age' ></input>
                    <span className='login-checkmark'> <AiOutlineCheck className='login-checkmark-icon' size='2rem' /></span>
                    {!checkboxValidation[0] &&<span className='login-checkbox-error'>Please select one</span>}
                </label> 
                <label className='login-checkbox-field'>I have read, understood and accepted the <span>adidas Privacy Policy</span>, the <span>adiClub Terms and Conditions</span> and <span>Website Terms and Conditions</span>.
                    <input type = 'checkbox' id='register-check-confirm_1' ></input>
                    <span className='login-checkmark'> <AiOutlineCheck className='login-checkmark-icon' size='2rem' /></span>
                    {!checkboxValidation[1] && <span className='login-checkbox-error'>Please select one</span>}
                </label>
                <label className='login-checkbox-field'> I hereby consent to the use of my personal data for marketing and promotional purposes as set out in the <span>adidas Privacy Policy</span>.
                    <input type = 'checkbox' id='register-check-confirm_2' ></input>
                    <span className='login-checkmark'> <AiOutlineCheck className='login-checkmark-icon' size='2rem' /></span>
                    {!checkboxValidation[2] && <span className='login-checkbox-error'>Please select one</span>}
                </label>
                <label className='login-checkbox-field'> I hereby consent to the transfer, sharing, use, collection and disclosure of my personal data to third parties as set out in the <span>adidas Privacy Policy</span>.
                    <input type = 'checkbox' id='register-check-confirm_3' ></input>
                    <span className='login-checkmark'> <AiOutlineCheck className='login-checkmark-icon' size='2rem' /></span>
                    {!checkboxValidation[3] && <span className='login-checkbox-error'>Please select one</span>}
                </label>
                <button className='login-button' onClick={()=>{setToggleRegisterValidation({fname:true,lname:true, m:true,p:true})}}>
                    <p>REGISTER</p>
                    <div className='button-arrow'>
                    <HiOutlineArrowNarrowRight size='3rem'  />
                    </div>
                </button>

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
                <p>Want to learn more about adiClub?</p>
                <p><span>Read more about free membership</span></p>
                <img src="https://www.adidas.com.vn/glass/react/a0bfb79/assets/img/adiClub-account-register.jpeg"/>
            </div>
        </div>
  )
}

export default Register