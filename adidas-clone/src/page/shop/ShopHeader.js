import React from 'react'
import './Shop.css'
import {AiOutlineRollback, AiOutlineFilter} from 'react-icons/ai'
import Filter from './Filter'
import { useState, useCallback } from 'react'

const ShopHeader = ({data_header}) => {
    const [showFilter, SetShowFilter] = useState(false)
    const hideFilterFunction = useCallback(()=>{
        SetShowFilter(false)
    },[])
    
  return (
        <div className='shop-header'>
            <div className='shop-header-navigate-page'>
                <h2>  <span> <AiOutlineRollback/> BACK</span>  <span>Home</span> / <span>{data_header.title}</span> / {data_header.division}</h2>
            </div>
            <div className='shop-header-content'>
                <div className='shop-header-title'>
                    <h2>{data_header.title}'s {data_header.division}</h2>
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