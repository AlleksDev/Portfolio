import React from 'react';
import './SkillsSection.css';
import { techSkillsCategories, softSkills, patternsAndArchitectures } from '../../../data/skills';

const SoftSkills = () => (
  <section id="soft-skills">
    <div className="section-header">
      <div className="section-dot"></div>
      <h2 className="section-title">HABILIDADES BLANDAS</h2>
    </div>
    <div className="soft-grid">
      <div className="soft-graphic">
        <div className="soft-cube"></div>
      </div>
      <div className="soft-items">
        {softSkills.map((item, idx) => (
          <div className="soft-item" key={idx}>
            <h4><img src={item.icon} alt={item.title} className="soft-skill-icon" /> {item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Patterns = () => (
  <section id="patterns">
    <div className="section-header">
      <div className="section-dot"></div>
      <h2 className="section-title">PATRONES & ARQUITECTURAS</h2>
    </div>
    <div className="patterns-grid">
      {patternsAndArchitectures.map((item, idx) => (
        <div className="pattern-card" key={idx}>
          <div className="pattern-icon"><img src={item.icon} alt={item.title} className="pattern-svg-icon" /></div>
          <div className="pattern-info">
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const TechSkills = () => {
  return (
    <section id="skills">
      <div className="section-header">
        <div className="section-dot"></div>
        <h2 className="section-title">CONOCIMIENTOS TÉCNICOS</h2>
      </div>
      <div className="tech-grid">
        {techSkillsCategories.map((cat, idx) => (
          <div className="tech-category" key={idx}>
            <h3 className="tech-cat-title"><i className={`fa-solid ${cat.icon}`}></i> {cat.title}</h3>
            <div className="tech-items">
              {cat.items.map((item, i) => item ? (
                <div className="tech-item" key={i}>
                  <span className="tech-name"><img src={item.icon} alt={item.name} className="tech-icon" /> {item.name}</span>
                  <span className={`tech-level ${item.levelClass}`}>{item.level}</span>
                </div>
              ) : <div className="tech-item empty" key={i}></div>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <>
      <SoftSkills />
      <Patterns />
      <TechSkills />
    </>
  );
};

export default SkillsSection;
