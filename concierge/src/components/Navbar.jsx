import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MenuBurger from './MenuBurger'
import { handleScroll } from '../utils/FadeEffect'
function Navbar() {
  const [collapsed, setCollapsed] = useState(false)

  let location = useLocation()
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    scrollToTop()
  }, [location])
  const nav = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/About',
      color: '#7D5555',
    },

    {
      name: 'Services',
      link: '/Services',
    },
    {
      name: 'CONTACT',
      link: '/CONTACT',
    },
  ]
  useEffect(() => {
    if (collapsed) {
      document.querySelectorAll('.bar').forEach((el) => {
        el.style.backgroundColor = 'black'
      })
    } else {
      document.querySelectorAll('.bar').forEach((el) => {
        el.style.backgroundColor = 'white'
      })
    }
  }, [collapsed])
  const handleScroll2 = () => {
    if (window.scrollY > 50) {
      document.querySelector('#nav').style.backgroundColor = '#0000002f'
    } else {
      document.querySelector('#nav').style.backgroundColor = 'transparent'
    }
  }

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll2)
    handleScroll2()

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll2)
    }
  }, [])
  useEffect(() => {
    handleScroll()
  }, [location])
  return (
    <nav
      id="nav"
      className="mx-auto lg:bg-transparent  z-50 lg:relative w-full fixed top-0 left-0"
    >
      <div className="py-[56px] lg:flex hidden  z-10 items-center  mx-auto top-0 w-fit      space-x-[83px] justify-center border-black ">
        {nav.map((el, index) => (
          <Link
            key={el}
            style={{ backgroundColor: index === nav.length - 1 && '#000' }}
            className={`cursor-pointer uppercase font-[600] ${
              index === nav.length - 1 &&
              'bg-black py-[12px] px-[22px] text-[#F6C94B]'
            }`}
            to={el.link}
          >
            <button>{el.name}</button>
          </Link>
        ))}
      </div>
      <nav className="lg:hidden w-full  ">
        <div
          className=" z-30 w-screen flex  justify-end p-[30px]  relative"
          onClick={() => setCollapsed(!collapsed)}
        >
          <MenuBurger collapsed={collapsed}></MenuBurger>
        </div>
        {collapsed && (
          <div className="fixed z-20 flex flex-col justify-center items-center space-y-[20px] top-0 left-0 w-full h-full bg-[#FFF7DF]">
            {nav.map((el, index) => (
              <Link
                key={el}
                style={{ backgroundColor: index === nav.length - 1 && '#000' }}
                className={`cursor-pointer uppercase font-[600] ${
                  index === nav.length - 1 &&
                  'bg-black py-[12px] px-[22px] text-[#F6C94B]'
                }`}
                to={el.link}
              >
                <button onClick={() => setCollapsed(false)}>{el.name}</button>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </nav>
  )
}

export default Navbar
