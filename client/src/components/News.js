import React from 'react';
import './News.css';

function News() {
  return (
    <section id="news" className="news-section">
      <h2>Latest News</h2>
      <div className="news-list">
        <div className="news-item">
          <h3>News Title 1</h3>
          <p>Brief description of the news article.</p>
          <a href="#">Read More</a>
        </div>
        <div className="news-item">
          <h3>News Title 2</h3>
          <p>Another interesting news item.</p>
          <a href="#">Read More</a>
        </div>
        {/* Add more news items dynamically */}
      </div>
    </section>
  );
}

export default News;