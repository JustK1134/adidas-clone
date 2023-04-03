import React from 'react'
import './MenPopular.css'
import { useNavigate } from 'react-router-dom'

const MenPopular = () => {
    let navigate = useNavigate()
  return (
    <div className='menpopular'>
        <div className='menpopular-title'>
            <h2>NOW POPULAR IN MEN'S</h2>
        </div>
        <div className='menpopular-content'>
            <div className='menpopular-content-row'>
                <div className='menpopular-content-category' onClick={()=>{navigate('/shop/category/Men-Shoes')}} >
                    <p>shoes</p>
                    <div className='menpopular-line'/>
                </div>
                <div className='menpopular-content-category'onClick={()=>{navigate('/shop/category/Men-Shoes')}}>
                    <p>sneakers</p>
                    <div className='menpopular-line'/>
                </div>
                <div className='menpopular-content-category'onClick={()=>{navigate('/shop/category/Men-Shoes')}}>
                    <p>running shoes</p>
                    <div className='menpopular-line'/>
                </div>
            </div>

            <div className='menpopular-content-row'>
                <div className='menpopular-content-category'onClick={()=>{navigate('/shop/category/Men-Shoes')}}>
                    <p>slides</p>
                    <div className='menpopular-line'/>
                </div>
                <div className='menpopular-content-category'onClick={()=>{navigate('/shop/category/Men-Shoes')}}>
                    <p>tracksuits</p>
                    <div className='menpopular-line'/>
                </div>
                <div className='menpopular-content-category'onClick={()=>{navigate('/shop/category/Men-Shoes')}}>
                    <p>sandals</p>
                    <div className='menpopular-line'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenPopular