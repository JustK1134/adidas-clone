import React from 'react'
import './New_arrivals.css'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

import { useState, useRef } from 'react'
import { Slide } from 'react-slideshow-image';
import NaArrivals from './NaArrivals'
import NaTrending from './NaTrending'
import NaReleaseDate from './NaReleaseDate'
import NaMember from './NaMember'





const defaultNewArrivals = {categories_1:false, categories_2:false, categories_3: false, categories_4:false}

const New_arrivals = () => {

  const [newArrivals, setNewArrival] = useState({categories_1:true, categories_2:false, categories_3: false, categories_4:false })
  const [arrowOrder, setArrowOrder] = useState('arrow_order_1')
  const slideRef_2 = useRef();

  console.log(newArrivals)
  

  const handleOnClickCategory = (category_id) =>{
    switch(category_id){
      case 'categories_1':
        setNewArrival({...defaultNewArrivals, categories_1:true });
        setArrowOrder('arrow_order_1')
        console.log(category_id)
        break;
      case 'categories_2':
        setNewArrival({...defaultNewArrivals, categories_2:true });
        setArrowOrder('arrow_order_2')
        console.log(category_id)
        break;
      case 'categories_3':
        setNewArrival({...defaultNewArrivals, categories_3:true });
        setArrowOrder('arrow_order_3')
        console.log(category_id)
        break;
      case 'categories_4':
        setNewArrival({...defaultNewArrivals, categories_4:true });
        setArrowOrder('arrow_order_4')
        console.log(category_id)
        break;
      default:
        setNewArrival({...defaultNewArrivals, categories_1:true})
        setArrowOrder('arrow_order_1')
    }
    

  }

  return (
    <div className='new_arrivals'>

      <div className='new_arrivals-title'>
        <div className='new_arrivals-title-categories'>
          <div className={arrowOrder}><HiOutlineArrowNarrowRight size='2em'/></div>
          <h2 className={newArrivals.categories_1 ? 'categories_1-enable' : 'categories_1-disable'} id = 'categories_1' onClick={(e)=>handleOnClickCategory(e.target.id)} >New Arrivals</h2>
          <h2 className={newArrivals.categories_2 ? 'categories_2-enable' : 'categories_2-disable'} id = 'categories_2'onClick={(e)=>handleOnClickCategory(e.target.id)} >What's trending</h2>
          <h2 className={newArrivals.categories_3 ? 'categories_3-enable' : 'categories_3-disable'} id = 'categories_3' onClick={(e)=>handleOnClickCategory(e.target.id)} >Release dates</h2>
          <h2 className={newArrivals.categories_4 ? 'categories_4-enable' : 'categories_4-disable'} id = 'categories_4' onClick={(e)=>handleOnClickCategory(e.target.id)} >adiClub Members' Exclusive</h2>
        </div>
        

        <div className='interest-title-arrow'>
            <h3 className='new_arrivals-title-viewall'>VIEW ALL</h3>
            <div className='interest-title-arrow-button' onClick={()=>slideRef_2.current.goBack()} ><IoIosArrowBack size='1.5rem'/></div>
            <div className='interest-title-arrow-button' onClick={()=>slideRef_2.current.goNext()}><IoIosArrowForward size='1.5rem'/></div>
        </div>
      </div>
      
      <div className='new_arrivals-group-card'>
        {newArrivals.categories_1 && 
          <Slide ref ={slideRef_2} arrows={false} autoplay={false} infinite={false} >
            <NaArrivals page = '1' />
            <NaArrivals page = '2' />
          </Slide> }
        {newArrivals.categories_2 && 
          <Slide ref ={slideRef_2} arrows={false} autoplay={false} infinite={false} >
            <NaTrending page = '1' />
            <NaTrending page = '2' />
          </Slide> }
        {newArrivals.categories_3 && 
          <Slide ref ={slideRef_2} arrows={false} autoplay={false} infinite={false} >
            <NaReleaseDate page ='1' />
            <NaReleaseDate page ='2' />
          </Slide> }
        {newArrivals.categories_4 && 
          <Slide ref ={slideRef_2} arrows={false} autoplay={false} infinite={false} >
            <NaMember page ='1' />
            <NaMember page ='2' />
          </Slide> }
      </div>
    </div>
  )
}

export default New_arrivals