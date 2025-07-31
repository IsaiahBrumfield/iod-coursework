import React from 'react';
import './Services.css';
import Navbar from './Navbar';
import Footer from './Footer';

const servicesData = [
  {
    name: 'Exterior Detailing',
    description: 'Hand wash, wax, and polish with top-teir products.',
    price: '$100',
    message: '(contact us of details)',
  },
  {
    name: 'Interior Deep Cleaning',
    description: 'Deep cleaning, vaccuming, and upholstery care.',
    price: '$120',
    message: '(contact us for details)',
  },
  {
    name: 'Full Detail',
    description: 'Complete inside and out care for your vheicles.',
    price: '$200',
    message: '(contact us for details)',
  },
];

function Services() {
  return (
    <>
    <Navbar />
    <div className="services-page-container">
      <h2 className="services-page-heading">OurServices</h2>
      <ul className="services-list">
        {servicesData.map((service, index) => (
          <li key={index} className="service-item">
            <div className="service-content">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <span className="service-price">{service.price}</span>
              <p>{service.message}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <Footer />
    </>
  );
}

export default Services;