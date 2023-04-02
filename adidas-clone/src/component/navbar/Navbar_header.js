import React from 'react'
import { useEffect,useState } from 'react'
import {SlArrowDown} from 'react-icons/sl'


const Navbar_header = () => {
    const [header, setHeader] = useState(true)


    useEffect(()=>{
        const timerID = setInterval(()=>{
            setHeader(prevHeader => !prevHeader)
        },4000)

        return () => clearInterval(timerID)
    },[])
  return (
    <div className='navbar-header' key={Math.random()}>
        {header ? <p>FREE SHIPPING FOR ADICLUB MEMBER</p> : <p>EASY RETURN</p>}
        <div>
            <SlArrowDown/>
        </div>
    </div>
  )
}

export default Navbar_header