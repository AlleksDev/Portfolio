import os

def write_file(filepath, content):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# 1. index.css
write_file('src/index.css', """@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

:root {
  --black: #080808;
  --dark: #111111;
  --card: #161616;
  --border: #232323;
  --orange: #E15A1A;
  --orange-dim: #b84310;
  --yellow: #FFB800;
  --text: #e8e8e8;
  --muted: #888888;
  --white: #ffffff;
  --bg-grid: #131313;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--black);
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  overflow-x: hidden;
  min-width: 320px;
}

/* OVERLAY GRID */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 24px 24px;
  z-index: -1;
  pointer-events: none;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

ul {
  list-style: none;
}

/* SECTIONS GLOBAL */
section { 
  padding: 120px 80px; 
  max-width: 1400px; 
  margin: 0 auto; 
  position: relative; 
}

.section-header { 
  display: flex; 
  align-items: center; 
  gap: 16px; 
  margin-bottom: 48px; 
}
.section-dot { 
  width: 6px; 
  height: 6px; 
  border-radius: 50%; 
  background: var(--orange); 
  box-shadow: 0 0 10px var(--orange); 
}
.section-title { 
  font-family: 'Bebas Neue', sans-serif; 
  font-size: 3.5rem; 
  letter-spacing: 0.05em; 
  color: var(--white); 
}

@media (max-width: 1024px) {
  section { padding: 80px 24px; }
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--black);
}
::-webkit-scrollbar-thumb {
  background: var(--border);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--orange);
}
""")

# 2. MainLayout
write_file('src/components/templates/MainLayout/MainLayout.jsx', """import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
""")

write_file('src/components/templates/MainLayout/MainLayout.css', """
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1;
}
""")

# 3. Header/Navbar
write_file('src/components/organisms/Header/Header.jsx', """import React from 'react';
import Navbar from '../../molecules/Navbar/Navbar';

const Header = () => {
  return (
    <header>
      <Navbar />
    </header>
  );
};

export default Header;
""")

write_file('src/components/molecules/Navbar/Navbar.jsx', """import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <a href="#" className="nav-logo"><span className="slash">//</span>Alleks</a>
      <ul className="nav-links">
        <li><a href="#about">SOBRE MÍ</a></li>
        <li><a href="#skills">HABILIDADES</a></li>
        <li><a href="#experience">EXPERIENCIA</a></li>
        <li><a href="#projects">PROYECTOS</a></li>
        <li><a href="#contact">CONTACTO</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
""")

write_file('src/components/molecules/Navbar/Navbar.css', """nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  padding: 24px 80px; display: flex; justify-content: space-between; align-items: center;
  background: linear-gradient(to bottom, rgba(8,8,8,0.95), transparent); backdrop-filter: blur(8px);
}
.nav-logo { display: flex; align-items: center; font-family: 'Bebas Neue', sans-serif; font-size: 2.2rem; letter-spacing: 0.05em; color: var(--white); gap: 4px; text-decoration: none; }
.nav-logo .slash { color: var(--orange); }
.nav-links { display: flex; gap: 32px; list-style: none; }
.nav-links a { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: 0.1em; color: var(--white); text-decoration: none; transition: color 0.2s; }
.nav-links a:hover { color: var(--orange); }

@media (max-width: 1024px) {
  nav { padding: 24px; }
  .nav-links { display: none; }
}
""")

