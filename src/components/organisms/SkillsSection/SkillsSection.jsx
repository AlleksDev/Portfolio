import React, { useState } from 'react';
import './SkillsSection.css';
import { techSkillsCategories, softSkills, patternsAndArchitectures } from '../../../data/skills';

const SoftSkills = () => (
  <section id="soft-skills" className="reveal">
    {/* Fondo interactivo de ondas topológicas y partículas flotantes */}
    <div className="soft-background" aria-hidden="true">
      <svg className="soft-waves-svg" viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id="soft-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-teal)" stopOpacity="0.04" />
            <stop offset="50%" stopColor="var(--color-teal)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-red)" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="soft-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-red)" stopOpacity="0.03" />
            <stop offset="50%" stopColor="var(--color-teal)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--color-teal)" stopOpacity="0.04" />
          </linearGradient>
          <radialGradient id="soft-glow-grad" cx="50%" cy="85%" r="55%">
            <stop offset="0%" stopColor="var(--color-teal)" stopOpacity="0.16" />
            <stop offset="60%" stopColor="var(--color-teal)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="var(--color-teal)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Resplandor ambiental de domo */}
        <ellipse cx="720" cy="560" rx="660" ry="340" fill="url(#soft-glow-grad)" className="soft-ambient-glow" />

        {/* Malla de ondas armónicas (el domo/onda central en el fondo) */}
        <path
          d="M -100,600 Q 720,70 1540,600"
          className="soft-wave-path soft-wave-path--main"
        />
        <path
          d="M -100,600 Q 720,130 1540,600"
          className="soft-wave-path soft-wave-path--1"
        />
        <path
          d="M -100,600 Q 720,200 1540,600"
          className="soft-wave-path soft-wave-path--2"
        />
        <path
          d="M -100,600 Q 720,280 1540,600"
          className="soft-wave-path soft-wave-path--3"
        />
        <path
          d="M -100,600 Q 720,370 1540,600"
          className="soft-wave-path soft-wave-path--4"
        />
        <path
          d="M -100,600 Q 720,470 1540,600"
          className="soft-wave-path soft-wave-path--5"
        />
      </svg>

      {/* Partículas flotantes bioluminiscentes */}
      <div className="soft-particles-container">
        <span className="soft-particle p1"></span>
        <span className="soft-particle p2"></span>
        <span className="soft-particle p3"></span>
        <span className="soft-particle p4"></span>
        <span className="soft-particle p5"></span>
        <span className="soft-particle p6"></span>
        <span className="soft-particle p7"></span>
        <span className="soft-particle p8"></span>
        <span className="soft-particle p9"></span>
        <span className="soft-particle p10"></span>
        <span className="soft-particle p11"></span>
        <span className="soft-particle p12"></span>
      </div>
    </div>

    <div className="section-inner">
      <div className="section-header">
        <h2 className="section-title">HABILIDADES BLANDAS</h2>
      </div>
      <div className="soft-grid">
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

