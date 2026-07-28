import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Departments from './Components/Departments/Departments'
import Accreditations from './Components/Accreditations/Accreditations'
import Partnerships from './Components/Partnerships/Partnerships'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer.jsx/Footer'
import Stats from './Components/Stats/Stats'

function App() {
 
  return (
    <>
          <Navbar/>
          <Hero/>
          <Stats/>
          <About/> 
          <Services/> 
          <Departments/>    
          <Accreditations/>
          <Partnerships/>
          <Contact/>
          <Footer/>
    </>
  )
}

export default App