# 4. Hero Section
write_file('src/components/organisms/HeroSection/HeroSection.jsx', """import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <>
      <section id="hero">
        <div className="hero-inner">
          <h1 className="hero-title">CÓDIGO<br/><span>+</span> DISEÑO</h1>
          <p className="hero-desc">Construyo experiencias digitales, busco la excelencia del código y el diseño, de la arquitectura a la gráfica</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">CONTACTAME</a>
            <a href="#experience" className="btn-outline">MI EXPERIENCIA</a>
          </div>
          <div className="hero-socials">
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-content">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="marquee-item">UI/UX DESIGN <div className="dot-separator"></div></div>
              <div className="marquee-item">FRONTEND <div className="dot-separator"></div></div>
              <div className="marquee-item">BACKEND <div className="dot-separator"></div></div>
              <div className="marquee-item">ILLUSTRATION <div className="dot-separator"></div></div>
              <div className="marquee-item">IOT <div className="dot-separator"></div></div>
              <div className="marquee-item">3D MODELING <div className="dot-separator"></div></div>
              <div className="marquee-item">CLEAN ARCHITECTURE <div className="dot-separator"></div></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
""")

write_file('src/components/organisms/HeroSection/HeroSection.css', """#hero {
  min-height: 100vh; display: flex; align-items: center; padding: 0 80px; position: relative;
}
#hero::before {
  content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 80% 30%, rgba(225, 90, 26, 0.2) 0%, transparent 50%); pointer-events: none; z-index: 0;
}
.hero-inner { position: relative; z-index: 1; max-width: 800px; padding-top: 80px; }
.hero-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(5rem, 12vw, 10rem); line-height: 0.85; color: var(--white); margin-bottom: 24px; text-shadow: 0 0 40px rgba(225, 90, 26, 0.3); }
.hero-title span { color: var(--orange); }
.hero-desc { font-size: 1.1rem; color: var(--muted); max-width: 500px; line-height: 1.6; margin-bottom: 40px; }
.hero-actions { display: flex; align-items: center; gap: 24px; margin-bottom: 48px; }
.btn-primary { padding: 16px 32px; background: var(--orange); color: var(--white); text-decoration: none; font-family: 'Bebas Neue', sans-serif; font-size: 1.2rem; letter-spacing: 0.05em; transition: background 0.3s; }
.btn-primary:hover { background: var(--orange-dim); }
.btn-outline { padding: 16px 32px; color: var(--white); text-decoration: none; font-family: 'Bebas Neue', sans-serif; font-size: 1.2rem; letter-spacing: 0.05em; border-bottom: 1px solid var(--border); transition: color 0.3s, border-color 0.3s; }
.btn-outline:hover { color: var(--orange); border-color: var(--orange); }

.hero-socials { display: flex; gap: 20px; font-size: 1.5rem; }
.hero-socials a { color: var(--muted); transition: color 0.3s; }
.hero-socials a:hover { color: var(--white); }

/* MARQUEE */
.marquee { background: var(--orange); padding: 16px 0; overflow: hidden; position: relative; border-top: 1px solid var(--orange-dim); border-bottom: 1px solid var(--orange-dim); display: flex; }
.marquee-content { display: flex; white-space: nowrap; animation: marquee-scroll 20s linear infinite; }
.marquee-item { font-family: 'Bebas Neue', sans-serif; font-size: 1.4rem; color: var(--black); letter-spacing: 0.1em; display: flex; align-items: center; gap: 32px; padding: 0 16px; }
.dot-separator { width: 6px; height: 6px; background: var(--black); border-radius: 50%; opacity: 0.5; }
@keyframes marquee-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

@media (max-width: 1024px) {
  #hero { padding: 0 24px; }
  .hero-title { font-size: 5rem; }
}
""")

# 5. About Section
write_file('src/components/organisms/AboutSection/AboutSection.jsx', """import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about">
      <div className="section-header">
        <div className="section-dot"></div>
        <h2 className="section-title">SOBRE MÍ</h2>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>Lorem ipsum dolor sit amet <strong>consectetur</strong> adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus amet sapien fringilla. Pellentesque sit amet sapien fringilla, mattis amet ligula consectetur adipiscing sed.</p>
          <p>Lorem ipsum dolor sit amet. <strong>Pellentesque sit amet</strong> sapien fringilla, mattis ligula consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. <strong>Pellentesque sit amet</strong> sapien fringilla, mattis ligula consectetur.</p>
          <a href="#" className="about-btn"><div className="dot"></div> Open to work</a>
        </div>
        <div className="about-image">
          <div className="about-image-frame"></div>
          <div className="about-image-inner"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
""")

