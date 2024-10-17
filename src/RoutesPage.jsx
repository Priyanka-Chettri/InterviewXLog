import React from 'react'
import LandingPage from "./components/LandingPage"
import {Routes, Route} from "react-router-dom"
import HomePage from "./components/HomePage"
import ArticlePage from './components/ArticlePage'

function RoutesPage() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/signup' element={<LandingPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/article' element={<ArticlePage/>}/>

   </Routes>
  )
}

export default RoutesPage