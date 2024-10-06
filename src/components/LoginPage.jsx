import React from 'react'
import logo from "../assets/Logo.png"
import googleLogo from "../assets/GoogleLogo.png"

function LoginPage() {
  return (
    <div className='flex flex-col items-start h-full pl-[150px] pt-10 '>
      <img src={logo}  className=''></img>
      <h1 className=' text-[40px]'> Welcome back</h1>
      <h1 className='text-[#949594]'>Enter your credentials to access your account</h1>
      <button className='w-[400px] border py-3 rounded-xl flex items-center justify-center mt-6'>
        <span className=''>
          <img src={googleLogo} className='h-6 w-6 inline align-middle'>
          </img>
        </span>
          <span className='ml-5'>
          Log in with Google
          </span>
        </button>
        <div className='flex items-center justify-center text-[#949594] space-x-2 mt-3'>
        <p>_____________________</p>
        <p className='mt-4'>Or</p>
        <p>_____________________</p>
        </div>
       
      <div className='flex flex-col items-start mt-[36px] space-y-2'>
      <label for="inputText">Email Address</label>
      <input type="text" id="inputText" class="text-box w-[400px] h-11 rounded-xl text-left border border-gray-400 p-2" placeholder="Enter email" />
      </div>
      <div className='flex flex-col items-start mt-3 space-y-2'>
      <label for="inputText" className=''>Password</label>
      <input type="text" id="inputText" class="text-box w-[400px] h-11 rounded-xl text-left border border-gray-400 p-2" placeholder="Enter password" />
      </div>
      <button className='mt-[50px] w-[400px] h-11 rounded-xl bg-[#4153f0] text-white'>
        Login
      </button>
      <p className='mt-6 text-[14px]'>
        Don't have an account <span className='text-[#4153f0]'>Sign Up</span>
      </p>
     
    </div>
  )
}

export default LoginPage