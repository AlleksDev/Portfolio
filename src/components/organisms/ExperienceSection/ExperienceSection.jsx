import React from 'react';
import './ExperienceSection.css';
import experiences from '../../../data/experiences';

const ExperienceSection = () => {

  return (
    <section id="experience" className="reveal">
      <div className="section-inner">
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
            <div className="exp-company">{exp.company}</div>
            <p className="exp-desc">{exp.desc}</p>
            <div className="exp-tags">
              {exp.award && <span className="exp-tag highlight"><i className="fa-solid fa-trophy"></i> {exp.award}</span>}
              {exp.tags.map(tag => <span key={tag} className="exp-tag">{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
