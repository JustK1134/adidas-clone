import React from 'react'
import './ProductTemplate.css'
import {AiOutlineRollback} from 'react-icons/ai'
import {MdOutlineExpandLess, MdOutlineExpandMore} from 'react-icons/md'
import { small_image_1 } from '../shop/Data'
import { useState, useRef, useEffect } from 'react'

import { Slide } from 'react-slideshow-image'
import CardProduct2 from '../../component/card_2/CardProduct2'

const inital_image = ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0fbed4646c1d46e0aae0af6901301ff4_9366/Ultraboost_Light_Shoes_White_HQ6351_01_standard.jpg','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/Ultraboost_Light_Shoes_White_HQ6351_02_standard_hover.jpg','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e03d3078d77c489fbb1eaf6901304170_9366/Ultraboost_Light_Shoes_White_HQ6351_03_standard.jpg','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ba851b9b2ce6421597deaf6901304b50_9366/Ultraboost_Light_Shoes_White_HQ6351_04_standard.jpg']
const hidden_image = ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e3edb4fb148945ab9232af6901305939_9366/Ultraboost_Light_Shoes_White_HQ6351_05_standard.jpg','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e192498783574ddb9137af6901302c6c_9366/Ultraboost_Light_Shoes_White_HQ6351_06_standard.jpg','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5359230e4ecd4cc29cf4af6901307d8e_9366/Ultraboost_Light_Shoes_White_HQ6351_09_standard.jpg','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fe7caac982e949ae874baf6901306601_9366/Ultraboost_Light_Shoes_White_HQ6351_41_detail.jpg']


const info_highlight_data = [{title:'midsole', content:"The Ultraboost Light is our lightest ever, made with 30% lighter BOOST material. Each tiny capsule within the midsole works together to deliver epic energy in every stride.",image:'https://assets.adidas.com/images/w_600,f_auto,q_auto/d7b52698d3524f468bebaf90010d6f95_9366/Ultraboost_Light_Shoes_White_HQ6351.jpg'},{title:'upper',content:"Made in part with recycled materials, Ultraboost Light uses Primeknit+ FORGED technology to provide a cushy, sock-like fit that won't slip.", image:'https://assets.adidas.com/images/w_600,f_auto,q_auto/d7b52698d3524f468bebaf90010d6f95_9366/Ultraboost_Light_Shoes_White_HQ6351.jpg'},{title:'outsole',content:"Reinforced with Continental™ Rubber, the lightweight outsole provides grip for all kinds of surfaces, and enough flexibility to ensure a smooth, secure stride.",image:'https://assets.adidas.com/images/w_600,f_auto,q_auto/7df8f5cb35874d6d98b7af90010d72d3_9366/Ultraboost_Light_Shoes_White_HQ6351.jpg'}]
const info_description_data = [{title:'epic energy.lightest ever.', content:'Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date and boasts a 10% lower carbon footprint than previous models (for more information see FAQs below). With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',image:'https://assets.adidas.com/images/w_600,f_auto,q_auto/ba851b9b2ce6421597deaf6901304b50_9366/Ultraboost_Light_Shoes_White_HQ6351.jpg'}]
const info_detail_data =['Regular fit',"Weight:293g","Lace closure","Midsole drop: 10mm","adidas PRIMEKNIT+textile upper","Continental Better Rubber outsole","Textile lining","Yarn in upper contain at least 50%", "Linear Energy push system","Color: Cloud White / Core Black / Solar Red","Light Boost","Product code:HQ6351"]
const faq_data = [{no:0,question:'What is Ultraboost',answer:'Ultraboost Light is the lightest Ultraboost shoe to date. It is a neutral running shoe offering the ultimate cushioned and responsive experience. Its heightened level of comfort and style means the shoe has a versatility that can take its use case beyond the run.'},{no:1,question:'How was the Ultraboost Light midsole produced?',answer:'For many runners, it’s the BOOST midsole that make Ultraboost their go-to shoe for runs where endurance is top priority. Each tiny capsule within the midsole works together to deliver epic energy in every stride. The new Light BOOST material is 30% lighter than the previous BOOST compound, making Ultraboost Light the lightest Ultraboost ever!'},{no:2,question:'What does Energy Return mean?',answer:'The magic lies in the Light BOOST midsole, a new generation of adidas BOOST with even more energy return. Its unique molecule design achieves the lightest BOOST foam to date. The linear energy point delivers a high level of responsiveness as the foot transitions through the gait cycle.'},{no:3,question:'What is the Ultraboost Light used for?',answer:'Ultraboost Light footwear is designed for running first and foremost.&nbsp;Just like previous versions, Ultraboost Light is the product of several rounds of rigorous wear tests by athletes who need top performance from their running footwear.&nbsp;The lightweight outsole provides grip for all kinds of weather and surfaces, and enough flexibility to move in harmony with the midsole for a smooth, secure stride.'},{no:4,question:'What does 10% lower carbon footprint than previous Ultraboost mean?',answer:"From raw material extraction, processing, and packaging, all the way to the end of the product's life, we calculate and communicate its carbon footprint, conforming to an internationally recognized standard: ISO 14067. To reduce our footprint, we need to measure it. The concise footprint results made available to you, cover the complete lifecycle of the product. This is just one of our initiatives to help reduce our footprint."}]

