import React from 'react'
import './Shop.css'
import ShopHeader from './ShopHeader'
import ShopMainTemplate from './ShopMainTemplate'
import AuthContext from '../../context/AuthContext'
import { useContext } from 'react'




const data_header = {title: 'Men', division:'Shoes', quantity:'1020', description:"Shop adidas for all styles of men's shoes including casual sneakers, high-performance running shoes, and comfty slide. Browse styles for woman and kids here"}

const ShopSearch = () => {
  let {searchData, searchHeader} = useContext(AuthContext)
  return (
    <div className='shop'>
        <ShopHeader data_header={searchHeader}/>
        <ShopMainTemplate shopData={searchData}/>
        
    </div>
  )
}

export default ShopSearch