import React from 'react'
import CategoriesButtons from './CategoriesButtons'
import CategoriesList from '../CategoriesList'


function Categories({categoryName="companies"}) {

    {/*Take out number of company names along with the logo and then show it in the categories section*/ }
 const categories=CategoriesList[categoryName]
  return (
    <>
    <div className='p-5 flex gap-5 flex-col border border-b-gray-200 border-t-white border-r-white border-dashed'>
     <p>{categoryName.charAt(0).toUpperCase()+categoryName.slice(1)}</p>
     <div className='flex gap-2 flex-wrap'>
     {
       categoryName=="companies"? categories.map((category, idx)=>{
            return <CategoriesButtons key={category.companyName} name={category.companyName} logo={category.companyLogo} />
        }) :
        categories.map((role, idx)=>{
            return <CategoriesButtons key={idx} name={role}  />
        })
     }
     
     </div>
     
     
    </div>
    </>
  )
}

export default Categories