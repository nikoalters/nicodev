import './App.css'
import Services from './components/Services'
import Hero from './components/Hero' 
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="portfolio-container">
      {/* Navbar fija sencilla */}
      <header style={{ 
  position: 'fixed', 
  width: '100%', 
  background: 'rgba(5, 5, 5, 0.7)', /* Muy oscuro pero transparente */
  backdropFilter: 'blur(20px)',     /* Desenfoque fuerte estilo Apple/Windows 11 */
  padding: '1.2rem 2rem', 
  zIndex: 100, 
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
}}>
  <nav style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', alignItems: 'center' }}>
    <span style={{ 
      fontWeight: '800', 
      fontSize: '1.5rem', 
      letterSpacing: '-1px',
      background: 'linear-gradient(90deg, #00f3ff, #bd00ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }}>
      NICODEV<span style={{ fontSize: '2rem', lineHeight: 0 }}>.</span>
    </span>
    
    <div style={{ display: 'flex', gap: '2.5rem' }}>
      <a href="#inicio" style={{ textDecoration: 'none', color: '#fff', fontSize: '0.9rem', opacity: 0.8 }}>// INICIO</a>
      <a href="#servicios" style={{ textDecoration: 'none', color: '#fff', fontSize: '0.9rem', opacity: 0.8 }}>// SERVICIOS</a>
    </div>
  </nav>
</header>

      <main>
        {/* Aquí va el Hero con la sección de Perfumes incluida */}
        <Hero /> 
        
        {/* Aquí siguen tus servicios */}
        <Services />
      </main>
      <Footer />
    </div>
  )
}

export default App