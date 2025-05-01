import React from 'react';
import './Gallery.css';
import image1 from '../assets/images/image1.jpg'; // Import your images
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';

function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>
      <div className="image-grid">
        <div className="gallery-item">
          <img src={image1} alt="Description 1" />
          <p className="image-description">One-line description of image 1.</p>
        </div>
        <div className="gallery-item">
          <img src={image2} alt="Description 2" />
          <p className="image-description">Brief detail about image 2.</p>
        </div>
        <div className="gallery-item">
          <img src={image3} alt="Description 3" />
          <p className="image-description">A single line explaining image 3.</p>
        </div>
        {/* ... more images */}
      </div>
    </section>
  );
}

export default Gallery;