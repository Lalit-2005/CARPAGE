import React from 'react';

function CarCard({ car }) {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />
      <div className="car-details">
        <h3>{car.name}</h3>
        <div className="rating">
          <span>⭐⭐⭐⭐⭐</span> ({car.reviews} reviews)
        </div>
        <p className="booking-note">Minimum {car.minDays} days booking</p>
        <div className="car-info">
          <div><b>Type:</b> {car.type}</div>
          <div><b>Seats:</b> {car.seats}</div>
          <div><b>Fuel:</b> {car.fuel}</div>
          <div><b>Fuel Cap:</b> {car.fuelCap}</div>
        </div>
        <div className="car-price">
          Starting from <span>₹{car.price}/Day</span>
        </div>
        <div className="button-group">
          <button className="btn call-btn">Call to Book</button>
          <button className="btn whatsapp-btn">Whatsapp Now</button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
