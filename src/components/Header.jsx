import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './styles/header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Mi Logo" />
      </div>
      <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
        <ul className="menu">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#commercial-photography">Fotografía Comercial</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Buscar..." />
          <SearchIcon />
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/jmiguelmangas" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="mailto:jmmangas@gmail.com">
            <AlternateEmailIcon />
          </a>
          <a href="https://www.threads.net/@jmiguelmangas" target="_blank" rel="noopener noreferrer">
            <WhatshotIcon />
          </a>
          <a href="https://www.tiktok.com/@jmiguelmangas" target="_blank" rel="noopener noreferrer">
            <WhatshotIcon />
          </a>
        </div>
      </nav>
      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
    </header>
  );
}

export default Header;
