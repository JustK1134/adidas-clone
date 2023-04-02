import React from 'react'
import './MenPopular.css'

const MenPopular = () => {
  return (
    <div className='menpopular'>
        <div className='menpopular-title'>
            <h2>NOW POPULAR IN MEN'S</h2>
        </div>
        <div className='menpopular-content'>
            <div className='menpopular-content-row'>
                <div className='menpopular-content-category'>
                    <p>shoes</p>
                    <div className='menpopular-line'/>
                </div>
                <div className='menpopular-content-category'>
                    <p>sneakers</p>
                    <div className='menpopular-line'/>
                </div>
                <div className='menpopular-content-category'>
                    <p>running shoes</p>
                    <div className='menpopular-line'/>
                </div>
            </div>

            <div className='menpopular-content-row'>
                <div className='menpopular-content-category'>
                    <p>slides</p>
                    <div className='menpopular-line'/>
                </div>
                <div className='menpopular-content-category'>
                    <p>tracksuits</p>
                    <div className='menpopular-line'/>
                </div>
                <div className='menpopular-content-category'>
                    <p>sandals</p>
                    <div className='menpopular-line'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenPopular