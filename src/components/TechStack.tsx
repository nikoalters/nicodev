import './TechStack.css';

const TechStack = () => {
  const skills = [
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'Python', color: '#3776AB' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Integración IA', color: '#FF007F' },
    { name: 'Hardware / IoT', color: '#00979D' }
  ];

  return (
    <section className="tech-stack-section">
      <h2 className="section-title">Mi <span className="highlight">Tech Stack</span></h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-badge"
            style={{ '--hover-color': skill.color } as React.CSSProperties}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;