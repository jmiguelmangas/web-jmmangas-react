import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/gallery.css';

const categories = ['Todos', 'corporate', 'linkedin', 'models', 'actors', 'family'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/images');
        console.log('Fetched images:', response.data); // Log fetched images to verify paths
        setGalleryItems(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const filteredItems = selectedCategory === 'Todos'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="gallery">
      <div className="filter">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {filteredItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={`http://localhost:5000${item.src}`} alt={item.category} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
