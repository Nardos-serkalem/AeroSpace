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
          <p className="image-description">A behind-the-scenes look at our team advancing research and real-time forecasting.

</p>
        </div>
        <div className="gallery-item">
          <img src={image2} alt="Description 2" />
          <p className="image-description">Showcasing our recent space innovation summit bringing together minds across Russia.</p>
        </div>
        <div className="gallery-item">
          <img src={image3} alt="Description 3" />
          <p className="image-description">Empowering future scientists through hands-on aerospace training and workshops.</p>
        </div>
        {/* ... more images */}
      </div>
    </section>
  );
}

export default Gallery;