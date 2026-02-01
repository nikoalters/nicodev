import './Services.css';
import TechCard from './TechCard';
import { Link } from 'react-router-dom'; // <--- Ahora sí lo usaremos abajo

const Services = () => {
  const servicesData = [
    {
      title: "Desarrollo Web & Apps",
      icon: "💻", 
      description: "Sitios web modernos y tiendas online.",
      link: "/web", // <--- Esta es la ruta a la página de precios Web
      details: ["Ver Precios Landing Pages", "Ver Planes E-commerce"],
    },
    {
      title: "Soporte Técnico & OS",
      icon: "🛠️",
      description: "Mantenimiento y formateo.",
      link: "/soporte", // <--- Ruta a la página de Soporte
      details: ["Ver Costo Formateo", "Instalación Office"],
    },
    {
      title: "Automatización & IoT",
      icon: "🤖",
      description: "Soluciones inteligentes.",
      link: "/contacto", // Si no tiene página de precio, lo mandamos al contacto
      details: ["Cotizar Proyecto", "Domótica a medida"],
    }
  ];

  return (
    <section id="servicios" className="services-section">
      <h2 className="section-title">MIS SERVICIOS</h2>
      <p className="subtitle">CLICK EN LAS TARJETAS PARA VER PRECIOS</p>
      
      <div className="services-grid">
        {servicesData.map((service, index) => (
          
          /* AQUÍ ESTÁ LA CLAVE: Usamos <Link> para envolver la tarjeta */
          <Link to={service.link} key={index} style={{ textDecoration: 'none' }}>
            
            <TechCard title={service.title} className="clickable-card">
              <div className="icon-wrapper">
                {service.icon}
              </div>
              
              <p className="service-description">{service.description}</p>
              
              <ul className="tech-list">
                {service.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>

              {/* Texto visual que indica que es clickeable */}
              <div style={{ 
                marginTop: '1rem', 
                color: '#00f3ff', 
                fontSize: '0.8rem', 
                fontWeight: 'bold', 
                borderTop: '1px solid rgba(255,255,255,0.1)', 
                paddingTop: '10px',
                textAlign: 'right'
              }}>
                VER PRECIOS ➜
              </div>
            </TechCard>

          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;