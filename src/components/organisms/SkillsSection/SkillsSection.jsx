import React from 'react';
import './SkillsSection.css';
import { techSkillsCategories, softSkills, patternsAndArchitectures } from '../../../data/skills';

const SoftSkills = () => (
  <section id="soft-skills" className="reveal">
    <div className="section-inner">
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
    </div>
  </section>
);

const Patterns = () => (
  <section id="patterns" className="reveal">
    <div className="section-inner">
      <div className="section-header">
        <div className="section-dot"></div>
        <h2 className="section-title">PATRONES & ARQUITECTURAS</h2>
      </div>
      <div className="patterns-layout">
        <div className="architecture-visual" aria-hidden="true">
          <div className="architecture-rings">
            <div className="architecture-ring architecture-ring--outer">
              <span>{patternsAndArchitectures[3].title}</span>
            </div>
            <div className="architecture-ring architecture-ring--middle">
              <span>{patternsAndArchitectures[1].title}</span>
            </div>
            <div className="architecture-ring architecture-ring--inner">
              <span>MVC · MVVM</span>
            </div>
            <div className="architecture-core">
              <img src={patternsAndArchitectures[0].icon} alt="" />
              <span>{patternsAndArchitectures[0].title}</span>
            </div>
          </div>
        </div>
        <div className="patterns-content">
          <ul className="patterns-grid">
            {patternsAndArchitectures.map((item) => (
              <li className="pattern-card" key={item.title}>
                <div
                  className="pattern-icon"
                  style={{ '--pattern-icon': `url("${item.icon}")` }}
                  aria-hidden="true"
                />
                <div className="pattern-info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="architecture-chips" aria-hidden="true">
            {patternsAndArchitectures.map((item) => (
              <span className="architecture-chip" key={item.title}>
                <img src={item.icon} alt="" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TechSkills = () => {
  return (
    <section id="skills" className="reveal">
      <div className="section-inner">
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
                  <img src={item.icon} alt={item.name} className="tech-icon" />
                  <div className='tech-info'>
                    <span className="tech-name"> {item.name}</span>
                    <span className={`tech-level ${item.levelClass}`}>{item.level}</span>
                  </div>
                </div>
              ) : <div className="tech-item empty" key={i}></div>)}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <>
      <TechSkills />
      <Patterns />
      <SoftSkills />
    </>
  );
};

export default SkillsSection;
