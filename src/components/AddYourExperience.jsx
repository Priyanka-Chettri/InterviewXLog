import React from 'react'
import { useState } from 'react';
import logo from "../assets/Logo.png"
import copy from "../assets/copy.png"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';
import confetti from '../assets/confetti.png'
import { useRef } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';




function AddYourExperience() {

    const [value, setValue] = useState('');
    const [openAlert, setOpenAlert]=useState(false);
    const [publish, setPublish]=useState(false);

    const [copied, setCopied]=useState(false);
    const inputRef = useRef(null); // Create a ref for the input field
    const [isExploding, setIsExploding] = React.useState(true);
    const [officeName, setOfficeName]=useState('')    
    const [roleName, setRoleName]=useState('')
    const [interviewDate, setInterviewDate]= useState('')
    const placeOfWork=['Google', 'Amazon', 'Oracle', 'IBM', 'Microsoft', 'Other']
    const Roles=['SDE 1', 'SDE 2', 'SDE 3', 'Project Lead', 'Designer', 'Copywriter', 'Other']


    
  console.log(`interview date is ${interviewDate}`)

    const handleOpenAlert=()=>{
        setOpenAlert((prev)=>{
            return !prev;
        })
    }

    const handlePublish=()=>{
        console.log('clcikedd')
       

        setPublish((prev)=>{
            return !prev;
        })
        setOpenAlert(false)
        setCopied(false)
        setValue("")
       
    }

   const handleCopy=()=>{
    inputRef.current.select();
    document.execCommand('copy')
    setCopied((prev)=>{
       return prev=true
    })

   }


  return (
      <div className='flex flex-col  h-screen w-screen overflow-auto overflow-y-scroll relative'>
      <div className='flex justify-between bg-white sm:px-6 pr-[70px] pl-[20px] py-5 border border-b-gray-200 fixed top-0 left-0 right-0 '>
      <Link  to='/home'><img src={logo} className=' w-[300px] h-[30px] object-cover' ></img></Link>
      <div className='flex gap-6 mr-4'>
      <button className='h-10 rounded-2xl border  text-white bg-[#4152f0] p-4 flex justify-center items-center' onClick={handleOpenAlert} >Next</button>
      </div>
      </div>
      <ReactQuill theme="snow" value={value} onChange={(newValue) => setValue(newValue)}  className='mt-[80px] h-screen' />
      {/* <div className='mt-[100px]' 
      dangerouslySetInnerHTML={{ __html: value}}
      />  */}
      
    
      {
     openAlert && 
     <div className='absolute top-[250px] left-[500px] z-10 w-[450px] max-h-full  rounded-lg shadow-md shadow-gray-200 flex flex-col items-center space-y-4 px-10 pb-10 border border-[#4152f0]' >
     <div className='text-[#434343] pl-[380px] mt-3 cursor-pointer' onClick={handleOpenAlert}>&times;</div>

       <div className='flex justify-center items-center mt-10 space-x-4 '>
       <p className='text-[#4152f0] font-bold text-[20px] '>Help us improve the experience. </p>
       </div>
       <p className='text-[#434343]'>Enter few details to publish your blog</p>
       <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-blue-500" onChange={(e)=>{
                setOfficeName(e.target.value)
              }}
              
              value={officeName}
         >
        <option value="" disabled >
            Enter the company name
        </option>
        {placeOfWork.map((officeName)=>{
              console.log(officeName)
              return <option value={officeName} >{officeName}</option>
        })}

      </select>
      {officeName==="Other"
       &&
      <input type='text' className='block appearance-none w-full  bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-blue-500' placeholder='Enter the name'>
      </input>
      }
      
    {/* Enter the role*/}
      <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-blue-500" onChange={(e)=>{
                setRoleName(e.target.value)
              }}
              value={roleName}

              >
        <option value="" disabled>
            Enter the role
        </option>
        {Roles.map((role)=>{
              console.log(role)
              return <option value={role} >{role}</option>
        })}
      </select>
      {roleName==="Other"
       &&
      <input type='text' className='block appearance-none w-full  bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-blue-500' placeholder='Enter the name'>
      </input>
      }
     <input type='date' value={interviewDate} className='block appearance-none w-full  bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-blue-500' placeholder='Enter the name' onChange={(e)=>{
        setInterviewDate(e.target.value)
     }}>
     </input>
     <button className='h-10 rounded-2xl border  text-white bg-[#4152f0] p-4 flex justify-center items-center' onClick={handlePublish} >Publish</button>


      </div>
}

{ publish &&
        <div className='absolute top-[250px] left-[500px] z-10 w-[450px] h-[300px] rounded-lg shadow-md shadow-gray-200 flex flex-col items-center space-y-4 px-5 border border-[#4152f0]' >
         { isExploding && <ConfettiExplosion />}

        <div className='text-[#434343] pl-[380px] mt-3 cursor-pointer' onClick={handlePublish}>&times;</div>
       <div className='flex justify-center items-center mt-10 space-x-4 '>
       <p className='text-[#4152f0] font-bold text-[20px] '>Published </p>
       <img src={confetti} className='h-6 w-6 pb-1'></img> 
       </div>
       <p className='font-bold text-[22px]'>Share your experience </p>
       <p className='text-[#434343]'>Share your experience blog with your friends</p>
        <div className='w-full px-3  '>
        <input 
          type="text" 
          value="https://myexperience"
          className='border w-full p-3 rounded-xl relative'
          ref={inputRef}
        />
       {copied && <p className='text-center mt-4 text-[14px] text-[#4152f0]'>Copied</p>}
        <img src={copy} className='absolute h-4 w-4 top-[204px] z-10 left-[380px]' onClick={handleCopy}></img>
        </div>
      </div>
      }
     
      </div>
     
  )
}

export default AddYourExperience