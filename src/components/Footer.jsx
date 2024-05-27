import React from 'react';
import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="footer-text">
          <p>&copy; 2024 José Miguel Mangas. Todos los derechos reservados.</p>
          <p>Dirección: Calle Playa de Louro 4 Collado Villalba (Madrid)</p>
          <p>Teléfono: +34 667 475 165</p>
          <p>Email: jmmangas@gmail.com</p>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/jmiguelmangas" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="mailto:jmmangas@gmail.com">
            <i className="fa fa-envelope"></i>
          </a>
          <a href="https://www.threads.net/@jmiguelmangas" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-threads"></i>
          </a>
          <a href="https://www.tiktok.com/@jmiguelmangas" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-tiktok"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
