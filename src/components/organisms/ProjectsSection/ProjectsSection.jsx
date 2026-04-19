import React, { useState } from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('web');

  const webProjects = [
    //Faltan Crehor, los de conversiones, el AG, el Proyecto individual de Ali 5o, hacer un proyecto para aprender ED con lo que ya tengo
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
    },
    {
      title: 'NOTARÍA 178',
      tags: ['Arquitectura de Red', 'Full Stack', 'VPN'],
      desc: 'Plataforma web robusta para la gestión operativa. Incluye servidor local configurado con VPN Tailscale para acceso remoto cifrado desde sucursales y sistema avanzado de gestión con control de acceso.'
    },
    {
      title: 'VAULTDOC-VD',
      tags: ['Ciberseguridad', 'Encriptación', 'Back-End'],
      desc: 'Plataforma de seguridad empresarial para la gestión segura de archivos gubernamentales. Incluye análisis de vulnerabilidades en tiempo real, encriptación de extremo a extremo y auditoría completa.'
    },
    {
      title: 'Videojuego 2D Educativo',
      tags: ['Game Dev', 'Assets 2D', 'Animación'],
      desc: 'Juego educativo 2D para el Museo Chiapas de Ciencia y Tecnología (MUCH) sobre la formación del cuerpo humano. Encargado de todos los assets visuales, sprites, frames y animaciones interactivas.'
    }
  ];

  const mobileProjects = [
    {
      title: 'CINERADAR',
      tags: ['Android', 'Kotlin', 'API REST'],
      desc: 'Aplicación móvil que recomienda películas personalizadas según los gustos del usuario. Implementa algoritmos de recomendación y una interfaz intuitiva para descubrir nuevo contenido cinematográfico.'
    },
    {
      title: 'SCOREUP',
      tags: ['Android', 'Productividad', 'UX/UI'],
      desc: 'Aplicación diseñada para ayudar a estudiantes a organizar sus retos de estudio. Permite crear metas, hacer seguimiento del progreso y mantener la motivación académica de forma gamificada.'
    },
    {
      title: 'SPLITMEET',
      tags: ['Android', 'Finanzas', 'UX/UI'],
      desc: 'Aplicación que facilita la organización de gastos compartidos en salidas con amigos, familia o pareja. Divide cuentas de forma equitativa y mantiene un historial claro de los gastos grupales.'
    }
  ];

  const illustrationProjects = [
    {
      title: 'ENTRE SEÑAS Y PALABRAS',
      tags: ['Ilustración', 'Editorial', 'Educativo'],
      desc: 'Cuadernillo ilustrado para el aprendizaje de Lengua de Señas Mexicana (LSM). Responsable de toda la ilustración del proyecto, creando recursos visuales accesibles para facilitar la comunicación inclusiva.'
    }
  ];

  const getProjects = () => {
    switch (activeFilter) {
      case 'mobile':
        return mobileProjects;
      case 'illustration':
        return illustrationProjects;
      default:
        return webProjects;
    }
  };

  const projects = getProjects();
  
  return (
    <section id="projects">
      <div className="section-header">
        <div className="section-dot"></div>
        <h2 className="section-title">PROYECTOS</h2>
      </div>
      <div className="projects-filters">
        <button
          className={`proj-filter ${activeFilter === 'web' ? 'active' : ''}`}
          onClick={() => setActiveFilter('web')}
        >
          <i className="fa-solid fa-globe"></i> APLICACIONES WEB
        </button>
        <button
          className={`proj-filter ${activeFilter === 'mobile' ? 'active' : ''}`}
          onClick={() => setActiveFilter('mobile')}
        >
          <i className="fa-brands fa-android"></i> APLICACIONES ANDROID
        </button>
        <button
          className={`proj-filter ${activeFilter === 'illustration' ? 'active' : ''}`}
          onClick={() => setActiveFilter('illustration')}
        >
          <i className="fa-solid fa-pen-nib"></i> ILUSTRACIONES
        </button>
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
