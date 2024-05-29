import React from 'react';
import './styles/lightbox.css';

const Lightbox = ({ images, currentImageIndex, setCurrentImageIndex, closeLightbox }) => {
  const showPrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const showNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className="lightbox">
      <button className="close-button" onClick={closeLightbox}>×</button>
      <button className="prev-button" onClick={showPrevImage} disabled={currentImageIndex === 0}>‹</button>
      <img src={`http://localhost:5000${images[currentImageIndex].src}`} alt="" className="lightbox-image" />
      <button className="next-button" onClick={showNextImage} disabled={currentImageIndex === images.length - 1}>›</button>
    </div>
  );
};

export default Lightbox;
