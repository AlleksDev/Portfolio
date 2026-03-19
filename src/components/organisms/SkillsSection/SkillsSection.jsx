import React from 'react';
import './SkillsSection.css';

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
        {[
          { icon: 'fa-users', title: 'TRABAJO EN EQUIPO', desc: 'Colaboración efectiva en células multidisciplinarias para alcanzar metas comunes de proyecto.' },
          { icon: 'fa-comment', title: 'COMUNICACIÓN', reg: true, desc: 'Expresión clara de ideas técnicas tanto para desarrolladores como para perfiles de negocio.' },
          { icon: 'fa-wand-magic-sparkles', title: 'CREATIVIDAD', desc: 'Aportación de enfoques innovadores tanto en interfaces gráficas como en soluciones lógicas.' },
          { icon: 'fa-crown', title: 'LIDERAZGO', desc: 'Guía técnica y de conceptualización, asumiendo responsabilidad o propiedad (ownership) del producto.' },
          { icon: 'fa-bolt', title: 'APRENDIZAJE RÁPIDO', desc: 'Capacidad de investigar e implementar nuevos lenguajes, frameworks o SDKs velozmente.' },
          { icon: 'fa-brain', title: 'PENSAMIENTO CRÍTICO', desc: 'Análisis profundo de requerimientos para encontrar soluciones eficientes y escalables.' },
          { icon: 'fa-arrows-spin', title: 'ADAPTABILIDAD', desc: 'Facilidad para ajustarme a cambios de requerimientos en entornos ágiles y competitivos.' },
          { icon: 'fa-gauge-high', title: 'TRABAJO BAJO PRESIÓN', desc: 'Experiencia demostrada entregando desarrollos de alta calidad con fechas límite estrictas.' }
        ].map((item, idx) => (
          <div className="soft-item" key={idx}>
            <h4><i className={`${item.reg ? 'fa-regular' : 'fa-solid'} ${item.icon}`}></i> {item.title}</h4>
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
      {[
        { icon: 'fa-bullseye', title: 'Arquitectura limpia', desc: 'Separación de responsabilidades en capas para lograr un código independiente, testeable y muy mantenible.' },
        { icon: 'fa-hexagon-nodes', title: 'Hexagonal / Puertos y adaptadores', desc: 'Aislamiento de la lógica de negocio central de las bases de datos y frameworks mediante puertos e implementaciones externas.' },
        { icon: 'fa-triangle-exclamation', title: 'Modelo Vista Controlador (MVC)', desc: 'Estructuración clásica separando la interfaz de usuario, la lógica de datos y el flujo de control para facilitar el desarrollo.' },
        { icon: 'fa-share-nodes', title: 'Event Driven', desc: 'Arquitectura dirigida por eventos enfocada en el bajo acoplamiento y flujos asíncronos para sistemas altamente reactivos.' },
        { icon: 'fa-cube', title: 'Modelo Vista ViewModel (MVVM)', desc: 'Desacoplamiento especializado en desarrollo Front-End (ej. con Android/Jetpack) que facilita el enlace bidireccional de datos.' },
        { icon: 'fa-cubes', title: 'Patrones de diseño', desc: 'Aplicación de patrones creacionales, estructurales y de comportamiento (Singleton, Observer, Factory, etc) para resolver problemas comunes.' }
      ].map((item, idx) => (
        <div className="pattern-card" key={idx}>
          <div className="pattern-icon"><i className={`fa-solid ${item.icon}`}></i></div>
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
  const devIcon = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;
  const devIconPlain = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-plain.svg`;

  const categories = [
    {
      title: 'Frontend', icon: 'fa-code',
      items: [
        { name: 'HTML', icon: devIcon('html5'), level: 'Avanzado', levelClass: 'level-high' },
        { name: 'CSS', icon: devIcon('css3'), level: 'Avanzado', levelClass: 'level-high' },
        { name: 'Tailwind', icon: devIcon('tailwindcss'), level: 'Medio', levelClass: 'level-mid' },
        { name: 'Jetpack Compose', icon: devIcon('jetpackcompose'), level: 'Principiante', levelClass: 'level-high' },
        { name: 'Angular', icon: devIcon('angular'), level: 'Medio', levelClass: 'level-mid' },
        { name: 'React', icon: devIcon('react'), level: 'Medio', levelClass: 'level-mid' }
      ]
    },
    {
      title: 'Diseño', icon: 'fa-pen-nib',
      items: [
        { name: 'Blender', icon: devIcon('blender'), level: 'Principiante', levelClass: 'level-high' },
        { name: 'Affinity', icon: devIconPlain('affinity'), level: 'Avanzado', levelClass: 'level-high' },
        { name: 'Gimp', icon: devIcon('gimp'), level: 'Principiante', levelClass: 'level-high' },
        { name: 'Figma', icon: devIcon('figma'), level: 'Avanzado', levelClass: 'level-high' },
        { name: 'SolidWorks', icon: devIcon('solidworks'), level: 'Medio', levelClass: 'level-mid' }
      ]
    },
    {
      title: 'Backend', icon: 'fa-server',
      items: [
        { name: 'PostgreSQL', icon: devIcon('postgresql'), level: 'Medio', levelClass: 'level-mid' },
        { name: 'MySQL', icon: devIcon('mysql'), level: 'Avanzado', levelClass: 'level-high' },
        { name: 'MongoDB', icon: devIcon('mongodb'), level: 'Avanzado', levelClass: 'level-high' },
        { name: 'FastAPI', icon: devIcon('fastapi'), level: 'Principiante', levelClass: 'level-high' },
        { name: 'Express', icon: devIcon('express'), level: 'Avanzado', levelClass: 'level-high' },
        { name: 'Node.js', icon: devIcon('nodejs'), level: 'Medio', levelClass: 'level-mid' }
      ]
    },
    {
      title: 'DevOps', icon: 'fa-cloud',
      items: [
        { name: 'Ubuntu', icon: devIcon('ubuntu'), level: 'Medio', levelClass: 'level-mid' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', level: 'Medio', levelClass: 'level-mid' },
        { name: 'Docker', icon: devIcon('docker'), level: 'Principiante', levelClass: 'level-high' },
        { name: 'Cloudflare', icon: devIcon('cloudflare'), level: 'Medio', levelClass: 'level-mid' },
        { name: 'Nginx', icon: devIcon('nginx'), level: 'Principiante', levelClass: 'level-high' },
        { name: 'GitHub', icon: devIcon('github'), level: 'Avanzado', levelClass: 'level-high' }
      ]
    },
    {
      title: 'IOT & herramientas', icon: 'fa-microchip',
      items: [
        { name: 'Raspberry Pi', icon: devIcon('raspberrypi'), level: 'Principiante', levelClass: 'level-high' },
        { name: 'ESP32', icon: devIcon('arduino'), level: 'Avanzado', levelClass: 'level-high' },
        { name: 'Arduino', icon: devIcon('arduino'), level: 'Avanzado', levelClass: 'level-high' },
        null,
        { name: 'RabbitMQ', icon: devIcon('rabbitmq'), level: 'Medio', levelClass: 'level-mid' },
        { name: 'Git', icon: devIcon('git'), level: 'Avanzado', levelClass: 'level-high' }
      ]
    },
    {
      title: 'Lenguajes', icon: 'fa-code-branch',
      items: [
        { name: 'C++', icon: devIcon('cplusplus'), level: 'Principiante', levelClass: 'level-high' },
        { name: 'Python', icon: devIcon('python'), level: 'Medio', levelClass: 'level-mid' },
        { name: 'JavaScript', icon: devIcon('javascript'), level: 'Medio', levelClass: 'level-mid' },
        { name: 'Go', icon: devIcon('go'), level: 'Avanzado', levelClass: 'level-high' },
        { name: 'Kotlin', icon: devIcon('kotlin'), level: 'Avanzado', levelClass: 'level-high' },
        { name: 'Java', icon: devIcon('java'), level: 'Medio', levelClass: 'level-mid' }
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="section-header">
        <div className="section-dot"></div>
        <h2 className="section-title">CONOCIMIENTOS TÉCNICOS</h2>
      </div>
      <div className="tech-grid">
        {categories.map((cat, idx) => (
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