const Patterns = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  const handleSelect = (idx) => {
    setActiveIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="patterns" className="reveal">
      <div className="section-inner">
        <div className="patterns-layout">
          {/* Lado Izquierdo: Título + Cards */}
          <div className="patterns-left">
            <div className="section-header">
              <h2 className="section-title">PATRONES & ARQUITECTURAS</h2>
            </div>
            <ul className="patterns-grid">
              {patternsAndArchitectures.map((item, idx) => (
                <li
                  className={`pattern-card ${activeIdx === idx ? 'is-active' : ''}`}
                  key={item.title}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onMouseLeave={() => setActiveIdx(null)}
                  onClick={() => handleSelect(idx)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={activeIdx === idx}
                >
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
          </div>

          {/* Lado Derecho: Círculos concéntricos completos cortados al borde de pantalla */}
          <div className="architecture-visual" aria-label="Diagrama arquitectónico concéntrico lateral">
            <div className="architecture-semicircle-container architecture-right-container">
              <svg
                className="architecture-svg architecture-svg--right"
                viewBox="0 0 460 700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Ejes técnicos: vertical y horizontal cruzando el centro (430, 350) */}
                <line x1="430" y1="20" x2="430" y2="680" className="arch-cut-axis" />
                <line x1="100" y1="350" x2="760" y2="350" className="arch-cut-axis" />

                {/* Ticks en eje vertical */}
                <line x1="418" y1="350" x2="442" y2="350" className="arch-tick-major" />
                <line x1="422" y1="20" x2="438" y2="20" className="arch-tick" />
                <line x1="422" y1="120" x2="438" y2="120" className="arch-tick" />
                <line x1="422" y1="210" x2="438" y2="210" className="arch-tick" />
                <line x1="422" y1="280" x2="438" y2="280" className="arch-tick" />
                <line x1="422" y1="420" x2="438" y2="420" className="arch-tick" />
                <line x1="422" y1="490" x2="438" y2="490" className="arch-tick" />
                <line x1="422" y1="580" x2="438" y2="580" className="arch-tick" />
                <line x1="422" y1="680" x2="438" y2="680" className="arch-tick" />

                {/* Ticks en eje horizontal */}
                <line x1="100" y1="342" x2="100" y2="358" className="arch-tick" />
                <line x1="200" y1="342" x2="200" y2="358" className="arch-tick" />
                <line x1="290" y1="342" x2="290" y2="358" className="arch-tick" />
                <line x1="360" y1="342" x2="360" y2="358" className="arch-tick" />
                <line x1="500" y1="342" x2="500" y2="358" className="arch-tick" />
                <line x1="570" y1="342" x2="570" y2="358" className="arch-tick" />
                <line x1="660" y1="342" x2="660" y2="358" className="arch-tick" />
                <line x1="760" y1="342" x2="760" y2="358" className="arch-tick" />

                {/* Rayos estructurales radiales (Patrones de diseño - Idx 5) */}
                <g className={`arch-radial-rays ${activeIdx === 5 ? 'is-active' : ''}`}>
                  <line x1="430" y1="350" x2="160" y2="161" className="arch-ray" />
                  <line x1="430" y1="350" x2="100" y2="350" className="arch-ray" />
                  <line x1="430" y1="350" x2="160" y2="539" className="arch-ray" />
                  <line x1="430" y1="350" x2="700" y2="161" className="arch-ray" />
                  <line x1="430" y1="350" x2="760" y2="350" className="arch-ray" />
                  <line x1="430" y1="350" x2="700" y2="539" className="arch-ray" />
                </g>

                {/* Círculo 4: Capa Externa Completa - Event Driven (Idx 3) */}
                <circle
                  cx="430"
                  cy="350"
                  r="330"
                  className={`arch-arc arch-arc--outer ${activeIdx === 3 ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveIdx(3)}
                  onMouseLeave={() => setActiveIdx(null)}
                  onClick={() => handleSelect(3)}
                />

                {/* Círculo 3: Capa Media Completa - Hexagonal / Puertos y Adaptadores (Idx 1) */}
                <circle
                  cx="430"
                  cy="350"
                  r="230"
                  className={`arch-arc arch-arc--middle ${activeIdx === 1 ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveIdx(1)}
                  onMouseLeave={() => setActiveIdx(null)}
                  onClick={() => handleSelect(1)}
                />

                {/* Círculo 2: Capa Interna Completa - MVC & MVVM (Idx 2 & 4) */}
                <circle
                  cx="430"
                  cy="350"
                  r="140"
                  className={`arch-arc arch-arc--inner ${activeIdx === 2 || activeIdx === 4 ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveIdx(2)}
                  onMouseLeave={() => setActiveIdx(null)}
                  onClick={() => handleSelect(2)}
                />

                {/* Círculo Central Completo: Núcleo - Arquitectura Limpia (Idx 0) */}
                <circle
                  cx="430"
                  cy="350"
                  r="70"
                  className={`arch-core-semicircle ${activeIdx === 0 ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveIdx(0)}
                  onMouseLeave={() => setActiveIdx(null)}
                  onClick={() => handleSelect(0)}
                />

                {/* Nodos de anclaje */}
                <circle
                  cx="430"
                  cy="350"
                  r="7"
                  className={`arch-node arch-node--core ${activeIdx === 0 ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveIdx(0)}
                  onMouseLeave={() => setActiveIdx(null)}
                  onClick={() => handleSelect(0)}
                />
                <circle
                  cx="331"
                  cy="251"
                  r="6"
                  className={`arch-node arch-node--teal ${activeIdx === 2 ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveIdx(2)}
                  onMouseLeave={() => setActiveIdx(null)}
                  onClick={() => handleSelect(2)}
                />
                <circle
                  cx="331"
                  cy="449"
                  r="6"
                  className={`arch-node arch-node--teal ${activeIdx === 4 ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveIdx(4)}
                  onMouseLeave={() => setActiveIdx(null)}
                  onClick={() => handleSelect(4)}
                />
                <circle
                  cx="200"
                  cy="350"
                  r="6.5"
                  className={`arch-node arch-node--teal ${activeIdx === 1 ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveIdx(1)}
                  onMouseLeave={() => setActiveIdx(null)}
                  onClick={() => handleSelect(1)}
                />
                <circle
                  cx="160"
                  cy="161"
                  r="7"
                  className={`arch-node arch-node--red ${activeIdx === 3 ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveIdx(3)}
                  onMouseLeave={() => setActiveIdx(null)}
                  onClick={() => handleSelect(3)}
                />
                <circle
                  cx="160"
                  cy="539"
                  r="7"
                  className={`arch-node arch-node--gold ${activeIdx === 5 ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveIdx(5)}
                  onMouseLeave={() => setActiveIdx(null)}
                  onClick={() => handleSelect(5)}
                />

                {/* Badges SVG integrados con foreignObject (centrado perfecto flexbox) */}
                {/* 0: Clean Arch */}
                <foreignObject
                  x="290"
                  y="335"
                  width="135"
                  height="30"
                  className={`arch-svg-badge-fo arch-svg-badge-fo--core ${activeIdx === 0 ? 'is-active' : ''}`}
                  onClick={() => handleSelect(0)}
                  onMouseEnter={() => setActiveIdx(0)}
                  onMouseLeave={() => setActiveIdx(null)}
                >
                  <div className="arch-badge-pill">
                    <img src={patternsAndArchitectures[0].icon} alt="" />
                    <span>CLEAN ARCH</span>
                  </div>
                </foreignObject>

                {/* 2: MVC */}
                <foreignObject
                  x="292"
                  y="208"
                  width="78"
                  height="28"
                  className={`arch-svg-badge-fo ${activeIdx === 2 ? 'is-active' : ''}`}
                  onClick={() => handleSelect(2)}
                  onMouseEnter={() => setActiveIdx(2)}
                  onMouseLeave={() => setActiveIdx(null)}
                >
                  <div className="arch-badge-pill">
                    <img src={patternsAndArchitectures[2].icon} alt="" />
                    <span>MVC</span>
                  </div>
                </foreignObject>

                {/* 4: MVVM */}
                <foreignObject
                  x="287"
                  y="465"
                  width="88"
                  height="28"
                  className={`arch-svg-badge-fo ${activeIdx === 4 ? 'is-active' : ''}`}
                  onClick={() => handleSelect(4)}
                  onMouseEnter={() => setActiveIdx(4)}
                  onMouseLeave={() => setActiveIdx(null)}
                >
                  <div className="arch-badge-pill">
                    <img src={patternsAndArchitectures[4].icon} alt="" />
                    <span>MVVM</span>
                  </div>
                </foreignObject>

                {/* 1: Hexagonal */}
                <foreignObject
                  x="58"
                  y="335"
                  width="130"
                  height="30"
                  className={`arch-svg-badge-fo ${activeIdx === 1 ? 'is-active' : ''}`}
                  onClick={() => handleSelect(1)}
                  onMouseEnter={() => setActiveIdx(1)}
                  onMouseLeave={() => setActiveIdx(null)}
                >
                  <div className="arch-badge-pill">
                    <img src={patternsAndArchitectures[1].icon} alt="" />
                    <span>HEXAGONAL</span>
                  </div>
                </foreignObject>

                {/* 3: Event Driven */}
                <foreignObject
                  x="88"
                  y="145"
                  width="145"
                  height="32"
                  className={`arch-svg-badge-fo ${activeIdx === 3 ? 'is-active' : ''}`}
                  onClick={() => handleSelect(3)}
                  onMouseEnter={() => setActiveIdx(3)}
                  onMouseLeave={() => setActiveIdx(null)}
                >
                  <div className="arch-badge-pill">
                    <img src={patternsAndArchitectures[3].icon} alt="" />
                    <span>EVENT DRIVEN</span>
                  </div>
                </foreignObject>

                {/* 5: Design Patterns */}
                <foreignObject
                  x="76"
                  y="523"
                  width="168"
                  height="32"
                  className={`arch-svg-badge-fo ${activeIdx === 5 ? 'is-active' : ''}`}
                  onClick={() => handleSelect(5)}
                  onMouseEnter={() => setActiveIdx(5)}
                  onMouseLeave={() => setActiveIdx(null)}
                >
                  <div className="arch-badge-pill">
                    <img src={patternsAndArchitectures[5].icon} alt="" />
                    <span>DESIGN PATTERNS</span>
                  </div>
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechSkills = () => {
  return (
    <section id="skills" className="reveal">
      <div className="section-inner">
      <div className="section-header">
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
