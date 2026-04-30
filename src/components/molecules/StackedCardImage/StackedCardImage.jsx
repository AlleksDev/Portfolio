import React from 'react';
import './StackedCardImage.css';

const StackedCardImage = ({ src, alt = 'Card image' }) => {
  return (
    <div className="card-container">
      {/* Tarjetas apiladas detrás (efecto documento) */}
      <div className="stacked-card stacked-card-1"></div>
      <div className="stacked-card stacked-card-2"></div>
      <div className="stacked-card stacked-card-3"></div>
      
      {/* Imagen principal */}
      <img src={src} alt={alt} className="main-image" />
    </div>
  );
};

export default StackedCardImage;
