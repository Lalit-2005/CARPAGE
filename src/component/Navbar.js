import React from 'react'; 
import Feature from './Feature'; 

function Navbar() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src="logo-placeholder.png"
            alt="Goa Signature Car Rentals Logo"
            className="logo-image"
          />
        </div>
        <nav className="nav">
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#booking">Taxi Booking</a>
          <button className="book-now">Book Now</button>
        </nav>
      </header>

      
      <main className="main-content">
        

        
        <Feature />

        
        {[...Array(5)].map((_, index) => (
          <div className="car-card" key={index}>
            <img src="" alt="Baleno Car" className="car-image" />
            <div className="car-details">
              <h2>Rent Baleno New Model (Manual)</h2>
              <p className="reviews">
                <span className="stars">★★★★★</span> (456 reviews)
              </p>
              <p className="booking-info">Minimum 2 days booking</p>
              <div className="specs">
                <p>Manual</p>
                <p>5 Seats</p>
                <p>3 Luggage</p>
                <p>Petrol</p>
                <p>18km/Ltr</p>
                <p>Fuel Cap 40Ltr</p>
              </div>
              <div className="price">
                Starting from <span className="price-amount">₹1200/Day</span>
              </div>
              <div className="actions">
                <button className="call-button">Call to Book</button>
                <button className="whatsapp-button">Whatsapp Now</button>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Contact Form Section */}
      <div className="contact-form-container" id="contact">
        <h2>Contact For Today Best Prices</h2>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Phone Number" required />
          </div>
          <div className="form-row">
            <input type="date" required />
            <input type="date" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Pickup Location" required />
            <input type="text" placeholder="Return Location" required />
          </div>
          <div className="form-row">
            <select required>
              <option value="">Car Type/Model Preferred</option>
              <option value="baleno">Rent Baleno New Model (Manual)</option>
              <option value="thar">Rent Mahindra Thar (Automatic 4x4)</option>
              <option value="swift">Rent Maruti Swift (Manual)</option>
            </select>
          </div>
          <button type="submit" className="submit-button">Submit Now</button>
        </form>
      </div>
    </>
  );
}

export default Navbar;
