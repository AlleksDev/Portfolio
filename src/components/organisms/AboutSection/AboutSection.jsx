import React from 'react';
import './AboutSection.css';
import profilePic from '../../../assets/img/me.png';
import StackedCardImage from '../../molecules/StackedCardImage/StackedCardImage';

const AboutSection = () => {
  return (
    <section id="about">
      <div className="section-header">
        <div className="section-dot"></div>
        <h2 className="section-title">SOBRE MÍ</h2>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>Soy <strong>Estudiante de Ingeniería en Software</strong> y Desarrollador Full Stack con sólidas bases en diseño UX/UI e ilustración.</p>
          <p>Cuento con experiencia <strong>liderando y colaborando</strong> en proyectos académicos y hackathones dentro de equipos multidisciplinarios.</p>
          <p>Mi enfoque combina la <strong>resolución técnica de problemas</strong> con la creación de interfaces intuitivas y estéticas, buscando siempre el balance perfecto entre código limpio y una experiencia de usuario excepcional.</p>
          <div className='about-buttons'>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="about-btn"><div className="dot"></div> Open to work</button>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="cv-btn">
              ¿Quieres ver mi CV?
            </button>
          </div>
        </div>
        <div className="about-image">
          <StackedCardImage src={profilePic} alt="Foto de perfil" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
