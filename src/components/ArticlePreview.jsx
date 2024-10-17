import React from 'react'
import profile from"../assets/profilePhoto.png"
import { Link } from 'react-router-dom'

function ArticlePreview({name, title, description, date, category, company}) {
  return (
  
   <div className=' w-full max-h-full p-5 flex flex-col border border-b-gray-200 border-t-white border-l-white border-r-white'>
    <div className='flex gap-4 items-center'>
    <img src={profile} className='w-7 h-7'></img>
    <p className='text-center text-[#434343]'>{name}</p>
    </div>
    <h1 className='text-[27px] font-bold mt-8'>{title}</h1>
    <p className='text-[#6b6a6a] mt-2'>{description}</p>
    <div className='flex mt-5 gap-8'>
    <p className='text-[#6b6a6a]  text-[14px]' >{date}</p>
    <p className='text-[#6b6a6a]  text-[14px]' >{category}</p>
    <p className='text-[#6b6a6a]  text-[14px]' >{company}</p>

    <p className='text-[#6b6a6a]  text-[14px] underline underline-offset-2'><Link to="/article">Read more</Link></p>
    </div>  
   </div>
  
  )
}

export default ArticlePreview