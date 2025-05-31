import React from 'react';
import './Portfolio.css';
import Navbar from './Navbar';
import Footer from './Footer';


const detailedCars = [
  {
    id: 1,
    name: 'Ford Mustang GT',
    beforeImage: 'https://images.unsplash.com/photo-1581650107963-3e8c1f48241b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    services: ['Exterior Wash', 'Wax & Polish', 'Interior Vacuum'],
    date: 'May 20, 2025',
    clientReview: 'Looks better than new! Super happy with the detail.'
  },
  {
    id: 2,
    name: 'Mercedes-Benz S-Class',
    beforeImage: 'https://images.unsplash.com/photo-1695547274618-89d7560d0909?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    services: ['Full Interior Detail', 'Engine Bay Clean', 'Tire Shine'],
    date: 'May 18, 2025',
    clientReview: 'Fantastic job. They really brought back the luxury look.'
  },
  {
    id: 3,
    name: 'Ford Raptor',
    beforeImage: 'https://images.unsplash.com/photo-1711512302274-8aafe96481bb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    services: ['Clay Bar Treatment', 'Paint Protection', 'Headlight Restoration'],
    date: 'May 15, 2025',
    clientReview: 'Incredible shine! Professional and timely service.'
  }
];

const CarDetailCard = ({ car }) => (
  <div className="detail-card">
    <h2>{car.name}</h2>
    <div className="car-images">
      <div>
        <img src={car.beforeImage} alt={`${car.name} before`} />
      </div>
    </div>
    <ul className="services">
      {car.services.map((service, index) => (
        <li key={index}>✅ {service}</li>
      ))}
    </ul>
    <p className="date">Detailed on: {car.date}</p>
    <blockquote className="review">“{car.clientReview}”</blockquote>
  </div>
);

const DetailedCarsPortfolio = () => (
  <>
  <Navbar />
  <div className="portfolio-wrapper">
    <h1>Washed & Detailed Cars</h1>
    <div className="detail-grid">
      {detailedCars.map(car => (
        <CarDetailCard key={car.id} car={car} />
      ))}
    </div>
  </div>
  <Footer />
  </>
);

export default DetailedCarsPortfolio;
