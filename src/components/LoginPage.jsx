import React from 'react'
import logo from "../assets/Logo.png"
import googleLogo from "../assets/GoogleLogo.png"
import mail from "../assets/mail.png"
import lock from "../assets/lock.png"
import { Link } from 'react-router-dom'

function LoginPage({handleLogin}) {
  
  return (
    <div className='flex flex-col items-start lg:h-full pl-[10px] pr-[10px] lg:pl-[150px] pt-10 '>
      <img src={logo}></img>
      <h1 className='text-[20px]  lg:text-[40px]'> Welcome back</h1>
      <h1 className='text-[12px] w-fit lg:text-[18px] text-[#949594]'>Enter your credentials to access your account</h1>
      
       
      <div className='flex flex-col items-start lg:mt-[36px]  mt-[25px] space-y-2 text-[12px] lg:text-[17px] relative '>
      <label for="inputText">Email Address</label>
      <div class="absolute top-[29px] border border-r-[#949594] border-t-white border-l-white  border-b-white p-2 left-0 flex items-center pl-3 pointer-events-none ml-2 mb-2 pr-4">
        <img src={mail}  alt="Mail Icon" class="w-5 h-5"/>
      </div>
      <input type="text" id="inputText" class="text-box lg:w-[400px] w-[280px] h-8 lg:h-11 rounded-xl border pl-[70px]" placeholder="Enter your email address" />
    </div>
      <div className='flex flex-col items-start mt-3 space-y-2 text-[12px] lg:text-[17px] relative'>
      <label for="inputText" className=''>Password</label>
      <div class="absolute top-[29px] border border-r-[#949594] border-t-white border-l-white  border-b-white p-2 left-0 flex items-center pl-3 pointer-events-none ml-2 mb-2 pr-4">
        <img src={lock}  alt="Mail Icon" class="w-5 h-5"/>
      </div>
      <input type="text" id="inputText" class="text-box lg:w-[400px] w-[280px] h-8  lg:h-11 rounded-xl text-left border pl-[70px]" placeholder="Enter your password" />
      </div>
      <button className='mt-[50px] lg:w-[400px] w-[280px] lg:h-11 h-8 rounded-xl bg-[#4153f0] text-white text-[12px] lg:text-[17px] hover:scale-105  hover:transition-all'>
      <Link to="/home"> Login</Link> 
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
        Don't have an account? <span className='text-[#4153f0] cursor-pointer'  onClick={handleLogin}><Link to="/signup"> Sign Up</Link></span>
      </p>
     
    </div>
  )
}

export default LoginPage