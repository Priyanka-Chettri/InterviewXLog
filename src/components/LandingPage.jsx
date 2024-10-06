import React from 'react'
import landing from "../assets/landing.png"
import LoginPage from './LoginPAge'


function LandingPage() {
  return (
    <div className='w-screen h-screen'>
    <div className='flex pt-[50px] mx-6  h-full pb-6'>
        <div className=' pl-5 w-1/2 flex-1'>
        <LoginPage/>
        </div>
    <img src={landing} className='h-[750px] rounded-xl pb-3 w-1/2 object-contain flex-1'></img>
    </div>
    
    </div>
  )
}

export default LandingPage