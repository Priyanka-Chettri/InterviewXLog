import React, {  useState } from 'react'
import landing from "../assets/svgs/landing.svg"
import SignUpPage from './SignUpPage'
import LoginPage from './LoginPage'


function LandingPage() {

  const[isLogin, setIsLogin]= useState(true);
  
  function handleLogin(){
    setIsLogin((prev)=>!prev);
  }

  return (
    <div className='w-screen h-screen p-5 flex justify-center items-center '>
      <div className='flex pt-[10px] lg:pt-[50px] lg:mx-8 h-full lg:pr-[100px] pb-6 lg:space-x-[120px] justify-center items-center'>
       {isLogin ?  
       <div className='lg:pl-[200px]  lg:flex-1  '>
        <LoginPage handleLogin={handleLogin}/>
        </div> :
        <div className='lg:pl-[200px] lg:flex-1'>
        <SignUpPage handleLogin={handleLogin}/>
        </div>
       }
        
      <img src={landing} className='hidden md:hidden lg:flex lg:max-h-[750px] lg:pr-[100px] rounded-xl pb-3 object-contain lg:flex-1'></img>
      </div>
    </div>
  )
}

export default LandingPage