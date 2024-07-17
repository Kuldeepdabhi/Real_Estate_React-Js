import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext';
import AOS from 'aos'
import 'aos/dist/aos.css'

const  Contact = () => {
  useEffect(() => {
   AOS.init({
     offset: 200,
     duration: 800,
     essing: 'ease-in-sine',
     delay: 100,
   });
 },[])

 const {darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div>Contact</div>
  )
}

export default Contact