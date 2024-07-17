import React from 'react'
import PopularAreas from './sections/PopularAreas'
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import { DarkModeProvider } from './components/DarkModeContext'
import Properties from './sections/Properties'
import Services from './sections/Services'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './components/footer'


function App() {
  return (
    <>
    <DarkModeProvider>
      <Header/>
      <Hero />
      <About />
      <PopularAreas/>
      <Properties />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </DarkModeProvider>
    </>
  )
}

export default App

