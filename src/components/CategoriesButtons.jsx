import React from 'react'
import filter from "../assets/filter.png"
import { useState } from 'react';

function CategoriesButtons({name, logo}) {

  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    setIsActive((prev) => !prev); // Toggle the active state
  };

  return (
    <>
    <button className={`border flex items-center space-x-2 rounded-md w-fit px-2  py-1 hover:bg-[#d3d6f7] ${isActive? "bg-[#d3d6f7]" : "bg-white"}`} onClick={handleOnClick} >
    {logo ? (
        <img src={logo} className="w-5 h-5" alt={name} />
      ) : (
        <div className="w-0 h-0" /> 
      )}     <span className=''>{name}</span>
      
    </button>
    </>
  )
}

export default CategoriesButtons