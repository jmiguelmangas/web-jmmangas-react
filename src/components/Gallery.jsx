import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lightbox from './Lightbox';
import Masonry from 'react-masonry-css';
import './styles/gallery.css';

const categories = ['Todos', 'corporate', 'linkedin', 'models', 'actors', 'family'];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [galleryItems, setGalleryItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [isShowingAll, setIsShowingAll] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/images');
        const shuffledImages = shuffleArray(response.data);
        setGalleryItems(shuffledImages);
        setDisplayedItems(shuffledImages.slice(0, 8)); // Display first 8 images
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const filteredItems = selectedCategory === 'Todos'
    ? displayedItems
    : displayedItems.filter(item => item.category === selectedCategory);

  const loadMoreImages = () => {
    setDisplayedItems(galleryItems);
    setIsShowingAll(true);
  };

  const showLessImages = () => {
    setDisplayedItems(galleryItems.slice(0, 8));
    setIsShowingAll(false);
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <section className="gallery">
      <h2 className="gallery-title">Galería de Fotos</h2>
      <p className="gallery-instructions">
        Aquí puedes ver algunas de las fotos destacadas. Haz clic en una imagen para verla en tamaño completo. 
        Usa los botones de navegación para ver más o menos fotos.
      </p>
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
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="gallery-grid"
        columnClassName="gallery-grid_column"
      >
        {filteredItems.map((item, index) => (
          <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
            <img src={`http://localhost:5000${item.src}`} alt={item.category} />
          </div>
        ))}
      </Masonry>
      <div className="load-more-container">
        {isShowingAll ? (
          <button className="load-more-button" onClick={showLessImages}>
            Ver menos fotos de la galería
          </button>
        ) : (
          <button className="load-more-button" onClick={loadMoreImages}>
            Ver más fotos de la galería
          </button>
        )}
      </div>
      {isLightboxOpen && (
        <Lightbox
          images={filteredItems}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          closeLightbox={closeLightbox}
        />
      )}
    </section>
  );
}

export default Gallery;
