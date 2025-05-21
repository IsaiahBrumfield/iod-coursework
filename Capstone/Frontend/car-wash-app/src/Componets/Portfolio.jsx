import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="page-container">
      <h2 className="page-heading">Before and After</h2>
      <div className="image-grid">
        <img
          className="portfolio-img"
          src="https://via.placeholder.com/300x200?text=Before"
          alt="Before"
        />
        <img
          className="portfolio-img"
          src="https://via.placeholder.com?300x200?text=After"
          alt="After"
        />
      </div>
    </div>
  );
}

export default Portfolio;