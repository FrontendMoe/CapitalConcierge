import { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
const MenuBurger = ({ collapsed }) => {
  useEffect(() => {
    let menuBtn = document.querySelector('.menu-btn')

    if (collapsed !== '') menuBtn.classList?.toggle('active')
  }, [collapsed])
  useEffect(() => {
    let menuBtn = document.querySelector('.menu-btn')
    menuBtn.classList?.toggle('active')
  }, [])
  return (
    <header className="flex items-center">
      <p
        style={{ color: collapsed ? '#F6C94B' : '#fff' }}
        className="text-[#FFF7DF] text-[11px] font-[600] tracking-[5.118px]"
      >
        {collapsed ? 'CLOSE' : 'MENU'}
      </p>
      <div className="menu-btn scale-[60%] cursor-pointer">
        <span
          style={{ borderColor: 'white', backgroundColor: 'white' }}
          className="bar border-white bg-white"
        ></span>
        <span
          style={{ borderColor: 'white', backgroundColor: 'white' }}
          className="bar border-white bg-white"
        ></span>{' '}
        <span
          style={{ borderColor: 'white', backgroundColor: 'white' }}
          className="bar border-white bg-white"
        ></span>
      </div>
    </header>
  )
}

export default MenuBurger