write_file('src/components/organisms/AboutSection/AboutSection.css', """.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.about-text p { font-size: 1.1rem; line-height: 1.8; color: var(--muted); margin-bottom: 24px; }
.about-text p strong { color: var(--orange); font-weight: normal; }
.about-btn { display: inline-flex; align-items: center; gap: 12px; padding: 12px 24px; border: 1px solid var(--border); border-radius: 100px; color: var(--white); font-family: 'DM Sans', sans-serif; font-size: 0.9rem; text-decoration: none; margin-top: 16px; transition: 0.3s; }
.about-btn:hover { border-color: var(--orange); }
.about-btn .dot { width: 8px; height: 8px; background: var(--orange); border-radius: 50%; box-shadow: 0 0 8px var(--orange); }

.about-image { position: relative; width: 100%; max-width: 450px; aspect-ratio: 4/5; margin: auto; }
.about-image-frame { position: absolute; inset: 0; border: 2px solid var(--orange); transform: rotate(5deg) scale(1.02); z-index: 0; }
.about-image-inner { position: absolute; inset: 0; background: var(--card); z-index: 1; border: 1px solid var(--border); }

@media (max-width: 1024px) {
  .about-grid { grid-template-columns: 1fr; }
}
""")

# 6. Experience Section
write_file('src/components/organisms/ExperienceSection/ExperienceSection.jsx', """import React from 'react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const experiences = [
    {
      num: '01',
      title: 'TECH SIN FRONTERAS',
      date: 'Nov. 2023',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nisi nikh, ut maximus arcu.',
      tags: ['JavaScript', 'Pixel Studio'],
      award: '1er lugar'
    },
    {
      num: '02',
      title: 'VARA SIDE HACKATHON',
      date: 'Oct. 2024',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nisi nikh, ut maximus arcu.',
      tags: ['JavaScript', 'Pixel Studio'],
      award: '1er lugar'
    },
    {
      num: '03',
      title: 'MAIN HACKATHON',
      date: 'Ene. 2025',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nisi nikh, ut maximus arcu.',
      tags: ['JavaScript', 'Pixel Studio'],
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
              <div>
                <h3 className="exp-title">{exp.title}</h3>
                <span className="exp-date">{exp.date}</span>
              </div>
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
""")

write_file('src/components/organisms/ExperienceSection/ExperienceSection.css', """.exp-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
.exp-card { border-top: 2px solid var(--orange); padding: 32px 0; display: flex; flex-direction: column; gap: 16px; }
.exp-header { display: flex; align-items: flex-end; gap: 16px; margin-bottom: 8px; }
.exp-num { font-family: 'Bebas Neue', sans-serif; font-size: 4rem; color: var(--yellow); line-height: 0.8; }
.exp-title { font-family: 'Bebas Neue', sans-serif; font-size: 1.8rem; color: var(--white); letter-spacing: 0.05em; line-height: 1; }
.exp-date { font-family: 'Space Mono', monospace; font-size: 0.8rem; color: var(--muted); display: block; margin-top: 8px; }
.exp-desc { font-size: 1rem; color: var(--muted); line-height: 1.7; flex: 1; }
.exp-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 16px; }
.exp-tag { padding: 6px 12px; font-family: 'Space Mono', monospace; font-size: 0.75rem; border: 1px solid var(--border); color: var(--muted); }
.exp-tag.highlight { border-color: var(--orange); color: var(--orange); }

@media (max-width: 1024px) {
  .exp-grid { grid-template-columns: 1fr; }
}
""")

