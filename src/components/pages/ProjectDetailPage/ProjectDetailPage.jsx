import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../../templates/MainLayout/MainLayout";
import Button from "../../atoms/Button/Button";
import ProjectGallery from "../../molecules/ProjectGallery/ProjectGallery";
import projects from "../../../data/projects";
import { getProjectImageUrl } from "../../../utils/imageLoader";
import { useToast } from "../../../context/ToastContext";
import "./ProjectDetailPage.css";

function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const project = projects.find((p) => p.id === id);

  const fallbackImage = project ? getProjectImageUrl(project) : '';
  const projectImages = (project?.images && project.images.length > 0)
    ? project.images
    : fallbackImage
      ? [fallbackImage]
      : [];

  const handleGithubClick = () => {
    if (project?.github && project.github !== '#') {
      window.open(project.github, "_blank", "noopener,noreferrer");
    } else {
      showToast("El repositorio de este proyecto es privado o no está disponible públicamente por ahora.", "info");
    }
  };

  const handleDemoClick = () => {
    if (project?.demo && project.demo !== '#') {
      window.open(project.demo, "_blank", "noopener,noreferrer");
    } else {
      showToast("La demo interactiva de este proyecto no está disponible por ahora.", "info");
    }
  };

  if (!project) {
    return (
      <MainLayout>
        <div className="project-detail__not-found">
          <h2>Proyecto no encontrado</h2>
          <Button onClick={() => navigate("/")}>Volver al inicio</Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="project-detail">
        <div className="project-detail__container">
          <div className="project-detail__grid">
            <div className="project-detail__info reveal">
              <div className="project-detail__title-wrapper">
                <h1 className="project-detail__title">{project.title}</h1>
                {project.mainTag && (
                  <span className="project-detail__main-tag">{project.mainTag}</span>
                )}
              </div>

              {project.tags && (
                <div className="project-detail__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-detail__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <p className="project-detail__desc">{project.description}</p>

              <h2 className="project-detail__subtitle">Problemática</h2>
              <p className="project-detail__desc">{project.problem}</p>

              <h2 className="project-detail__subtitle">Mi participación</h2>
              <p className="project-detail__desc">{project.myJob}</p>

              {project.mainFeatures && (
                <div className="project-detail__features-section">
                  <h2 className="project-detail__subtitle">Características principales</h2>

                  <ul className="project-detail__features-list">
                    {project.mainFeatures.map((feature, i) => (
                      <li key={i} className="project-detail__feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="project-detail__right reveal">
              <ProjectGallery
                images={projectImages}
                title={project.title}
                type={project.type}
              />
              <div className="project-detail__cta">
                <Button
                  variant={project.github && project.github !== '#' ? 'primary' : 'ghost'}
                  onClick={handleGithubClick}
                  aria-label={project.github && project.github !== '#' ? 'Ver repositorio en Github' : 'Repositorio no disponible públicamente'}
                  title={project.github && project.github !== '#' ? 'Ver repositorio en Github' : 'Repositorio privado / no disponible'}
                >
                  <i className="fa-brands fa-github" aria-hidden="true"></i>
                  Github
                </Button>
                <Button
                  variant={project.demo && project.demo !== '#' ? 'primary' : 'ghost'}
                  onClick={handleDemoClick}
                  aria-label={project.demo && project.demo !== '#' ? 'Abrir demo del proyecto' : 'Demo interactiva no disponible'}
                  title={project.demo && project.demo !== '#' ? 'Abrir demo del proyecto' : 'Demo no disponible por ahora'}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                  {project.demo && project.demo !== '#' ? 'Demo del proyecto' : 'Demo no disponible'}
                </Button>
              </div>

              <div className="project-detail__tech-section">
                <h3 className="project-detail__tech-title">
                  Tecnologías utilizadas
                </h3>
                <div className="project-detail__tech-icons">
                  {project.technologies.map((tech, i) => (
                    <div key={i} className="project-detail__tech-badge">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="project-detail__tech-icon"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          if (e.target.parentElement) {
                            const fallback = document.createElement('i');
                            fallback.className = 'fa-regular fa-circle-dot project-detail__tech-icon-fallback';
                            e.target.parentElement.insertBefore(fallback, e.target.nextSibling);
                          }
                        }}
                      />
                      <span className="project-detail__tech-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-detail__tech-section">
                <h3 className="project-detail__tech-title">
                  Patrones y tecnologías aplicadas
                </h3>
                <div className="project-detail__tech-icons">
                  {project.designPatterns.map((pattern, i) => (
                    <div key={i} className="project-detail__tech-badge">
                      <span className="project-detail__tech-name">{pattern.name}</span>
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
