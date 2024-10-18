import React, { useState } from 'react'
import logo from "../assets/Logo.png"
import profile from "../assets/profilePhoto.png"
import filter from "../assets/filter.png"
import Categories from './Categories'
import ArticlePreview from './ArticlePreview'
import interviewData from '../InterviewListData'
import { Link } from 'react-router-dom'

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='flex flex-col h-screen w-screen'>
      {/* Navbar */}
      <div className='flex justify-between md:px-6 md:pr-[70px] md:pl-[20px] md:py-5 border bg-white border-b-gray-200 fixed top-0  left-0 right-0 px-[20px] z-20'>
        <img src={logo} className='md:w-[300px] md:h-[30px] object-contain md:object-cover w-[180px] h-[70px] ' alt="Logo" />
        <div className='flex items-center gap-6'>
          <button 
            className='lg:hidden'
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <img src={filter} className='w-6 h-6' alt="Filter" />
          </button>
          <img src={profile} className='w-8 h-8' alt="Profile" />
        </div>
      </div>

      <div className='flex'>
        {/* Sidebar */}
        <div className={`
          ${isSidebarOpen ? 'flex' : 'hidden'} 
          md:flex flex-col md:w-[300px] border border-r-gray-200 border-t-white fixed top-[71px] md:left-0 left-0 right-0 bottom-0
        `}>
          <div className='w-full border border-b-gray-200 border-t-white border-r-white h-[60px]'>
           <div className='flex gap-5  px-4 pt-5'>
              <img src={filter} className='w-6 h-6'></img>
              <p> Filters</p>
            </div>
        </div>
          <Categories categoryName="companies"/>
          <Categories categoryName="roles"/>
          <Categories categoryName="years Of Experience"/>
          
          <Link to="/addmyexperience" className='h-10 rounded-xl border mx-3 my-9 flex justify-center items-center text-white bg-[#4152f0] w-[calc(100%-24px)]'>
             Add your experience
          </Link>
     
        </div>

        {/* Main content */}
        <div className='md:ml-[300px] md:overflow-y-auto md:p-[100px] h-screen sm:p-6 pt-[100px] w-full'>
          {interviewData.map((data, idx) => (
            <ArticlePreview 
              key={idx}
              name={data.name} 
              title={data.title} 
              description={data.description} 
              date={data.date} 
              category={data.category} 
              company={data.company}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage




// import React from 'react'
// import logo from "../assets/Logo.png"
// import profile from "../assets/profilePhoto.png"
// import filter from "../assets/filter.png"
// import Categories from './Categories'
// import ArticlePreview from './ArticlePreview'
// import interviewData from '../InterviewListData'

// function HomePage() {


//   return (
//     <>
//     <div className='flex flex-col  h-screen w-screen'>
//       <div className='flex justify-between bg-white sm:px-6 pr-[70px] pl-[20px] py-5 border border-b-gray-200 fixed top-0 left-0 right-0 '>
//       <img src={logo} className=' w-[300px] h-[30px] object-cover' ></img>
//       <img src={profile} className='w-8 h-8'></img>
//       </div>
//       <div className='flex'>
//        <div className=' flex flex-col w-[300px] border border-r-gray-200 border-t-white fixed top-[70px] left-0'>
//           {/*Filters div*/}
//           <div className='w-full border border-b-gray-200 border-t-white border-r-white h-[60px]'>
//             <div className='flex gap-5  px-4 pt-5'>
//               <img src={filter} className='w-6 h-6'></img>
//               <p> Filters</p>
//             </div>
//           </div>
//           <Categories categoryName="companies"/>
//           <Categories categoryName="roles"/>
//           <Categories categoryName="years Of Experience"/>
          
//           <button className='h-10 rounded-xl border mx-3 my-9 text-white bg-[#4152f0]'>
//             Add your experience
//           </button>        
//        </div>
//        {/* Each article component goes here*/ }

//        <div className=' ml-[300px] overflow-y-auto p-[100px]  w-full'>
//            {interviewData.map((data, idx)=>{
//             return <ArticlePreview name={data.name} title={data.title} description={data.description} date={data.date} category={data.category} company={data.company}/>
//            })
//           }

//        </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default HomePage