const RightPart = ({productData, defaulFaqState}) => {

  const [showMoreImage, setShowMoreImage] = useState(false)
  const [showHightLights, setShowHighLights] = useState(false)
  const [showDescription, setShowDescription] = useState(false)
  const [showDetails, setShowDetails] = useState(false)




  const [showFAQ, setShowFAQ] = useState(defaulFaqState)


  const handleFaq = (no)=>{
    let new_array = [...showFAQ]
    new_array[no] = !new_array[no]
    setShowFAQ(new_array)
  }

  const slideRef_7 = useRef()
  const slideRef_8 = useRef()
  const slideRef_9 = useRef()




  


  console.log("render right part")


  return (
    <div id ='right' className='product-template-right'>
        <div className='product-template-right-header'>
          <div className='product-template-right-header-navigation'>
            <div><AiOutlineRollback/> <span>Back</span>  </div>
            <p><span>Home</span> / <span>Running</span> / <span>Shoes</span></p>
          </div>

          <div className='product-template-right-header-inital-image'>
            {productData && productData.product_image_initial.map((item)=>{return <img src={item} alt={item} className='product-template-right-image'/>})}
          </div>
          {showMoreImage &&
          <div className='product-template-right-header-inital-image'>
            {productData && productData.product_image_hidden.map((item)=>{return <img src={item} alt={item} className='product-template-right-image'/>})}
          </div>
          }
          {!showMoreImage ? 
          <button className='product-template-right-header-showmore' onClick={()=>setShowMoreImage(!showMoreImage)} >
            <p>Show more</p>
            <MdOutlineExpandMore size='2rem'/>
          </button>
          :
          <button className='product-template-right-header-showmore' onClick={()=>setShowMoreImage(!showMoreImage)}>
            <p>Show less</p>
            <MdOutlineExpandLess size='2rem'/>
          </button>
          } 
        </div>

        {productData && 
        <div className='product-template-right-color'>
          <p>{productData.sublink.length} colors available</p>
          <div>
            {productData.sublink.map((item)=>{return <img src ={item.small_img} alt={item.small_img} className='product-template-right-color-small-image'/>})}
          </div>
        </div>
        }

        <div className='product-template-right-infomation'>

          {productData && productData.product_info_highlight[0].title !== 'None' &&
          <div className='product-template-right-infomation-hightlight'>
            
            <div className='product-template-right-infomation-hightlight-toggle'> <p>Hightlights</p> {showHightLights ? <MdOutlineExpandLess className='showinfo-button' size='2rem' onClick={()=>{setShowHighLights(!showHightLights)}}/> :<MdOutlineExpandMore className='showinfo-button' size='2rem' onClick={()=>{setShowHighLights(!showHightLights)}}/> } </div>
            
            
            {showHightLights && productData.product_info_highlight.map((item)=>{return (
            <div className='section'>
              <div className='product-template-right-infomation-hightlight-content'>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
              <img src={item.image} alt={item.image} className='product-template-right-infomation-hightlight-image' />
            </div>
            ) })}
          </div>
          }

          {productData && productData.product_info_description[0].title !== 'None' &&
          <div className='product-template-right-infomation-hightlight'>
            <div className='product-template-right-infomation-hightlight-toggle'> <p>Description</p> {showDescription ? <MdOutlineExpandLess className='showinfo-button' size='2rem' onClick={()=>{setShowDescription(!showDescription)}}/> :<MdOutlineExpandMore className='showinfo-button' size='2rem' onClick={()=>{setShowDescription(!showDescription)}}/> } </div>
            {showDescription && productData.product_info_description.map((item)=>{return (
            <div className='section'>
              <div className='product-template-right-infomation-hightlight-content'>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
              <img src={item.image} alt={item.image} className='product-template-right-infomation-hightlight-image' />
            </div>
            ) })}
          </div>
          }


          {productData && productData.product_info_detail[0] !== "None" &&
          <div className='product-template-right-infomation-hightlight'>
              <div className='product-template-right-infomation-hightlight-toggle'> <p>Detail</p>  {showDetails ? <MdOutlineExpandLess className='showinfo-button' size='2rem' onClick={()=>{setShowDetails(!showDetails)}}/> :<MdOutlineExpandMore className='showinfo-button' size='2rem' onClick={()=>{setShowDetails(!showDetails)}}/> }  </div>
              <ul className='product-template-right-detail-list'>
              {showDetails && productData.product_info_detail.map((item)=>{return (<li>{item}</li>)})}
              </ul>
          </div>
          }
        </div>
        
        {productData && productData.product_info_faq[0].question !== 'None' && 
        <div className='product-template-right-faq'>
          <h2>FAQ</h2>
          <div className='product-template-right-faq-content'>
              {productData.product_info_faq.map((item) =>{return (
                <div className='product-template-right-faq-item'>
                  <div className='product-template-right-faq-item-question'>
                    <p>{item.question}</p>
                    {showFAQ[item.no] ? <MdOutlineExpandLess className='showinfo-button' size='2rem' onClick={()=>{handleFaq(item.no)}}/> :<MdOutlineExpandMore className='showinfo-button' size='2rem' onClick={()=>{handleFaq(item.no)}}/> }
                  </div>
                  {showFAQ[item.no] && <p className='product-template-right-faq-item-answer' >{item.answer}</p>}
                </div>
              )})}
          </div>
        </div>
        }

        <div className='also-like'>
          <h2>YOU MAY ALSO LIKE</h2>
          <Slide ref={slideRef_7} autoplay='false' slidesToShow={1} >
            <div className='product-template-right-slideshow'>
                <CardProduct2 image = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb1316406e584892bdb3a991001bd46d_9366/F35543_01_standard.jpg" price='2,000,000' product='adidas Astir Sandals' categories= 'Women Originals'/>
                <CardProduct2 image = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb1316406e584892bdb3a991001bd46d_9366/F35543_01_standard.jpg" price='2,000,000' product='adidas Astir Sandals' categories= 'Women Originals'/>
                <CardProduct2 image = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb1316406e584892bdb3a991001bd46d_9366/F35543_01_standard.jpg" price='2,000,000' product='adidas Astir Sandals' categories= 'Women Originals'/>
            </div>
          </Slide>
        </div>

        <div className='also-like'>
          <h2>OTHERS ALSO BOUGHT</h2>
          <Slide ref={slideRef_8} autoplay='false' slidesToShow={1} >
            <div className='product-template-right-slideshow'>
                <CardProduct2 image = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb1316406e584892bdb3a991001bd46d_9366/F35543_01_standard.jpg" price='2,000,000' product='adidas Astir Sandals' categories= 'Women Originals'/>
                <CardProduct2 image = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb1316406e584892bdb3a991001bd46d_9366/F35543_01_standard.jpg" price='2,000,000' product='adidas Astir Sandals' categories= 'Women Originals'/>
                <CardProduct2 image = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb1316406e584892bdb3a991001bd46d_9366/F35543_01_standard.jpg" price='2,000,000' product='adidas Astir Sandals' categories= 'Women Originals'/>
            </div>
          </Slide>
        </div>

        <div className='also-like'>
          <h2>RECENTLY VIEW ITEM</h2>
          <Slide ref={slideRef_9} autoplay='false' slidesToShow={1} >
            <div className='product-template-right-slideshow'>
                <CardProduct2 image = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb1316406e584892bdb3a991001bd46d_9366/F35543_01_standard.jpg" price='2,000,000' product='adidas Astir Sandals' categories= 'Women Originals'/>
                <CardProduct2 image = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb1316406e584892bdb3a991001bd46d_9366/F35543_01_standard.jpg" price='2,000,000' product='adidas Astir Sandals' categories= 'Women Originals'/>
                <CardProduct2 image = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb1316406e584892bdb3a991001bd46d_9366/F35543_01_standard.jpg" price='2,000,000' product='adidas Astir Sandals' categories= 'Women Originals'/>
            </div>
          </Slide>
        </div>

    </div>
  )
}

export default RightPart