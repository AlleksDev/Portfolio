import React from 'react';
import './StackedCardImage.css';

const StackedCardImage = ({ src, alt = 'Card image' }) => {
  return (
    <div className="card-container">
      {/* Tarjetas apiladas detrás que asoman por los lados izquierdo y derecho */}
      <div className="stacked-card stacked-card-left" aria-hidden="true"></div>
      <div className="stacked-card stacked-card-right" aria-hidden="true"></div>
      
      {/* Imagen principal */}
      <div className="main-image-wrapper">
        <img src={src} alt={alt} className="main-image" />
      </div>
    </div>
  );
};

export default StackedCardImage;
