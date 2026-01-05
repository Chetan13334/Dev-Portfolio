import Home from './Component/Home'
import NavBar from './Component/NavBar'
import AboutMe from './Component/About'
import Pro from './Component/Project'
import Skills from './Component/Skills'
import Education from './Component/Education'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import QuantumSpace from './Component/QuantumSpace'
import PlasmaHalo from './Component/PlasmaHalo'
import CustomCursor from './Component/CustomCursor'
import ScrollProgress from './Component/ScrollProgress'
import PageTransition from './Component/PageTransition'

function App() {
  return (
    <PageTransition>
      <div className="quantum-scene">
        <CustomCursor />
        <ScrollProgress />
        <QuantumSpace />
        <PlasmaHalo />
        <NavBar />
        <Home />
        <AboutMe />
        <Pro />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </PageTransition>
  )
}

export default App

