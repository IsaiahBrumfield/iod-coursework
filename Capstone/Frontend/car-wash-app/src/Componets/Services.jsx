import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="page-container services">
      <h2 className="page-heading">OurServices</h2>
      <ul className="services-list">
        <li className="service-item">Exterior Detailing</li>
        <p>Hand wash, wax, and polish with top-teir products.</p>
        
        <li claassName="service-item">Interior Deep Cleaning</li>
        <p>Deep Cleaning, vacuuming, and upholstery care.</p>
        
        <li className="service-item">Full Detail</li>
        <p>Complete inside-and-out care for your vehicle.</p>
      </ul>
    </div>
  );
}

export default Services;