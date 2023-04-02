import React from 'react'
import './ErrorPage.css'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { Link } from 'react-router-dom'

const SuccessPage = () => {
    let {error} = useContext(AuthContext)
  return (
    <div className='error-page'>
        <h1>Congratulation</h1>
        <h2>{error.detail}</h2>
        {error.toshop && <h3>Build your cart. <span><Link to='/shop' className='error-clickable'>Go back to shopping</Link></span> </h3>}
        {error.tologin && <h3><span><Link to='/login' className='error-clickable'>Login</Link></span> </h3>}
        {error.toregister && <h3>Dont have the account?<span><Link to='/register' className='error-clickable'>Join us!</Link></span> </h3>}
        {error.tohome && <h3><span><Link to='/' className='error-clickable'>HOME PAGE</Link></span> </h3>}
        {error.toorderstatus && <h3>YOUR ORDER ID: {error.order_id}. <span><Link to={'/orderstatus/'+error.order_id} className='error-clickable'> VIEW IT</Link></span> </h3>}
    </div>
  )
}

export default SuccessPage