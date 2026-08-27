import React from 'react';
import './ExperienceSection.css';
import experiences from '../../../data/experiences';

const ExperienceSection = () => {
  return (
    <section id="experience" className="reveal">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">EXPERIENCIA</h2>
        </div>
        <div className="exp-grid">
          {experiences.map((exp, idx) => (
            <div className="exp-card" key={idx}>
              <div className="exp-card-header">
                <span className="exp-card-num">{exp.num}</span>
                {exp.award && (
                  <span className="exp-award-badge">
                    <i className="fa-solid fa-trophy"></i> {exp.award}
                  </span>
                )}
              </div>

              <div className="exp-card-content">
                <div className="exp-meta-row">
                  <span className="exp-company">{exp.company}</span>
                  <span className="exp-date">{exp.date}</span>
                </div>
                <h3 className="exp-title">{exp.title}</h3>
                <div className="exp-divider"></div>
                <p className="exp-desc">{exp.desc}</p>
                <div className="exp-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="exp-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