# 7. Projects Section
write_file('src/components/organisms/ProjectsSection/ProjectsSection.jsx', """import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    { title: 'VIXEL', tags: ['React + JavaScript', 'Figma', 'Pixel Studio'], desc: 'Lorem ipsum dolor sit amet ichi ny san nya arigato' },
    { title: 'FRIMEET', tags: ['Angular + TypeScript', 'Figma', 'Sketch'], desc: 'Lorem ipsum dolor sit amet ichi ny san nya arigato' },
    { title: 'VIXEL', tags: ['React + JavaScript', 'Figma', 'Pixel Studio'], desc: 'Lorem ipsum dolor sit amet ichi ny san nya arigato' },
    { title: 'VIXEL', tags: ['React + JavaScript', 'Figma', 'Pixel Studio'], desc: 'Lorem ipsum dolor sit amet ichi ny san nya arigato' },
    { title: 'FRIMEET', tags: ['React + TypeScript', 'Figma', 'Pixel Studio'], desc: 'Lorem ipsum dolor sit amet ichi ny san nya arigato' },
    { title: 'VIXEL', tags: ['React + JavaScript', 'Figma', 'Pixel Studio'], desc: 'Lorem ipsum dolor sit amet ichi ny san nya arigato' },
  ];

  return (
    <section id="projects">
      <div className="section-header">
        <div className="section-dot"></div>
        <h2 className="section-title">PROYECTOS</h2>
      </div>
      <div className="projects-filters">
        <button className="proj-filter active"><i className="fa-solid fa-globe"></i> APLICACIONES WEB</button>
        <button className="proj-filter"><i className="fa-brands fa-android"></i> APLICACIONES ANDROID</button>
        <button className="proj-filter"><i className="fa-solid fa-pen-nib"></i> ILUSTRACIONES</button>
      </div>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-head-link">
              <span>about</span><span>learn</span><span>portfolio</span><span>blog</span><span>contact</span>
            </div>
            <div className="project-img"></div>
            <div className="project-info">
              <div className="project-tags">
                {proj.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
            </div>
          </div>
        ))}
        <div className="projects-more">
          <h3>MÁS PROYECTOS PRONTO...</h3>
          <p>Sigo desarrollando más proyectos.<br/>También puedes ver contribuciones menores en mi GitHub</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
""")

write_file('src/components/organisms/ProjectsSection/ProjectsSection.css', """.projects-filters { display: flex; gap: 16px; margin-bottom: 48px; border-bottom: 1px solid var(--border); padding-bottom: 24px; flex-wrap: wrap; }
.proj-filter { padding: 12px 24px; font-family: 'Bebas Neue', sans-serif; font-size: 1.2rem; border: 1px solid var(--border); color: var(--muted); background: transparent; cursor: pointer; border-radius: 100px; display: flex; align-items: center; gap: 8px; transition: 0.3s; }
.proj-filter.active { border-color: var(--yellow); color: var(--yellow); }

.projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
.project-card { background: var(--card); border: 1px solid var(--border); overflow: hidden; display: flex; flex-direction: column; }
.project-img { height: 240px; background: #222; position: relative; border-bottom: 1px solid var(--border); }
.project-info { padding: 24px; display: flex; flex-direction: column; flex: 1; }
.project-tags { display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap; }
.project-tag { padding: 4px 10px; background: rgba(225,90,26,0.1); color: var(--orange); font-size: 0.75rem; font-family: 'Space Mono', monospace; border: 1px solid rgba(225,90,26,0.2); }
.project-title { font-family: 'Bebas Neue', sans-serif; font-size: 2.2rem; margin-bottom: 8px; letter-spacing: 0.05em; }
.project-desc { font-size: 0.95rem; color: var(--muted); line-height: 1.6; flex: 1; }
.project-head-link { font-family: 'Space Mono', monospace; font-size: 0.7rem; color: var(--muted); display: flex; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid var(--border); text-transform: uppercase; }

.projects-more { grid-column: 1 / -1; display: flex; flex-direction: column; align-items: flex-end; margin-top: 48px; text-align: right; }
.projects-more h3 { font-family: 'Bebas Neue', sans-serif; font-size: 2rem; color: var(--orange); margin-bottom: 8px; }
.projects-more p { color: var(--muted); font-size: 0.95rem; }

@media (max-width: 1024px) {
  .projects-grid { grid-template-columns: 1fr; }
}
""")

