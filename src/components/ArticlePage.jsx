import React from 'react'
import profile from"../assets/profilePhoto.png"


function ArticlePage() {
  return (
   <div className=' max-w-full max-h-full mx-[300px] my-[100px] flex flex-col '>
    <div className='flex gap-4 items-center'>
    <img src={profile} className='w-7 h-7'></img>
    <p className='text-center text-[#434343]'>James Smith</p>
    </div>
    <h1 className='text-[27px] font-bold mt-8'>Interview Experience at Microsoft</h1>
    <div className='flex mt-5 gap-8'>
    <p className='text-[#6b6a6a]  text-[14px]' >Oct 2024</p>
    <p className='text-[#6b6a6a]  text-[14px]' >Freshers</p>
    <p className='text-[#6b6a6a]  text-[14px]' >Microsoft</p>

    </div>  
    <p className='text-[#6b6a6a] mt-6'>I recently gave an interview in Microsoft for a freshers role. You won't belive what they asked me</p>
   </div>  )
}

export default ArticlePage