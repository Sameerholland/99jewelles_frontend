import React from 'react'
import NavBar from '../Naviagations/NavBar'
import { useSelector } from 'react-redux'
import { activestate, loggeduser } from '../Authentication/AuthSlice'
import Profile_Navigation from '../Naviagations/Profile_Navigation'
import Order from '../Profile_Pages/Order'
import Address from '../Profile_Pages/Address'

export default function Profile() {
  const user = useSelector(loggeduser)
  const active = useSelector(activestate)
  return (
    <div>
      <div className='fixed w-full '>
      <NavBar/>
      </div>
      
      |<div className='grid grid-cols-4 pt-20'>
        <div></div>
        <div className='fixed h-screen w-1/4'> 
          <Profile_Navigation />
        </div>
        <div className='col-span-3' style={{display:active==="order"?"block":"none"}}>
        <Order />
        
        </div>
        <div  className='col-span-3' style={{display:active==="Address"?"block":"none"}}>
        <Address/>
        </div>
      </div>
    </div>
  )
}
