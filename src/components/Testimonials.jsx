import React, { useState, useEffect } from 'react';
import './styles/testimonials.css';

const testimonials = [
  {
    name: 'Juan Pérez',
    role: 'CEO',
    company: 'Empresa 1',
    text: 'Las fotos de José Miguel son increíbles. Capturó perfectamente la esencia de nuestra empresa.',
    image: '/images/testimonials/juan.webp'
  },
  {
    name: 'Ana Gómez',
    role: 'Gerente de Marketing',
    company: 'Empresa 2',
    text: 'Estoy muy contenta con mi sesión de fotos para LinkedIn. Me siento más profesional y segura.',
    image: '/images/testimonials/ana.webp'
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Modelo Profesional',
    company: 'Agencia XYZ',
    text: 'El book de modelo que me hizo José Miguel es fantástico. ¡Altamente recomendado!',
    image: '/images/testimonials/carlos.webp'
  },
  {
    name: 'Laura Martínez',
    role: 'Actriz',
    company: 'Producciones LM',
    text: 'El videobook que me hizo José Miguel me ha ayudado a conseguir más audiciones. ¡Excelente trabajo!',
    image: '/images/testimonials/laura.webp'
  },
  {
    name: 'Miguel Santos',
    role: 'Director',
    company: 'Creativos SA',
    text: 'Las fotos corporativas realmente capturan la profesionalidad de nuestro equipo. Estamos muy satisfechos.',
    image: '/images/testimonials/miguel.webp'
  },
  {
    name: 'Sofía López',
    role: 'Gerente de RRHH',
    company: 'Recursos Humanos SA',
    text: 'Las fotos para nuestro sitio web han mejorado significativamente la imagen de nuestra empresa. Muy recomendable.',
    image: '/images/testimonials/sofia.webp'
  },
  {
    name: 'David Ramírez',
    role: 'Modelo',
    company: 'Agencia DR',
    text: 'El book de fotos es increíble. José Miguel tiene un talento único para capturar la esencia de cada persona.',
    image: '/images/testimonials/david.webp'
  },
  {
    name: 'María Torres',
    role: 'Mamá',
    company: 'Familia Torres',
    text: 'Las fotos familiares que nos hizo José Miguel son un tesoro. Capturó momentos muy especiales.',
    image: '/images/testimonials/maria.webp'
  },
  {
    name: 'Pedro González',
    role: 'Gerente de Proyectos',
    company: 'Proyectos PG',
    text: 'Las fotos profesionales han mejorado nuestra presencia en LinkedIn y otras plataformas. Muy satisfechos.',
    image: '/images/testimonials/pedro.webp'
  },
  {
    name: 'Lucía Fernández',
    role: 'Actriz',
    company: 'Teatro LF',
    text: 'El videobook es perfecto. José Miguel capturó mi esencia y talento de una manera excepcional.',
    image: '/images/testimonials/lucia.webp'
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Cambia de testimonio cada 5 segundos
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="testimonials" style={{ backgroundImage: 'url(/images/testimonials.webp)' }}>
      <h2 className="testimonials-title">Testimonios</h2>
      <div className="testimonial-container">
        <button className="nav-button left" onClick={prevTestimonial}>‹</button>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial ${index === current ? 'active' : 'inactive'}`}
          >
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-content">
              <h3 className="testimonial-company">{testimonial.company}</h3>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          </div>
        ))}
        <button className="nav-button right" onClick={nextTestimonial}>›</button>
      </div>
    </section>
  );
}

export default Testimonials;
