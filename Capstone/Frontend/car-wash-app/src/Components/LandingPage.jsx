import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="landing-container">
        <section className="home">
          <h1>PHrozen 'N' Time Detailing</h1>
          <p>Restore your car to showroom condition. Inside and out.</p>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </section>

        <div className="services-heading">
          <section className="services">
            <button onClick={() => navigate("/services")}>Our Services</button>
          </section>

          <section className="before and after">
            <button onClick={() => navigate("/portfolio")}>Portfolio</button>
          </section>

          <section className="contact">
            <button onClick={() => navigate("/contact")}>Contact</button>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LandingPage;