# 8. Skills Section
write_file('src/components/organisms/SkillsSection/SkillsSection.jsx', """import React from 'react';
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
          { icon: 'fa-users', title: 'TRABAJO EN EQUIPO' },
          { icon: 'fa-comment', title: 'COMUNICACIÓN', reg: true },
          { icon: 'fa-wand-magic-sparkles', title: 'CREATIVIDAD' },
          { icon: 'fa-crown', title: 'LIDERAZGO' },
          { icon: 'fa-bolt', title: 'APRENDIZAJE RÁPIDO' },
          { icon: 'fa-brain', title: 'PENSAMIENTO CRÍTICO' },
          { icon: 'fa-arrows-spin', title: 'ADAPTABILIDAD' },
          { icon: 'fa-gauge-high', title: 'TRABAJO BAJO PRESIÓN' }
        ].map((item, idx) => (
          <div className="soft-item" key={idx}>
            <h4><i className={`${item.reg ? 'fa-regular' : 'fa-solid'} ${item.icon}`}></i> {item.title}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi.</p>
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
        { icon: 'fa-bullseye', title: 'Arquitectura limpia' },
        { icon: 'fa-hexagon-nodes', title: 'Hexagonal / Puertos y adaptadores' },
        { icon: 'fa-triangle-exclamation', title: 'Modelo Vista Controlador (MVC)' },
        { icon: 'fa-share-nodes', title: 'Event Driven' },
        { icon: 'fa-cube', title: 'Modelo Vista ViewModelo (MVVM)' },
        { icon: 'fa-cubes', title: 'Patrones de diseño' }
      ].map((item, idx) => (
        <div className="pattern-card" key={idx}>
          <div className="pattern-icon"><i className={`fa-solid ${item.icon}`}></i></div>
          <div className="pattern-info">
            <h4>{item.title}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const TechSkills = () => {
  const categories = [
    {
      title: 'Frontend', icon: 'fa-code',
      items: [
        { name: 'HTML', icon: 'fa-html5', brand: true, level: 'Avanzado', levelClass: 'level-high' },
        { name: 'CSS', icon: 'fa-css3-alt', brand: true, level: 'Avanzado', levelClass: 'level-high' },
        { name: 'Tailwind', icon: 'fa-css3', brand: true, level: 'Medio', levelClass: 'level-mid' },
        { name: 'JetpackCompose', icon: 'fa-android', brand: true, level: 'Principiante', levelClass: 'level-high' },
        { name: 'Angular', icon: 'fa-angular', brand: true, level: 'Medio', levelClass: 'level-mid' },
        { name: 'React', icon: 'fa-react', brand: true, level: 'Medio', levelClass: 'level-mid' }
      ]
    },
    {
      title: 'Diseño', icon: 'fa-pen-nib',
      items: [
        { name: 'Blender', icon: 'fa-cube', level: 'Principiante', levelClass: 'level-high' },
        { name: 'Affinity', icon: 'fa-a', level: 'Avanzado', levelClass: 'level-high' },
        { name: 'Gimp', icon: 'fa-goodreads-g', brand: true, level: 'Principiante', levelClass: 'level-high' },
        { name: 'Figma', icon: 'fa-figma', brand: true, level: 'Avanzado', levelClass: 'level-high' },
        { name: 'SolidWorks', icon: 'fa-cubes', level: 'Medio', levelClass: 'level-mid' }
      ]
    },
    {
      title: 'Backend', icon: 'fa-server',
      items: [
        { name: 'PostgreSQL', icon: 'fa-database', level: 'Medio', levelClass: 'level-mid' },
        { name: 'MySQL', icon: 'fa-database', level: 'Avanzado', levelClass: 'level-high' },
        { name: 'MongoDB', icon: 'fa-leaf', level: 'Avanzado', levelClass: 'level-high' },
        { name: 'FastAPI', icon: 'fa-bolt', level: 'Principiante', levelClass: 'level-high' },
        { name: 'Express', icon: 'fa-etsy', brand: true, level: 'Avanzado', levelClass: 'level-high' },
        { name: 'Node js', icon: 'fa-node-js', brand: true, level: 'Medio', levelClass: 'level-mid' }
      ]
    },
    {
      title: 'DevOps', icon: 'fa-cloud',
      items: [
        { name: 'Ubuntu', icon: 'fa-ubuntu', brand: true, level: 'Medio', levelClass: 'level-mid' },
        { name: 'AWS', icon: 'fa-aws', brand: true, level: 'Medio', levelClass: 'level-mid' },
        { name: 'Docker', icon: 'fa-docker', brand: true, level: 'Principiante', levelClass: 'level-high' },
        { name: 'Cloudflare', icon: 'fa-cloud', level: 'Medio', levelClass: 'level-mid' },
        { name: 'NginX', icon: 'fa-network-wired', level: 'Principiante', levelClass: 'level-high' },
        { name: 'GitHub', icon: 'fa-github', brand: true, level: 'Avanzado', levelClass: 'level-high' }
      ]
    },
    {
      title: 'IOT & herramientas', icon: 'fa-microchip',
      items: [
        { name: 'Raspberry Pi', icon: 'fa-raspberry-pi', brand: true, level: 'Principiante', levelClass: 'level-high' },
        { name: 'ESP32', icon: 'fa-microchip', level: 'Avanzado', levelClass: 'level-high' },
        { name: 'Arduino', icon: 'fa-infinity', level: 'Avanzado', levelClass: 'level-high' },
        null,
        { name: 'RabbitMQ', icon: 'fa-rabbit', level: 'Medio', levelClass: 'level-mid' },
        { name: 'Git', icon: 'fa-git-alt', brand: true, level: 'Avanzado', levelClass: 'level-high' }
      ]
    },
    {
      title: 'Lenguajes', icon: 'fa-code-branch',
      items: [
        { name: 'C++', icon: 'fa-c', level: 'Principiante', levelClass: 'level-high' },
        { name: 'Python', icon: 'fa-python', brand: true, level: 'Medio', levelClass: 'level-mid' },
        { name: 'JavaScript', icon: 'fa-js', brand: true, level: 'Medio', levelClass: 'level-mid' },
        { name: 'Go', icon: 'fa-g', level: 'Avanzado', levelClass: 'level-high' },
        { name: 'Kotlin', icon: 'fa-k', level: 'Avanzado', levelClass: 'level-high' },
        { name: 'Java', icon: 'fa-java', brand: true, level: 'Medio', levelClass: 'level-mid' }
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
                  <span className="tech-name"><i className={`${item.brand ? 'fa-brands' : 'fa-solid'} ${item.icon}`}></i> {item.name}</span>
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
""")

