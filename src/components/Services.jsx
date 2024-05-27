import React, { useState, useEffect, useRef } from 'react';
import './styles/services.css';

const services = [
  {
    id: 'corporate',
    image: '/images/service1.webp',
    title: "Sesiones corporativas para tu empresa",
    description: "Ofrecemos sesiones fotográficas corporativas que destacan la profesionalidad y la esencia de tu empresa, ideales para perfiles ejecutivos, equipos y eventos empresariales. Nuestro objetivo es capturar la profesionalidad y el espíritu de tu empresa, proporcionando imágenes que reflejen tu identidad y valores.",
  },
  {
    id: 'linkedin',
    image: '/images/service2.webp',
    title: "Sesiones de LinkedIn y Marca Personal",
    description: "Capturamos imágenes profesionales para tu perfil de LinkedIn, marca personal y currículum, ayudándote a destacar en el ámbito laboral con una presentación visualmente impactante. Nos aseguramos de que cada foto transmita tu personalidad y profesionalismo.",
  },
  {
    id: 'model',
    image: '/images/service3.webp',
    title: "Book y Test de Modelo",
    description: "Creamos books de modelos y realizamos tests fotográficos para agencias, resaltando tus mejores ángulos y características para impulsar tu carrera en el mundo del modelaje. Trabajamos contigo para destacar tus mejores atributos y ayudarte a conseguir más oportunidades.",
  },
  {
    id: 'videobook',
    image: '/images/service4.webp',
    title: "Videobook y Book para actrices y actores",
    description: "Producimos videobooks y books para actrices y actores, ofreciendo una presentación visual profesional que destaca tus habilidades y presencia escénica. Nos enfocamos en capturar tu talento y versatilidad, creando contenido que impresione a los agentes y directores de casting.",
  },
  {
    id: 'family',
    image: '/images/service5.webp',
    title: "Retratos familiares",
    description: "Capturamos retratos familiares que inmortalizan momentos especiales con tus seres queridos, creando recuerdos duraderos con un toque artístico y emocional. Queremos que cada foto refleje la conexión y el amor en tu familia.",
  }
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    const track = trackRef.current;
    const slideWidth = track.clientWidth; // Width of each slide
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      handleDotClick(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < services.length - 1) {
      handleDotClick(currentIndex + 1);
    }
  };

  useEffect(() => {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => handleDotClick(index));
    });

    return () => {
      dots.forEach((dot, index) => {
        dot.removeEventListener('click', () => handleDotClick(index));
      });
    };
  }, [currentIndex]);

  return (
    <section id="services">
      <div className="carousel">
        {currentIndex > 0 && (
          <button className="carousel-nav prev" onClick={handlePrevClick} aria-label="Previous slide">&#9664;</button>
        )}
        <div className="carousel-track" ref={trackRef}>
          {services.map((service) => (
            <div key={service.id} className="carousel-slide">
              <div className="service-content">
                <div className="service-image-container">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>
                <div className="service-text-container">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <a href={service.link} className="service-button">Ver más</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {currentIndex < services.length - 1 && (
          <button className="carousel-nav next" onClick={handleNextClick} aria-label="Next slide">&#9654;</button>
        )}
      </div>
      <div className="carousel-navigation">
        {services.map((service, index) => (
          <button
            key={service.id}
            className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Services;
