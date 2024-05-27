import React from 'react';
import './styles/hero.css';
import heroImage from './styles/images/retrato.webp'; // Importar la imagen correctamente

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>Retratos que Hablan por Sí Mismos</h1>
        <p>Fotografía de retratos profesional para capturar la verdadera esencia de cada persona. Capturamos tus momentos especiales con una mirada única y artística, asegurándonos de que cada fotografía cuente una historia inolvidable.</p>
        <div className="hero-buttons">
          <a href="#mis-servicios" className="hero-button">Mis Servicios</a>
          <a href="#contactame" className="hero-button">Contáctame</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;