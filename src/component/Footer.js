import React from 'react';
const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Trusted by Brands Section */}
      <div className="trusted-brands">
        <h3>Trusted by Multiple Brands</h3>
        <div className="brand-logos">
          <img src="" alt="Brand 1" className="brand-logo" />
          <img src="" alt="Brand 2" className="brand-logo" />
          <img src="" alt="Brand 3" className="brand-logo" />
          <img src="" alt="Brand 4" className="brand-logo" />
          <img src="" alt="Brand 5" className="brand-logo" />
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="footer-links">
        <div className="link-column">
          <h4>Quick Links</h4>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#booking">Taxi Booking</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="link-column">
          <h4>Support</h4>
          <a href="#faq">FAQ</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#support">Help & Support</a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Goa Signature Car Rentals. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
