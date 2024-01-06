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
    <header>
      <div className="menu-btn cursor-pointer">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  )
}

export default MenuBurger
