import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'


const App = () => {

  return (
    <main className="max-w-7xl mx-auto relative">
    <Navbar/>
    <Hero />

    <About/>
    <Projects/>

    <Contact/>
    <Footer/>

    </main>
  )
}

export default App
