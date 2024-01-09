import { useState } from 'react'

import './App.css'
import './fonts/stylesheet.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Company from './pages/Company'
import Footer from './components/Footer'
import About from './pages/About'
import Services from './pages/Services'
import { FadeEffect } from './utils/FadeEffect'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        {/* <div className="py-[56px] bg-[#F6C94B] flex space-x-[83px] justify-center border-black ">
        {nav.map((el) => (
          <Link
            key={el}
            className="cursor-pointer uppercase font-[600]"
            to={el.link}
          >
            {el.name}
          </Link>
        ))}
      </div> */}
        <FadeEffect></FadeEffect>
        <Navbar></Navbar>
        <Routes>
          <Route path="" element={<Home></Home>}></Route>
          <Route path="/Company" element={<Company></Company>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Services" element={<Services></Services>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App
