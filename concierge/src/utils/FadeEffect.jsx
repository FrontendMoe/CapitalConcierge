import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const handleScroll = () => {
  const elements = document.querySelectorAll('p  , button')
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementBottom = element.getBoundingClientRect().bottom
    const windowHeight = window.innerHeight

    // Add 'fadeIn' class when element is inside the view
    if (elementTop < windowHeight && elementBottom >= 0) {
      element.classList.add('fadeIn')
      element.classList.remove('fadeOut')
    } else {
      // Add 'fadeOut' class when element goes out of view
      element.classList.add('fadeOut')
      element.classList.remove('fadeIn')
    }
  })
}
function FadeEffect() {
  const navigate = useNavigate(null)
  useEffect(() => {
    handleScroll()
    // Attach the event listener for scroll
    window.addEventListener('scroll', handleScroll)

    window.addEventListener('resize', handleScroll)
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleScroll)
    }
  }, [])
  useEffect(() => {
    handleScroll()
  }, [navigate])
  return null
}

export { FadeEffect, handleScroll }
