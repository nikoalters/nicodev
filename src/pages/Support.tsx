import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TechCard from '../components/TechCard';
import { useEffect } from 'react';

const Support = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="portfolio-container">
      <Navbar />
      <main style={{ padding: '6rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 className="section-title">Soporte Técnico</h1>
        <p className="subtitle">MANTENIMIENTO Y SOFTWARE</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <TechCard title="Formateo Completo">
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>$20.000</div>
            <p>Dejar tu PC como nuevo.</p>
            <ul style={{ marginTop: '1rem', color: '#ccc', lineHeight: '1.8' }}>
              <li>Instalación de Windows 10/11</li>
              <li>Respaldo de archivos (hasta 20GB)</li>
              <li>Instalación de Drivers</li>
            </ul>
          </TechCard>

          <TechCard title="Pack Office 365">
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>$15.000</div>
            <p>Activación permanente.</p>
            <ul style={{ marginTop: '1rem', color: '#ccc', lineHeight: '1.8' }}>
              <li>Word, Excel, PowerPoint</li>
              <li>Licencia activada</li>
              <li>Soporte remoto incluido</li>
                      </ul>
                      <a 
  href="https://wa.me/56958547236?text=Hola,%20necesito%20un%20Formateo%20de%20PC"
  target="_blank"
  className="btn-hire"
>
  Agendar 🛠️
</a>
          </TechCard>

        </div>
        
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <a href="/nicodev/" style={{ color: '#00f3ff', textDecoration: 'none' }}>⬅ Volver al Inicio</a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;