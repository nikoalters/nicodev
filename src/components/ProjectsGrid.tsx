import './ProjectsGrid.css';

const ProjectsGrid = () => {
  const projects = [
    {
      title: 'Kairo App',
      description: 'Aplicación móvil orientada a la gestión de finanzas personales y mejora de la productividad diaria.',
      tech: 'Desarrollo Móvil',
    },
    {
      title: 'Project Flux',
      description: 'Herramienta de estudio automatizada que transcribe y resume videos utilizando inteligencia artificial.',
      tech: 'Python / IA',
    },
    {
      title: 'Web Corporativa Eléctrica',
      description: 'Diseño y desarrollo de una plataforma web profesional para una empresa de instalaciones eléctricas.',
      tech: 'Diseño Web',
    }
  ];

  return (
    <section className="projects-grid-section">
      <h2 className="section-title">Otros <span className="highlight">Proyectos</span></h2>
      <div className="grid-container">
        {projects.map((project, index) => (
          <div key={index} className="project-simple-card">
            <span className="project-tech">{project.tech}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;