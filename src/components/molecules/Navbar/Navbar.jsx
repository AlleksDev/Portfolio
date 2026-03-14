import React from 'react';
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
