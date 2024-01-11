import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MenuBurger from './MenuBurger'
import { handleScroll } from '../utils/FadeEffect'
import video from '../vid.mp4'
import logo from '../assets/logo.svg'
import navBg from '../assets/navBg.png'
import LogoText from '../assets/LogoText.png'
function Navbar() {
  const [collapsed, setCollapsed] = useState(false)
  const [Height, setHeight] = useState('h-0')
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
      name: 'WELCOME',
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
      link:
        "mailto:email@example.com?subject=I'm%20Interested%20in%20learning%20more%20about%20Capital%20Concierge",
    },
  ]
  useEffect(() => {
    if (collapsed) {
      document.querySelectorAll('.bar').forEach((el) => {
        el.style.backgroundColor = '#F6C94B'
      })
    } else {
      document.querySelectorAll('.bar').forEach((el) => {
        el.style.backgroundColor = 'white'
      })
    }
  }, [collapsed])
  const handleScroll2 = () => {
    if (window.scrollY > 50) {
      document.querySelector('#nav').style.backgroundColor = '#0B0B0B'
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
  }, [location, collapsed])
  useEffect(() => {
    if (collapsed) {
      setHeight('h-full')
    } else {
      setHeight('h-0')
    }
  }, [collapsed])
  return (
    <nav
      id="nav"
      className="mx-auto lg:bg-transparent   z-40 lg:relative w-full fixed top-0 left-0"
    >
      <div
        style={{
          backgroundColor:
            location.pathname.toLowerCase().includes('about') ||
            location.pathname.toLowerCase().includes('services')
              ? '#0B0B0B33'
              : '#0B0B0B',
        }}
        className=" py-[25px] hidden lg:flex bg-[#0B0B0B] border-black   px-[50px] justify-between"
      >
        <div className="flex items-center flex-row-reverse    w-fit space-x-[7px]">
          <div className="flex items-center">
            <img src={logo} className=" w-fit" alt="" />
            {/* <img src={LogoText} alt="" className="w-[93.779px] h-fit" /> */}
          </div>
        </div>
        <div className="   text-[#F8EED3] flex  z-10 items-center   top-0 w-fit     space-x-[83px] justify-end ">
          {nav.map((el, index) =>
            el.link ? (
              <Link
                key={el}
                style={{
                  backgroundColor: index === nav.length - 1 && '#202020',
                }}
                className={`cursor-pointer uppercase font-[600] ${
                  index === nav.length - 1 &&
                  ' py-[12px] px-[22px] text-[#F6C94B]'
                }`}
                to={el.link}
              >
                <div>{el.name}</div>
              </Link>
            ) : (
              <p
                key={el}
                style={{
                  backgroundColor: index === nav.length - 1 && '#202020',
                }}
                className={`cursor-pointer uppercase font-[600] ${
                  index === nav.length - 1 &&
                  'bg-[#202020] py-[12px] px-[22px] text-[#F6C94B]'
                }`}
              >
                <div>{el.name}</div>
              </p>
            ),
          )}
        </div>
      </div>
      <nav
        style={{
          backgroundColor:
            location.pathname.toLowerCase().includes('about') ||
            location.pathname.toLowerCase().includes('services')
              ? '#0B0B0B33'
              : '#0B0B0B',
        }}
        className="lg:hidden w-full  "
      >
        <div className="flex items-center justify-between p-[30px] pt-[70px]">
          <Link to={'/'} className="flex items-center space-x-[7px]">
            <img src={logo} alt="" />
            {/* <img src={LogoText} alt="" className="w-[93.779px] h-fit" /> */}
          </Link>
          <div
            key={'menybar'}
            className=" z-30  w-fit flex  justify-end   relative"
            onClick={() => setCollapsed(!collapsed)}
          >
            <MenuBurger collapsed={collapsed}></MenuBurger>
          </div>
        </div>

        <div
          style={{
            background:
              ' linear-gradient(180deg, #0B0B0B 14.39%, #131212 56.27%, #141414 100%)',
          }}
          id="navMobile"
          className={`fixed  duration-200 z-20 ${Height} flex flex-col justify-center items-center space-y-[20px] top-0 left-0 w-full overflow-hidden bg-[#FFF7DF]`}
        >
          {nav.map((el, index) => (
            <Link
              key={'mob' + index}
              style={{
                backgroundColor: index === nav.length - 1 && '#E9C348',
                color: index === nav.length - 1 ? '#1A1A1A' : '#fff',
              }}
              className={`cursor-pointer uppercase font-[600] ${
                index === nav.length - 1 &&
                'bg-black z-20 py-[12px] text-[#1A1A1A] relative px-[22px] '
              }`}
              to={el.link}
            >
              <div
                className="z-20 text-[11.237px] font-[600] tracking-[5.731px] relative"
                onClick={() => setCollapsed(false)}
              >
                {el.name}
              </div>
            </Link>
          ))}
          <img
            src={navBg}
            className="absolute mix-blend-overlay bottom-0 w-full"
            alt="navbg"
          ></img>
        </div>
      </nav>
    </nav>
  )
}

export default Navbar
