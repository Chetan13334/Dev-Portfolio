import { useState } from 'react'
import './App.css'
import Home from './Component/Home'
import NavBar from './Component/NavBar'
import AboutMe from './Component/About'
import Pro from './Component/Project'
import Skills from './Component/Skills'
import Education from './Component/Education'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Pro/>
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
