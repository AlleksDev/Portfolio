import React from 'react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const experiences = [
    {
      num: '01',
      title: 'TECH SIN FRONTERAS',
      date: 'Nov. 2023',
      desc: 'Participación como Front-End Developer y UX/UI Designer. El equipo tuvo un desempeño destacado logrando rapidez de ejecución y excelencia técnica bajo presión, desarrollando una plataforma orientada al entretenimiento y alivio de estrés.',
      tags: ['Design', 'UX/UI', 'Front-End'],
      award: '3er lugar'
    },
    {
      num: '02',
      title: 'VARA SIDE HACKATHON',
      date: 'Oct. 2024',
      desc: 'Desarrollo de VIXEL, una plataforma Web3 descentralizada orientada a la creación de torneos y streaming. Participación clave en branding, conceptualización UI/UX y creación de assets visuales y funcionales del juego.',
      tags: ['Web3', 'UX/UI', 'Game Assets'],
      award: '1er lugar'
    },
    {
      num: '03',
      title: 'VARA MEGAHACKATHON',
      date: 'Ene. 2025',
      desc: 'Competencia internacional en la que destacamos en la categoría Avanzada. Continuación del desarrollo de VIXEL demostrando innovación y éxito competitivo desarrollando aplicaciones en la red de Vara.',
      tags: ['Web3', 'Front-End'],
      award: '2do lugar'
    }
  ];

  return (
    <section id="experience">
      <div className="section-header">
        <div className="section-dot"></div>
        <h2 className="section-title">EXPERIENCIA</h2>
      </div>
      <div className="exp-grid">
        {experiences.map((exp, idx) => (
          <div className="exp-card" key={idx}>
            <div className="exp-header">
              <span className="exp-num">{exp.num}</span>
              <div className="exp-line"></div>
            </div>
            <div className="exp-subheader">
              <h3 className="exp-title">{exp.title}</h3>
              <span className="exp-date">{exp.date}</span>
            </div>
            <p className="exp-desc">{exp.desc}</p>
            <div className="exp-tags">
              {exp.award && <span className="exp-tag highlight"><i className="fa-solid fa-trophy"></i> {exp.award}</span>}
              {exp.tags.map(tag => <span key={tag} className="exp-tag">{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
