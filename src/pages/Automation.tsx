import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TechCard from '../components/TechCard';
import { useEffect } from 'react';

const Automation = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="portfolio-container">
      <Navbar />
      
      <main style={{ padding: '6rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 className="section-title">Domótica & IoT</h1>
        <p className="subtitle" style={{ marginBottom: '3rem' }}>TU CASA INTELIGENTE, CONTROLADA POR VOZ</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
        
          <TechCard title="Pack Iluminación Led" variant="cyan">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
              $45.000 <span style={{ fontSize: '1rem', color: '#888' }}>/ inst</span>
            </div>
            <p style={{ marginBottom: '1.5rem' }}>Dale vida a tu setup o habitación.</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#a0a0b0', lineHeight: '2' }}>
              <li>✅ Tira LED RGB (5 metros)</li>
              <li>✅ Controlador WiFi (ESP32)</li>
              <li>✅ Control por Google / Alexa</li>
              <li>✅ Efectos audiorítmicos</li>
            </ul>
            
            <a 
              href="https://wa.me/56958547236?text=Hola,%20me%20interesa%20el%20Pack%20de%20Luces%20LED"
              target="_blank"
              className="btn-hire"
            >
              Pedir Kit 💡
            </a>
          </TechCard>

         
          <TechCard title="Motorización Persianas" variant="purple">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
              $65.000 <span style={{ fontSize: '1rem', color: '#888' }}>/ unidad</span>
            </div>
            <p style={{ marginBottom: '1.5rem' }}>Automatiza tus cortinas roller sin cambiarlas.</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#a0a0b0', lineHeight: '2' }}>
              <li>✅ Motor de alto torque</li>
              <li>✅ Programación de horarios</li>
              <li>✅ "Hey Google, cierra la cortina"</li>
              <li>✅ Instalación oculta</li>
            </ul>

            <a 
              href="https://wa.me/56958547236?text=Hola,%20quiero%20cotizar%20motores%20para%20mis%20persianas"
              target="_blank"
              className="btn-hire purple"
            >
              Cotizar Motor 🪟
            </a>
          </TechCard>

          
          <TechCard title="Hub Central Google" variant="green">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
              Cotizar
            </div>
            <p style={{ marginBottom: '1.5rem' }}>El cerebro central para controlar toda la casa.</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#a0a0b0', lineHeight: '2' }}>
              <li>✅ Instalación Google Nest Hub</li>
              <li>✅ Vinculación (Spotify, Netflix)</li>
              <li>✅ Creación de Rutinas</li>
              <li>✅ Capacitación de uso</li>
            </ul>

            <a 
              href="https://wa.me/56958547236?text=Hola,%20necesito%20ayuda%20configurando%20mi%20Google%20Home"
              target="_blank"
              className="btn-hire green"
            >
              Asesoría 🤖
            </a>
          </TechCard>

        </div>
        
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <a href="/nicodev/" style={{ color: '#00f3ff', textDecoration: 'none', fontSize: '1.1rem' }}>⬅ Volver al Inicio</a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Automation;