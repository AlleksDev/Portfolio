import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="reveal">
      <div className="section-inner">
      <div className="section-header">
        <h2 className="section-title">CONTACTO</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-left">
          <h3 className="contact-title">TRABAJEMOS<span>JUNTOS</span></h3>
          <p className="contact-desc">
            ¿Tienes un proyecto en mente o buscas a un desarrollador que integre diseño UX/UI de calidad con un Front-End estructurado? Me encantaría escucharte y convertir esa idea en un producto funcional y estético. Hablemos y llevemos tu visión al siguiente nivel.
          </p>
          <div className="contact-info">
            <div>961 387 3172</div>
            <div>aimr2910@gmail.com</div>
          </div>
          <div className="contact-status">
            Disponible ahora
          </div>
          <div className="contact-socials">
            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
            <a href="#" aria-label="GitHub"><i className="fa-brands fa-github" aria-hidden="true"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>
          </div>
        </div>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-name">Nombre</label>
              <input id="contact-name" type="text" placeholder="Escribe aquí tu nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Correo electrónico</label>
              <input id="contact-email" type="email" placeholder="ejemplo@example.com" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contact-subject">Asunto</label>
            <input id="contact-subject" type="text" placeholder="Pon un asunto" />
          </div>
          <div className="form-group">
            <label htmlFor="contact-message">Mensaje</label>
            <textarea id="contact-message" placeholder="Escribe aquí el mensaje que deseas enviar"></textarea>
          </div>
          <div className="buttons-group">
            <button type="button" className="btn-clear">LIMPIAR</button>
            <button type="button" className="btn-submit">ENVIAR MENSAJE</button>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
};

export default ContactSection;
