import './App.css'
import Services from './components/Services'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar' // <--- 1. Importamos el nuevo Navbar

function App() {
  return (
    <div className="portfolio-container">
      
      {/* 2. Reemplazamos todo el <header> viejo por esto: */}
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App