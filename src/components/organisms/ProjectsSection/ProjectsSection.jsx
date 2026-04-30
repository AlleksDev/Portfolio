import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectsSection.css';
import { webProjects, mobileProjects, illustrationProjects } from '../../../data/projects';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('web');
  const navigate = useNavigate();

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

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  const displayedProjects = getProjects();
  
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
        {displayedProjects.map((proj, idx) => (
          <div className="project-card" key={idx} onClick={() => handleProjectClick(proj.id)}>
            <div className="project-head-link">
              <span>about</span><span>learn</span><span>portfolio</span><span>blog</span><span>contact</span>
            </div>
            <div className="project-img">
              {proj.images && proj.images[0] && (
                <div className="project-img">
                  <img src={proj.images[0]} alt={proj.title} />
                </div>
              )}
            </div>
            <div className="project-info">
              <div className="project-tags">
                {proj.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.shortDescription || proj.description}</p>
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
