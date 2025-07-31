import React from 'react';
import './Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <>
    <Navbar />
    <div className="page-container contact">
      <h2 className="contact-page-heading">My Contact</h2>
      <ul className="contact-list">
        <li className="contact-item">Isaiah Brumfield</li>
        <li className="contact-item">1(800)5552939</li>
        <li className="contact-item">ibrum@yahoo.com</li>
        <li className="contact-item">2770 Fruit Lane</li>
      </ul>
    </div>
    <Footer />
    </>
  );
}

export default Contact;