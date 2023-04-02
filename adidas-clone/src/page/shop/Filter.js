import React, { useState } from 'react'
import './Filter.css'
import {RxCross1} from 'react-icons/rx'
import {MdOutlineExpandLess, MdOutlineExpandMore} from 'react-icons/md'
import ReactSlider from 'react-slider'
import styled from 'styled-components';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'


const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 10px;
`;
const StyledThumb = styled.div`
    height: 15px;
    width: 15px;

    
    font-size: 0px;
    background-color: #fff;
    border: solid #000 1px;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
`;

const Thumb = (props, state) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;

const StyledTrack = styled.div`
    top: 7px;
    bottom: 0px;
    background: ${props => (props.index === 2 ? '#ddd' : props.index === 1 ? '#000' : '#ddd')};
    border-radius: 999px;
`;
const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const Filter = ({showFilter, hideFilterFunction}) => {
    


    const [priceRange, setPriceRange] = useState([0, 20000000])

    const [filterSort, setFilterSort] = useState(false)
    const [filterDivision, setFilterDivision] = useState(false)
    const [filterSport, setFilterSport] = useState(false)
    const [filterProduct, setFilterProduct] = useState(false)
    const [filterColor, setFilterColor] = useState(false)
    const [filterSize, setFilterSize] = useState(false)
    const [filterPrice, setFilterPrice] = useState(false)



    const [priceLowHigh, setPriceLowHigh] = useState(true)
    const [priceHighLow, setPriceHighLow] = useState(true)

    const [shoes, setShoes] = useState(true)
    const [clothing, setClothing] = useState(true)
    const [accessory, setAccessory] = useState(true)

    const [lifeStyle, setLifeStyle] = useState(true)
    const [running, setRunning] = useState(true)
    const [training, setTraining] = useState(true)
    const [basketball, setBasketball] = useState(true)

    const [sneakers, setSneakers] = useState(true)
    const [tShirts, setTShirts] = useState(true)
    const [sock, setSock] = useState(true)
    const [hoodies, setHoodies] = useState(true)

    const [black, setBlack] = useState(true)
    const [red, setRed] = useState(true)
    const [white, setWhite] = useState(true)
    const [blue, setBlue] = useState(true)
    const [yellow, setYellow] = useState(true)

    const [size_10, setSize_10] = useState(true)
    const [size_5, setSize_5] = useState(true)
    const [size_11, setSize_11] = useState(true)
    const [size_6, setSize_6] = useState(true)
    const [size_12, setSize_12] = useState(true)
    const [size_7, setSize_7] = useState(true)
    const [size_8, setSize_8] = useState(true)
    const [size_9, setSize_9] = useState(true)

    const [filterList, setFilterList] = useState([])


    const handleRemoveFilter = (filter) =>{
        switch (filter) {
            case 'price(low-high)':
                setPriceLowHigh(!priceLowHigh);
                break;
            case 'price(high-low)':
                setPriceHighLow(!priceHighLow);
                break;
            case 'shoes':
                setShoes(!shoes);
                break;
            case 'clothing':
                setClothing(!clothing);
                break;
            case 'accessory':
                setAccessory(!accessory)
                break
            case 'lifestyle':
                setLifeStyle(!lifeStyle)
                break
            case 'running':
                setRunning(!running)
                break;
            case 'training':
                setTraining(!training)
                break;
            case 'basketball':
                setBasketball(!basketball)
                break;
            case 'sneakers':
                setSneakers(!sneakers)
                break;
            case 'tshirts':
                setTShirts(!tShirts)
                break
            case 'sock':
                setSock(!sock)
                break;
            case 'hoodies':
                setHoodies(!hoodies)
                break
            case 'black':
                setBlack(!black)
                break;
            case 'red':
                setRed(!red)
                break;
            case 'white':
                setWhite(!white)
                break;
            case 'blue':
                setBlue(!blue)
                break;
            case 'yellow':
                setYellow(!yellow)
                break;
            case '10 uk':
                setSize_10(!size_10)
                break;
            case '5 uk':
                setSize_5(!size_5)
                break;
            case '11 uk':
                setSize_11(!size_11)
                break;
            case '6 uk':
                setSize_6(!size_6)
                break;
            case '12 uk':
                setSize_12(!size_12)
                break;
            case '7 uk':
                setSize_7(!size_7)
                break;
            case '8 uk':
                setSize_8(!size_8)
                break;
            case '9 uk':
                setSize_9(!size_9)
                break;
            default:
                break;
        }  
    }

    let {HandleError, handleFilterData} = useContext(AuthContext)
    let navigate = useNavigate()

    const handleSubmitFilter = async () =>{
        console.log(filterList)
        let filterListModified = {sort:[], division:[], sport:[], type:[], color:[], size:[]}
        let filterString = ''
        for (let i = 0; i<filterList.length; i++){
            if (filterList[i] === 'price(low-high)' || filterList[i] === 'price(high-low)'){
                filterListModified.sort.push(filterList[i].charAt(0).toUpperCase() + filterList[i].slice(1))
            }else if(filterList[i] === 'shoes' || filterList[i] === 'clothing' || filterList[i] === 'accessory'){
                filterListModified.division.push(filterList[i].charAt(0).toUpperCase() + filterList[i].slice(1))
            }else if(filterList[i] === 'lifestyle' || filterList[i] === 'running' || filterList[i] === 'training' || filterList[i] === 'basketball'){
                filterListModified.sport.push(filterList[i].charAt(0).toUpperCase() + filterList[i].slice(1))
            }else if(filterList[i] === 'sneakers' || filterList[i] === 'tshirts' || filterList[i] === 'sock' || filterList[i] === 'hoodies'){
                filterListModified.type.push(filterList[i].charAt(0).toUpperCase() + filterList[i].slice(1))
            }else if(filterList[i] === 'black' || filterList[i] === 'red' || filterList[i] === 'white' || filterList[i] === 'blue' || filterList[i] === 'yellow'){
                filterListModified.color.push(filterList[i].charAt(0).toUpperCase() + filterList[i].slice(1))
            }else if(filterList[i] === '5 uk' || filterList[i] === '6 uk' || filterList[i] === '7 uk' || filterList[i] === '8 uk' || filterList[i] === '9 uk' || filterList[i] === '10 uk' || filterList[i] === '11 uk' || filterList[i] === '12 uk'){
                filterListModified.size.push("size_"+filterList[i].replace(/\s+/g, '').toUpperCase())
            }

            filterString = filterString + filterList[i] + "+"
        }
        console.log(filterListModified)
        console.log("price range:",priceRange)
        filterListModified.price = priceRange

        let response = await fetch('http://127.0.0.1:8000/api/shop/filter',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(filterListModified),
        })
        let data = await response.json()
        if (response.status === 200){
            console.log("return filter data:", data)
            let header_data = {title:"FILTER", description:filterString}
            handleFilterData(data, header_data)
            navigate('/shop/filter')
        }else{
            console.log("response status:", response.status)
            HandleError({status: response.status + ":" + response.statusText, detail: data.detail})
            navigate('/error')
        }
    }
    

  return (
    <div className={showFilter ? 'filter-show' : 'filter-hide'}>
        <div className='filter'>
            <div className='filter-header'>
                <h2>Filter & Sort</h2>
                <div>
                    <p onClick={()=>{filterList.map((item)=>{handleRemoveFilter(item)}); setFilterList([])}}>Clear all</p>
                    <RxCross1 size='1.5rem' className='filter-cross-removeall' onClick={hideFilterFunction} />
                </div>
            </div>

            <div className='filter-applied'>
                <h3>Applied filters</h3>
                <div className='filter-applied-item'>
                    <div>
                        <RxCross1 className='filter-cross-remove'/>
                        <p>Men</p>
                    </div>
                    {filterList.map((item)=>{return <div>
                        <RxCross1  className='filter-cross-remove' onClick={()=>{setFilterList(filterList.filter(i=>i!==item));handleRemoveFilter(item)}}/>
                        <p>{item}</p>
                    </div>})}
                </div>

            </div>

            <div className='filter-sort'>
                <div className='filter-sort-title'>
                    <h3>SORT BY</h3>

                    {filterSort ? <MdOutlineExpandLess className='less-more-button' onClick={()=>setFilterSort(!filterSort)} size='2rem'/> : <MdOutlineExpandMore className='less-more-button' onClick={()=>setFilterSort(!filterSort)} size='2rem'/>}
                </div>
                {filterSort &&
                <div className='filter-sort-description'>
                    <label className='checkbox-field_3'>
                        <input type="checkbox" checked = {!priceLowHigh} value='price(low-high)' onChange={(e)=>{setPriceLowHigh(!priceLowHigh); if(priceLowHigh){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/> <span className='checkmark3'>PRICE (LOW-HIGH)</span>
                    </label>
                      <label className='checkbox-field_3'>
                        <input type="checkbox" checked = {!priceHighLow}  value='price(high-low)' onChange={(e)=>{setPriceHighLow(!priceHighLow); if(priceHighLow){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/> <span className='checkmark3'>PRICE (HIGH-LOW)</span>
                    </label>
                </div>
                }

            </div>

            <div className='filter-checkbox'>
                <div className='filter-checkbox-title'>
                    <h3>DIVISION</h3>
                    {filterDivision ? <MdOutlineExpandLess className='less-more-button' size='2rem' onClick={()=>setFilterDivision(!filterDivision)}/> : <MdOutlineExpandMore className='less-more-button' size='2rem' onClick={()=>setFilterDivision(!filterDivision)}/>}
                </div>
                {filterDivision &&
                <div className='filter-checkbox-description'>
                    <label className='checkbox-field'>Shoes
                        <input type="checkbox"  checked = {!shoes} value='shoes' onChange={(e)=>{setShoes(!shoes); if(shoes){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}} />
                        <span className="checkmark"></span>
                    </label>
                    <label className='checkbox-field'>Clothing
                        <input type="checkbox"  checked = {!clothing} value='clothing' onChange={(e)=>{setClothing(!clothing); if(clothing){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className='checkbox-field'>Accessory
                        <input type="checkbox"  checked = {!accessory} value='accessory' onChange={(e)=>{setAccessory(!accessory); if(accessory){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                }
            </div>

            <div className='filter-checkbox'>
                <div className='filter-checkbox-title'>
                    <h3>SPORT</h3>
                    {filterSport ? <MdOutlineExpandLess className='less-more-button' size='2rem' onClick={()=>setFilterSport(!filterSport)}/> : <MdOutlineExpandMore className='less-more-button' size='2rem' onClick={()=>setFilterSport(!filterSport)}/>}
                </div>
                {filterSport &&
                <div className='filter-checkbox-description'>
                    <label className='checkbox-field'>LifeStyle
                        <input type="checkbox" checked = {!lifeStyle} value='lifestyle' onChange={(e)=>{setLifeStyle(!lifeStyle); if(lifeStyle){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className='checkbox-field'>Running
                        <input type="checkbox"  checked = {!running} value='running' onChange={(e)=>{setRunning(!running); if(running){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className='checkbox-field'>Training
                        <input type="checkbox"  checked = {!training} value='training' onChange={(e)=>{setTraining(!training); if(training){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className='checkbox-field'>Basketball
                        <input type="checkbox"  checked = {!basketball} value='basketball' onChange={(e)=>{setBasketball(!basketball); if(basketball){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                }
            </div>
            <div className='filter-checkbox'>
                <div className='filter-checkbox-title'>
                    <h3>PRODUCT TYPE</h3>
                    {filterProduct ? <MdOutlineExpandLess className='less-more-button' size='2rem' onClick={()=>{setFilterProduct(!filterProduct)}}/> : <MdOutlineExpandMore className='less-more-button' size='2rem' onClick={()=>{setFilterProduct(!filterProduct)}}/> }
                </div>
                {filterProduct &&
                <div className='filter-checkbox-description'>
                    <label className='checkbox-field'>Sneakers
                        <input type="checkbox"  checked = {!sneakers} value='sneakers' onChange={(e)=>{setSneakers(!sneakers); if(sneakers){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className='checkbox-field'>T-Shirts
                        <input type="checkbox"  checked = {!tShirts} value='tshirts' onChange={(e)=>{setTShirts(!tShirts); if(tShirts){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className='checkbox-field'>Socks
                        <input type="checkbox"  checked = {!sock} value='sock' onChange={(e)=>{setSock(!sock); if(sock){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className='checkbox-field'>Hoodies
                        <input type="checkbox" checked = {!hoodies} value='hoodies' onChange={(e)=>{setHoodies(!hoodies); if(hoodies){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                }
            </div>

            <div className='filter-checkbox'>
                <div className='filter-checkbox-title'>
                    <h3>COLOR</h3>
                    {filterColor ? <MdOutlineExpandLess className='less-more-button' size='2rem' onClick={()=>{setFilterColor(!filterColor)}}/> : <MdOutlineExpandMore className='less-more-button' size='2rem' onClick={()=>{setFilterColor(!filterColor)}}/>}
                </div>
                {filterColor &&
                <div className='filter-checkbox-description'>
                    <label className='checkbox-field'>Black
                        <input type="checkbox" checked = {!black} value='black' onChange={(e)=>{setBlack(!black); if(black){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className='checkbox-field'>Red
                        <input type="checkbox"  checked = {!red} value='red' onChange={(e)=>{setRed(!red); if(red){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className='checkbox-field'>White
                        <input type="checkbox"  checked = {!white} value='white' onChange={(e)=>{setWhite(!white); if(white){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className='checkbox-field'>Blue
                        <input type="checkbox"  checked = {!blue} value='blue' onChange={(e)=>{setBlue(!blue); if(blue){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className='checkbox-field'>Yellow
                        <input type="checkbox"  checked = {!yellow} value='yellow' onChange={(e)=>{setYellow(!yellow); if(yellow){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                }
            </div>

            <div className='filter-size'>
                <div className='filter-size-title'>
                    <h3>SIZE</h3>
                    {filterSize ? <MdOutlineExpandLess className='less-more-button' size='2rem' onClick={()=>setFilterSize(!filterSize)}/> : <MdOutlineExpandMore className='less-more-button' size='2rem' onClick={()=>setFilterSize(!filterSize)}/>}
                </div>
                {filterSize &&
                <div className='filter-size-description'>
                    <label className='checkbox-field_2'>5 UK
                        <input type="checkbox" checked = {!size_5} value='5 uk' onChange={(e)=>{setSize_5(!size_5); if(size_5){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/> <span className='checkmark2'>5 UK</span>
                    </label>
                    <label className='checkbox-field_2'>6 UK
                        <input type="checkbox" checked = {!size_6} value='6 uk' onChange={(e)=>{setSize_6(!size_6); if(size_6){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/> <span className='checkmark2'>6 UK</span>
                    </label>    
                    <label className='checkbox-field_2'>7 UK
                        <input type="checkbox" checked = {!size_7} value='7 uk' onChange={(e)=>{setSize_7(!size_7); if(size_7){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/> <span className='checkmark2'>7 UK</span>
                    </label>
                    <label className='checkbox-field_2'>8 UK
                        <input type="checkbox" checked = {!size_8} value='8 uk' onChange={(e)=>{setSize_8(!size_8); if(size_8){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/> <span className='checkmark2'>8 UK</span>
                    </label>
                    <label className='checkbox-field_2'>9 UK
                        <input type="checkbox" checked = {!size_9} value='9 uk' onChange={(e)=>{setSize_9(!size_9); if(size_9){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/> <span className='checkmark2'>9 UK</span>
                    </label>
                    <label className='checkbox-field_2'>10 UK
                        <input type="checkbox"  checked = {!size_10} value='10 uk' onChange={(e)=>{setSize_10(!size_10); if(size_10){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/> <span className='checkmark2'>10 UK</span>
                    </label>
                    <label className='checkbox-field_2'>11 UK
                        <input type="checkbox" checked = {!size_11} value='11 uk' onChange={(e)=>{setSize_11(!size_11); if(size_11){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/> <span className='checkmark2'>11 UK</span>
                    </label>
                    <label className='checkbox-field_2'>12 UK
                        <input type="checkbox" checked = {!size_12} value='12 uk' onChange={(e)=>{setSize_12(!size_12); if(size_12){setFilterList([...filterList,e.target.value])} else{setFilterList(filterList.filter(item=>item !== e.target.value))}}}/> <span className='checkmark2'>12 UK</span>
                    </label>
                </div>
                }
            </div>

            <div className='filter-price'>
                <div className='filter-price-title'>
                    <h3>PRICE</h3>
                    {filterPrice ? <MdOutlineExpandLess className='less-more-button' size='2rem' onClick={()=>{setFilterPrice(!filterPrice)}}/> : <MdOutlineExpandMore className='less-more-button' size='2rem' onClick={()=>{setFilterPrice(!filterPrice)}}/>}
                </div>

                {filterPrice &&
                <div className='filter-price-slider'>
                    <p>
                        <span> {priceRange[0]}$ </span> - <span> {priceRange[1]}$ </span>
                    </p>

                    <StyledSlider step = {100000} max = {2000000} defaultValue={priceRange} renderTrack={Track} renderThumb={Thumb} onChange={(value,index)=>{setPriceRange(value)}} />
                </div>
                }
            </div>


            <button className='filter-button-arrow' onClick={()=>{handleSubmitFilter()}}>
              <p>APPLY</p>
              <div >
                <HiOutlineArrowNarrowRight size='1.5rem'   />
              </div>
            </button>


        </div>
    </div>
  )
}

export default Filter