import React from 'react'
import logo from "../assets/Logo.png"
import googleLogo from "../assets/GoogleLogo.png"

function LoginPage({handleLogin}) {
  return (
    <div className='flex flex-col items-start lg:h-full pl-[10px] pr-[10px] lg:pl-[150px] pt-10 '>
      <img src={logo}></img>
      <h1 className='text-[20px]  lg:text-[40px]'> Welcome back</h1>
      <h1 className='text-[12px] w-fit lg:text-[18px] text-[#949594]'>Enter your credentials to access your account</h1>
      
       
      <div className='flex flex-col items-start lg:mt-[36px]  mt-[25px] space-y-2 text-[12px] lg:text-[17px]'>
      <label for="inputText">Email Address</label>
      <input type="text" id="inputText" class="text-box lg:w-[400px] w-[280px] h-8 lg:h-11 rounded-xl text-left border p-2" placeholder="Enter email" />
      </div>
      <div className='flex flex-col items-start mt-3 space-y-2 text-[12px] lg:text-[17px]'>
      <label for="inputText" className=''>Password</label>
      <input type="text" id="inputText" class="text-box lg:w-[400px] w-[280px] h-8  lg:h-11 rounded-xl text-left border p-2" placeholder="Enter password" />
      </div>
      <button className='mt-[50px] lg:w-[400px] w-[280px] lg:h-11 h-8 rounded-xl bg-[#4153f0] text-white text-[12px] lg:text-[17px] hover:scale-105  hover:transition-all'>
        Login
      </button>
     
      <div className='flex items-center justify-center text-[#949594] lg:space-x-2 mt-3'>
        <p className='hidden lg:flex'>_____________________</p>
        <p className='flex lg:hidden pl-5'>______________</p>
        <p className='mt-4 lg:text-[17px] text-[12px]'>Or</p>
        <p className='flex lg:hidden'>______________</p>
        <p className='hidden lg:flex'>_____________________</p>
        </div>
      <button className='lg:w-[400px] w-[280px] lg:h-11 h-8  border py-3 rounded-xl flex items-center justify-center mt-6 hover:scale-105 hover:transition-all'>
        <span className=''>
          <img src={googleLogo} className='lg:h-6 lg:w-6 h-3 w-3 inline align-middle'>
          </img> 
        </span>
          <span className='ml-5 text-[12px] lg:text-[17px]'>
          Log in with Google
          </span>
        </button>
      <p className='mt-6 lg:text-[14px] text-[10px]'>
        Don't have an account? <span className='text-[#4153f0] cursor-pointer'  onClick={handleLogin}>Sign Up</span>
      </p>
     
    </div>
  )
}

export default LoginPage