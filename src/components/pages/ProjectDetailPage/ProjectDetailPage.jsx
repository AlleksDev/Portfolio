import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout/MainLayout';
import Button from '../../atoms/Button/Button';
import projects from '../../../data/projects';
import './ProjectDetailPage.css';

function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <MainLayout>
        <div className="project-detail__not-found">
          <h2>Proyecto no encontrado</h2>
          <Button onClick={() => navigate('/')}>Volver al inicio</Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="project-detail">
        <div className="project-detail__container">
          <div className="project-detail__grid">
            <div className="project-detail__info">
              <button className="project-detail__back" onClick={() => navigate('/')}>
                ← Volver
              </button>
              <h1 className="project-detail__title">{project.title}</h1>
              <p className="project-detail__desc">{project.description}</p>

              <h2 className="project-detail__subtitle">Problemática</h2>
              <p className="project-detail__desc">{project.problem}</p>

              <div className="project-detail__cta">
                <Button variant="primary" onClick={() => window.open(project.link, '_blank')}>
                  Ir al proyecto
                </Button>
              </div>

              <h2 className="project-detail__subtitle">My job</h2>
              <p className="project-detail__desc">{project.myJob}</p>
            </div>

            <div className="project-detail__right">
              <div className="project-detail__preview">
                <div className="project-detail__browser-bar">
                  <span className="project-detail__browser-dot project-detail__browser-dot--red" />
                  <span className="project-detail__browser-dot project-detail__browser-dot--yellow" />
                  <span className="project-detail__browser-dot project-detail__browser-dot--green" />
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-detail__screenshot"
                />
              </div>

              <div className="project-detail__tech-section">
                <h3 className="project-detail__tech-title">Tecnologías utilizadas</h3>
                <div className="project-detail__tech-icons">
                  {project.technologies.map((tech, i) => (
                    <div key={i} className="project-detail__tech-badge">
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                        alt={tech}
                        className="project-detail__tech-icon"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-detail__tech-section">
                <h3 className="project-detail__tech-title">Patrones de diseño utilizados</h3>
                <div className="project-detail__tech-icons">
                  {project.designPatterns.map((pattern, i) => (
                    <div key={i} className="project-detail__tech-badge">
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${pattern}/${pattern}-original.svg`}
                        alt={pattern}
                        className="project-detail__tech-icon"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProjectDetailPage;
