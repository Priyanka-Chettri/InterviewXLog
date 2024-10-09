import React from 'react'
import logo from "../assets/Logo.png"
import googleLogo from "../assets/GoogleLogo.png"

function SignUpPage({handleLogin}) {
  return (
    <div className='flex flex-col items-start lg:h-full w-full pl-[10px] pr-[10px] lg:pl-[150px]'>
    <img src={logo}></img>
    <h1 className='text-[20px]  lg:text-[40px]'> Get Started</h1>
    <h1 className='text-[12px] w-fit lg:text-[18px] text-[#949594]'>Create a new account to get started</h1>
    <div className='flex flex-col space-y-3'>
    <div className='flex flex-col items-start lg:mt-[36px]  mt-[25px] space-y-2 text-[12px] lg:text-[17px]'>
    <label for="inputText">Name</label>
    <input type="text" id="inputText" class="text-box lg:w-[400px] w-[280px] h-8 lg:h-11 rounded-xl text-left border p-2" placeholder="Enter Name" />
    </div>
    <div className='flex flex-col items-start space-y-2 text-[12px] lg:text-[17px]'>
    <label for="inputText">Email</label>
    <input type="text" id="inputText" class="text-box lg:w-[400px] w-[280px] h-8 lg:h-11 rounded-xl text-left border p-2" placeholder="Enter email" />
    </div>
    <div className='flex flex-col items-start mt-3 space-y-2 text-[12px] lg:text-[17px]'>
    <label for="inputText" className=''>Password</label>
    <input type="text" id="inputText" class="text-box lg:w-[400px] w-[280px] h-8  lg:h-11 rounded-xl text-left border p-2" placeholder="Enter password" />
    </div>
    <div className='flex flex-col items-start mt-3 space-y-2 text-[12px] lg:text-[17px]'>
    <label for="inputText" className=''> Confirm Password</label>
    <input type="text" id="inputText" class="text-box lg:w-[400px] w-[280px] h-8  lg:h-11 rounded-xl text-left border p-2" placeholder="Enter password" />
    </div>
    </div>
   
    <button className='mt-[40px] lg:w-[400px] w-[280px] lg:h-11 h-8 rounded-xl bg-[#4153f0] text-white text-[12px] lg:text-[17px] hover:scale-105  hover:transition-all'>
     Sign Up
    </button>
    <p className='mt-6 lg:text-[14px] text-[10px]'>
    Have an account? <span className='text-[#4153f0] cursor-pointer'  onClick={handleLogin}>Log In</span>
    </p>
   
  </div>
  )
}

export default SignUpPage