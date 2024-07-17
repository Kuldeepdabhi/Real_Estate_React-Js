import React, { useEffect } from 'react'
import aboutimg from '../assets/images/about.jpg'
import { useDarkMode } from '../components/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'



const  About = () => {
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
    <section id='about' className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} w-full m-auto lg:px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
      <div>
        <img data-aos="zoom-in"src={aboutimg} alt="about image" className='rounded-2xl lg:w-[500px] lg:h-[600px]'/>
      </div>

      <div className='flex flex-col justify-center items-start gap-8'>
      <h1 data-aos="zoom-in" className=' light:text-black dark:text-red-500 '>WHO WE ARE</h1>
      <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black text-[40x] font-semibold leading-10 dark:text-blue text-4xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
      <p data-aos ="zoom-in" data-aos-delay="200" className='text-xl light:text-white text-gray-600 text-justify' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, maiores repellendus laborum beatae similique tempora rerum numquam placeat voluptates perspiciatis consectetur, commodi necessitatibus dolor fugit!</p>
      <button className='bg-red-600 dark:bg-red-700 hover:bg-black light:hover:bg-white dark:hover:text-white text-lg p-4  text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition duration-300'>READ MORE</button>
      </div>
    </section>
  )
}

export default About