write_file('src/components/organisms/SkillsSection/SkillsSection.css', """
/* HABILIDADES BLANDAS */
.soft-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 80px; align-items: center; }
.soft-graphic { width: 100%; aspect-ratio: 1; position: relative; display: flex; align-items: center; justify-content: center; }
.soft-cube { width: 200px; height: 200px; background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="50,15 85,35 50,55 15,35" fill="%23ffb800"/><polygon points="15,35 50,55 50,95 15,75" fill="%23b84310"/><polygon points="85,35 50,55 50,95 85,75" fill="%23e15a1a"/></svg>') no-repeat center; background-size: contain; }

.soft-items { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.soft-item { padding: 24px; border: 1px solid var(--border); border-left: 2px solid var(--orange); background: var(--black); }
.soft-item h4 { font-family: 'Bebas Neue', sans-serif; font-size: 1.4rem; margin-bottom: 8px; display: flex; align-items: center; gap: 12px; letter-spacing: 0.05em; }
.soft-item h4 i { color: var(--white); font-size: 1.1rem; }
.soft-item p { font-size: 0.85rem; color: var(--muted); line-height: 1.6; }

/* PATRONES */
.patterns-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.pattern-card { display: flex; gap: 24px; padding: 32px; background: var(--black); border: 1px solid var(--border); }
.pattern-icon { width: 48px; height: 48px; flex-shrink: 0; background: rgba(255,184,0,0.1); border: 1px solid rgba(255,184,0,0.3); display: flex; align-items: center; justify-content: center; color: var(--yellow); font-size: 1.4rem; }
.pattern-info h4 { font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 1.1rem; margin-bottom: 12px; }
.pattern-info p { font-size: 0.95rem; color: var(--muted); line-height: 1.6; }

/* CONOCIMIENTOS TECNICOS */
.tech-grid { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--border); }
.tech-category { padding: 40px; border: 1px solid var(--border); background: var(--black); }
.tech-cat-title { font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 1.2rem; display: flex; align-items: center; gap: 12px; margin-bottom: 32px; }
.tech-items { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.tech-item { display: flex; flex-direction: column; gap: 8px; padding: 16px; background: var(--card); border: 1px solid var(--border); }
.tech-item.empty { border: none; background: transparent; }
.tech-name { font-size: 0.95rem; display: flex; align-items: center; gap: 8px; }
.tech-name i { color: var(--orange); }
.tech-level { font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 2px 8px; border-radius: 2px; display: inline-block; width: max-content; }
.level-high { background: rgba(225,90,26,0.15); color: var(--orange); }
.level-mid { background: rgba(255,184,0,0.15); color: var(--yellow); }

@media (max-width: 1024px) {
  .soft-grid, .patterns-grid, .tech-grid { grid-template-columns: 1fr; }
  .soft-items { grid-template-columns: 1fr; }
}
""")

