import { useState } from 'react'

import './App.css'
import './fonts/stylesheet.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Company from './pages/Company'
import Footer from './components/Footer'
import About from './pages/About'
function App() {
  return (
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
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/Company" element={<Company></Company>}></Route>
        <Route path="/About" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
