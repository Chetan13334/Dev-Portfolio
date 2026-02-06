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

import SmoothScroll from './Component/SubComponent/SmoothScroll'

function App() {
  return (
    <SmoothScroll>
      <PageTransition>
        <CustomCursor />
        <ScrollProgress />
        <NavBar />
        <div className="quantum-scene">
          <QuantumSpace />
          <PlasmaHalo />
          <Home />
          <AboutMe />
          <Pro />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </div>
      </PageTransition>
    </SmoothScroll>
  )
}

export default App