# 9. Contact Section
write_file('src/components/organisms/ContactSection/ContactSection.jsx', """import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="section-header">
        <div className="section-dot"></div>
        <h2 className="section-title">CONTACTO</h2>
      </div>
      <div className="contact-grid">
        <div>
          <h3 className="contact-title">TRABAJEMOS<br/><span>JUNTOS</span></h3>
          <p style={{ color: 'var(--muted)', lineHeight: '1.7', fontSize: '1.05rem' }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nisl nibh, ut maximus arcu.
          </p>
          <div className="contact-info">
            <div><strong>Teléfono:</strong> 961 387 3172</div>
            <div><strong>Email:</strong> eamir2910@gmail.com</div>
          </div>
          <div className="contact-status">
            <div className="dot"></div> Disponible ahora
          </div>
          <div className="contact-socials">
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" placeholder="Escribe aquí tu nombre" />
            </div>
            <div className="form-group">
              <label>Correo electrónico</label>
              <input type="email" placeholder="ejemplo@example.com" />
            </div>
          </div>
          <div className="form-group">
            <label>Asunto</label>
            <input type="text" placeholder="Pon un asunto" />
          </div>
          <div className="form-group">
            <label>Mensaje</label>
            <textarea placeholder="Escribe aquí el mensaje que deseas enviar"></textarea>
          </div>
          <button type="button" className="btn-submit">ENVIAR MENSAJE</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
""")

