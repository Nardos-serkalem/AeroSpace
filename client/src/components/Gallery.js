import React from 'react';
import './Gallery.css';

function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>
      <div className="image-grid">
        {/* You will dynamically add images here */}
        <div className="gallery-item">Image 1</div>
        <div className="gallery-item">Image 2</div>
        <div className="gallery-item">Image 3</div>
        {/* ... more images */}
      </div>
    </section>
  );
}

export default Gallery;