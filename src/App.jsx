import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
