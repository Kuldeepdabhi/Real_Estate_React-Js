import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import heroimg from '../assets/images/hero1.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'


const  Hero = () => {
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
   <>
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-white'}`} >
    <section id='Hero' className='w[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20'
    style={{backgroundImage: `url(${heroimg})`}} >
      <h1 data-aos="zoom-in" className="text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[100px] leading-[100px] text-5xl ">Find your next  Home in Ahmedabad</h1>
      <p data-aos="zoom-in" className='text-white text-xl lg:pr-[500px] pr-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus minima deleniti iusto, repellat alias cum totam magni sit aut explicabo harum quis libero vero ut at amet enim cumque! Amet!</p>
      
    </section>
    
    </div>

    {/* form start from here */}

    <div className={`${darkMode ? 'dark bg-black':'line bg-transplant'} z-10`}>
      <div data-aos="zoom-in" id="form" className={`${darkMode ? 'dark bg-gray-800' : 'light bg-white'} lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}>
  <div className='w-full'>
    <h1 className='text-black font-semibold   light:text-red text-xl'>LOCATION</h1>
    <input type="text" placeholder='Enter an address,state,city or pincode' className='bg-white p-2 w-full  mt-2 border-b-[1px] border-[#c9c7c1]' />
  </div>

  <div className='w-full'>
    <h1 className='text-black font-semibold light:text-white'>Type</h1>
    <select name="selectOption" id="selectOption" className='bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1 ] text-gray-500 text-md'>
      <option value="" disable selected>Select Property</option>
      <option value="Option1">Rentals</option>
      <option value="Option2">Sales</option>
      <option value="Option3">Commercial</option>
    </select>
  </div>
  <div className='w-full'>
    <h1 className='text-black font-semibold light:text-white'>CATEGORY</h1>
    <select name="selectOption" id="selectOption" className='bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1 ] text-gray-500 text-md'>
      <option value="" disable selected>Property Category</option>
      <option value="Option1">Apartment</option>
      <option value="Option2">Duples</option>
      <option value="Option3">Shop</option>
      <option value="Option3">Office</option>
    </select>
  </div>
  <div className='w-full'>
    <button className='bg-red-600 dark:bg-red-700 hover:bg-black light:hover:bg-white dark:hover:text-white text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition duration-300'>SUBMIT</button>

  </div>




      </div>

    </div>
   </>
  )
}

export default Hero







