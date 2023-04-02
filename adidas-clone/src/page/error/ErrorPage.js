import React from 'react'
import './ErrorPage.css'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    let {error} = useContext(AuthContext)
  return (
    <div className='error-page'>
        <h1>Error status {error.status}</h1>
        <h2>Error detail: {error.detail}</h2>
        {error.toshop && <h3>Build your cart! <span><Link to='/shop' className='error-clickable'>Back to shopping</Link></span> </h3>}
        {error.tologin && <h3><span><Link to='/login' className='error-clickable'>Login now!</Link></span> </h3>}
        {error.toregister && <h3>Dont have the account?<span><Link to='/register' className='error-clickable'>Join us!</Link></span> </h3>}
        {error.toorder && <h3>Found your Order yet? <span><Link to='/ordertracking' className='error-clickable'>Back to Tracking</Link></span></h3>}
    </div>
  )
}

export default ErrorPage