write_file('src/components/organisms/ContactSection/ContactSection.css', """.contact-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 120px; }
.contact-title { font-family: 'Bebas Neue', sans-serif; font-size: 4.5rem; line-height: 0.9; margin-bottom: 24px; letter-spacing: 0.02em; }
.contact-title span { color: var(--orange); }
.contact-info { margin-top: 48px; display: flex; flex-direction: column; gap: 16px; font-size: 1.1rem; }
.contact-info strong { font-family: 'Bebas Neue', sans-serif; font-size: 1.3rem; letter-spacing: 0.05em; width: 80px; display: inline-block; }
.contact-status { display: inline-flex; align-items: center; gap: 12px; margin-top: 32px; font-family: 'Space Mono', monospace; font-size: 0.9rem; color: var(--yellow); }
.contact-status .dot { width: 10px; height: 10px; background: var(--yellow); border-radius: 50%; box-shadow: 0 0 10px var(--yellow); }
.contact-socials { display: flex; gap: 24px; font-size: 1.5rem; margin-top: 40px; }
.contact-socials a { color: var(--muted); transition: 0.3s; }
.contact-socials a:hover { color: var(--white); }

.contact-form { display: flex; flex-direction: column; gap: 32px; background: var(--black); }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
.form-group { display: flex; flex-direction: column; gap: 12px; }
.form-group label { font-size: 0.9rem; color: var(--muted); }
.form-group input, .form-group textarea { width: 100%; padding: 16px; background: transparent; border: 1px solid var(--border); color: var(--white); font-family: 'DM Sans', sans-serif; font-size: 1rem; outline: none; transition: 0.3s; }
.form-group input:focus, .form-group textarea:focus { border-color: var(--orange); }
.form-group textarea { min-height: 120px; resize: vertical; }
.btn-submit { align-self: center; padding: 16px 48px; background: var(--orange); color: var(--white); font-family: 'Bebas Neue', sans-serif; font-size: 1.2rem; border: none; cursor: pointer; transition: 0.3s; width: 100%; letter-spacing: 0.05em; }
.btn-submit:hover { background: var(--orange-dim); }

@media (max-width: 1024px) {
  .contact-grid { grid-template-columns: 1fr; gap: 48px; }
  .form-row { grid-template-columns: 1fr; }
}
""")

# 10. Footer Section
write_file('src/components/organisms/Footer/Footer.jsx', """import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="footer-logo"><span className="slash">//</span>Alleks</div>
        <div className="footer-subtitle">FullStack - UX/UI Designer - Illustrator</div>
      </div>
      <div className="footer-copy">© 2026 Alleks. Todos los derechos reservados</div>
      <div className="footer-follow">
        <span>Sígueme</span>
        <div className="footer-socials">
          <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i className="fa-brands fa-github"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
""")

write_file('src/components/organisms/Footer/Footer.css', """footer { background: var(--card); border-top: 1px solid var(--border); padding: 40px 80px; display: flex; justify-content: space-between; align-items: center; margin-top: 120px; }
.footer-logo { font-family: 'Bebas Neue', sans-serif; font-size: 2.5rem; letter-spacing: 0.05em; color: var(--white); line-height: 1; }
.footer-logo span { color: var(--orange); }
.footer-subtitle { font-family: 'Space Mono', monospace; font-size: 0.75rem; color: var(--muted); margin-top: 4px; }
.footer-copy { font-size: 0.9rem; color: var(--muted); }
.footer-follow { display: flex; align-items: center; gap: 24px; }
.footer-follow span { font-size: 0.9rem; color: var(--white); }
.footer-socials { display: flex; gap: 16px; font-size: 1.4rem; }
.footer-socials a { color: var(--muted); transition: 0.3s; }
.footer-socials a:hover { color: var(--white); }

@media (max-width: 1024px) {
  footer { flex-direction: column; gap: 32px; text-align: center; }
}
""")

# 11. HomePage
write_file('src/pages/HomePage/HomePage.jsx', """import React from 'react';
import MainLayout from '../../components/templates/MainLayout/MainLayout';
import HeroSection from '../../components/organisms/HeroSection/HeroSection';
import AboutSection from '../../components/organisms/AboutSection/AboutSection';
import ExperienceSection from '../../components/organisms/ExperienceSection/ExperienceSection';
import ProjectsSection from '../../components/organisms/ProjectsSection/ProjectsSection';
import SkillsSection from '../../components/organisms/SkillsSection/SkillsSection';
import ContactSection from '../../components/organisms/ContactSection/ContactSection';

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </MainLayout>
  );
};

export default HomePage;
""")

print("Done writing python script")
