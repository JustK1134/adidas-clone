import React from 'react'
import './Navbar.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


import Navbar_header from './Navbar_header'
import { header_icon_vn_flag } from '..'
import { logo } from '..'
import {AiOutlineSearch} from 'react-icons/ai'
import {RxPerson, RxHeart} from 'react-icons/rx'
import {MdOutlineShoppingBag} from 'react-icons/md'
import Navbar_dropdown_content_men from './Navbar_dropdown_content'
import Navbar_dropdown_content_outlet from './Navbar_dropdown_content_outlet'
import Navbar_dropdown_content_women from './Navbar_dropdown_content_women'
import Navbar_dropdown_content_kid from './Navbar_dropdown_content_kid'
import Navbar_dropdown_content_sport from './Navbar_dropdown_content_sport'
import Navbar_dropdown_content_brand from './Navbar_dropdown_content_brand'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'



const Navbar = () => {

    const [show, setShow] =useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [search, setSearch] = useState()
    let {logoutUser, HandleError, handleSearchData} = useContext(AuthContext)
    let navigate = useNavigate()

    const controlNavbar =() =>{
        if (typeof window !== 'undefined'){
            if (window.scrollY < lastScrollY || window.scrollY < 20){
                setShow(false)

            }else{
                setShow(true)

            }
        }
        setLastScrollY(window.scrollY)
    }
    
    useEffect(()=>{
        if(typeof window !== 'undefined'){

            window.addEventListener('scroll', controlNavbar,true);
        }
        return () => window.removeEventListener('scroll', controlNavbar, true);
    },[lastScrollY])


    const handleSearch = async () =>{
        console.log("search:",search)
        let response = await fetch('http://127.0.0.1:8000/api/shop/search',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({"search":search})
        })
        let data = await response.json()
        if (response.status === 200){
            console.log("return data:", data)
            let header_data ={title:"SEARCH",description:search}
            handleSearchData(data, header_data)
            navigate('/shop/search')
        }else{
            HandleError({status: response.status + ":" +response.statusText, detail: data.detail})
            navigate('/error')
        }
    }
  return (
    <div className='nav-adjust'>

    <div className={`navbar ${show && 'hidden'}`}>

        <Navbar_header/>

        <div className='navbar-header-content'>
            <div className='navbar-header-content-top'>
                <p>help</p>
                <p><Link to='/ordertracking' className='click-able'>order tracker</Link></p>
                <p><Link to='/register' className='click-able'>become a member</Link></p>
                <p><Link to='/register' className='click-able'>adiclub</Link></p>
                <p><Link to='/login' className='click-able'>login</Link></p>
                <p onClick={()=>{logoutUser()}}>logout</p>
                <div className='navbar-header-content-top-language'>
                    <img src ={header_icon_vn_flag} alt='vn flag'></img>
                </div>
            </div>
            <div className='navbar-header-content-bot'>
                <div className='navbar-header-content-bot-logo'>
                    <Link to='/'><img src={logo} alt='logo'/></Link>
                    
                </div>
                <div className='navbar-header-content-bot-categories'>
                    <div className='navbar-header-content-bot-categories-hover'>
                        <p className="navbar-bold"><Link to ='/shop' className='click-able'>MEN</Link></p>
                        <div className='line'/>
                        <Navbar_dropdown_content_men/>
                    </div>
                    
                    <div className='navbar-header-content-bot-categories-hover'>
                        <p className="navbar-bold"><Link to ='/shop' className='click-able'>WOMEN</Link></p>
                        <div className='line'/>
                        <Navbar_dropdown_content_women/>
                    </div>
                    
                    <div className='navbar-header-content-bot-categories-hover'>
                        <p className="navbar-bold"><Link to ='/shop' className='click-able'>CHILDREN</Link></p>
                        <div className='line'/>
                        <Navbar_dropdown_content_kid/>
                    </div >

                    <div className='navbar-header-content-bot-categories-hover'>
                        <p className='navbar-normal'><Link to ='/shop' className='click-able'>SPORT</Link></p>
                        <div className='line'/>
                        <Navbar_dropdown_content_sport/>
                    </div>
                    
                    <div className='navbar-header-content-bot-categories-hover'>
                        <p className='navbar-normal'><Link to ='/shop' className='click-able'>BRANDS</Link></p>
                        <div className='line'/>
                        <Navbar_dropdown_content_brand/>
                    </div>
                    
                    <div className='navbar-header-content-bot-categories-hover'>
                        <p className='navbar-normal'><Link to ='/shop' className='click-able'>RELEASE DATE</Link></p>
                        <div className='line'/>
                    </div>
                    
                    <div className='navbar-header-content-bot-categories-hover'> 
                        <p className="navbar-bold"><Link to ='/shop' className='click-able'>OUTLETS</Link></p>
                        <div className='line'/>
                        <Navbar_dropdown_content_outlet/>
                    </div>
                    
                </div>
                <div className='navbar-header-content-bot-input'>
                    <div className='navbar-header-content-bot-input-search'>
                        <input type='text' placeholder='Search' value={search} onChange={(e)=>{setSearch(e.target.value)}}></input>
                        <AiOutlineSearch className='navbar-header-content-bot-input-search-icon' onClick={()=>{handleSearch()}}/>
                    </div>
                    <Link to ='/login' ><RxPerson className='navbar-header-content-bot-input-icon'/></Link>
                    <RxHeart className='navbar-header-content-bot-input-icon' />
                    <Link to ='/cart'><MdOutlineShoppingBag className='navbar-header-content-bot-input-icon'/></Link>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Navbar

