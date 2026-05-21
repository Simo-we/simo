import './index.css'
import Nav from './Nav.jsx'
import HeroContent from './HeroContent.jsx'
import Cards from './Cards.jsx'
import Infinite from './infinite.jsx'

function App() {
  return (
    <>
      <Nav />

    
      <section className="hero-section">
        <HeroContent />
        <Cards />
      </section>

     
      <Infinite />
    </>
  )
}

export default App