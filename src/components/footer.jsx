import React from 'react'
import { useDarkMode } from './DarkModeContext'
import { FaMoon,FaSun } from 'react-icons/fa'
const footer=() => {

  const {darkMode, toggleDarkMode } = useDarkMode();

  return (
     <>
      <div>
       <button onClick={toggleDarkMode} className='flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6'>{darkMode ? <FaMoon size={25} className='text-black'/> : <FaSun size={25} className='text-black' /> }</button>
     </div>
     </>
  )
}

export default footer