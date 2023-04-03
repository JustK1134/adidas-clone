import React from 'react'
import './Shop.css'
import {AiOutlineRollback, AiOutlineFilter} from 'react-icons/ai'
import Filter from './Filter'
import { useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ShopHeader = ({data_header}) => {
    let {category} = useParams()
    const [showFilter, SetShowFilter] = useState(false)
    const hideFilterFunction = useCallback(()=>{
        SetShowFilter(false)
    },[])

    let navigate = useNavigate()
    
  return data_header && (
        <div className='shop-header'>
            <div className='shop-header-navigate-page'>
                <h2>  <span onClick={() => navigate(-1)}> <AiOutlineRollback/> BACK</span>  <span onClick={() => navigate('/')}>Home</span> / <span>{category}</span> </h2>
            </div>
            <div className='shop-header-content'>
                <div className='shop-header-title'>
                    <h2>{data_header.title}</h2>
                    <p>[{data_header.quantity}]</p>
                </div>
                <div className='shop-header-description' >
                    <p>{data_header.description}</p>
                    <button className='filter-button' onClick={()=>SetShowFilter(!showFilter)}>
                        <p> Filter & Sort</p>
                        <div className='filter-icon'> <AiOutlineFilter size='1.5rem'/></div>
                    </button>
                </div>
            </div>
            <Filter showFilter = {showFilter} hideFilterFunction = {hideFilterFunction}/>
        </div>
  )
}

export default ShopHeader