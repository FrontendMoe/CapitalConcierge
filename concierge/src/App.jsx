import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './fonts/stylesheet.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)
  const nav = [
    {
      name: 'WELCOME',
      link: '',
    },
    {
      name: 'COMPANY',
      link: 'COMPANY',
      color: '#7D5555',
    },

    {
      name: 'Services',
      link: 'Services',
    },
    {
      name: 'CONTACT',
      link: 'CONTACT',
    },
  ]
  function scrollToSection(sectionId, margin = 50) {
    var section = document.getElementById(sectionId)
    if (section) {
      var sectionTop = section.offsetTop
      window.scrollTo({
        top: sectionTop - margin,
        behavior: 'smooth',
      })
    }
  }
  return (
    <BrowserRouter>
      <div className="py-[56px] bg-[#F6C94B] flex space-x-[83px] justify-center border-black ">
        {nav.map((el) => (
          <Link
            key={el}
            className="cursor-pointer uppercase font-[600]"
            to={el.link}
          >
            {el.name}
          </Link>
        ))}
      </div>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
