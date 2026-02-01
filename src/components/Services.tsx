import './Services.css';
import TechCard from './TechCard'; // <--- Importamos nuestro componente maestro

const Services = () => {
  const servicesData = [
    {
      title: "Desarrollo Web & Apps",
      icon: "💻", 
      description: "Sitios web modernos, aplicaciones web progresivas (PWA) y tiendas online con tecnología MERN.",
      details: ["Landing Pages", "Sistemas de Gestión", "Aplicaciones Móviles", "E-commerce"],
    },
    {
      title: "Soporte Técnico & OS",
      icon: "🛠️",
      description: "Mantenimiento preventivo, formateo e instalación de sistemas operativos.",
      details: ["Instalación Windows/Linux", "Paquete Office", "Optimización de PC", "Eliminación de virus"],
    },
    {
      title: "Automatización & IoT",
      icon: "🤖",
      description: "Soluciones inteligentes para el hogar conectadas a internet.",
      details: ["Control de luces", "Proyectos Arduino/ESP32", "Sensores Inteligentes", "Automatización Python"],
    }
  ];

  return (
    <section id="servicios" className="services-section">
      <h2 className="section-title">MIS SERVICIOS</h2>
      <p className="subtitle">SOLUCIONES TECNOLÓGICAS AVANZADAS</p>
      
      <div className="services-grid">
        {servicesData.map((service, index) => (
          /* Aquí usamos TechCard en lugar de un div normal */
          <TechCard key={index} title={service.title}>
            
            <div className="icon-wrapper">
              {service.icon}
            </div>
            
            <p className="service-description">{service.description}</p>
            
            <ul className="tech-list">
              {service.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>

          </TechCard>
        ))}
      </div>
    </section>
  );
};

export default Services;