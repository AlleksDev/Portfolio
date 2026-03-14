import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    { 
      title: 'COINERS DIRFT', 
      tags: ['UX/UI', 'Front-End', 'Wireframing'], 
      desc: 'Plataforma de entretenimiento recreativo que redefine la experiencia de juego. Su diseño busca la desestimulación activa para aliviar el estrés. Estuve a cargo de la conceptualización y el wireframing de principio a fin.'
    },
    { 
      title: 'FRIMEET', 
      tags: ['Front-End', 'MercadoPago', 'UX/UI'], 
      desc: 'Plataforma que ayuda a los usuarios a encontrar lugares perfectos para visitar. Lideré el branding, diseño UX/UI y el desarrollo Front-End. Además, integré la API de pagos usando el SDK de MercadoPago.'
    },
    { 
      title: 'VIXEL', 
      tags: ['Web3', 'Game Assets', 'UX/UI'], 
      desc: 'Plataforma descentralizada Web3 enfocada a la creación de torneos y streaming. Creé el branding y diseño UI/UX, además de ser el responsable principal de la producción y optimización de assets funcionales y visuales del juego.'
    },
    { 
      title: 'GEOVA', 
      tags: ['IoT', '3D Design', 'Hardware'], 
      desc: 'Solución avanzada para medición de terrenos que incorpora un dispositivo IoT. A cargo del diseño UI/UX de la app web, arquitectura de los circuitos y modelado mecánico 3D estructural de la carcasa del dispositivo.'
    }
  ];

  return (
    <section id="projects">
      <div className="section-header">
        <div className="section-dot"></div>
        <h2 className="section-title">PROYECTOS</h2>
      </div>
      <div className="projects-filters">
        <button className="proj-filter active"><i className="fa-solid fa-globe"></i> APLICACIONES WEB</button>
        <button className="proj-filter"><i className="fa-brands fa-android"></i> APLICACIONES ANDROID</button>
        <button className="proj-filter"><i className="fa-solid fa-pen-nib"></i> ILUSTRACIONES</button>
      </div>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-head-link">
              <span>about</span><span>learn</span><span>portfolio</span><span>blog</span><span>contact</span>
            </div>
            <div className="project-img"></div>
            <div className="project-info">
              <div className="project-tags">
                {proj.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
            </div>
          </div>
        ))}
        <div className="projects-more">
          <h3>MÁS PROYECTOS PRONTO...</h3>
          <p>Sigo desarrollando más proyectos.<br/>También puedes ver contribuciones menores en mi GitHub</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
