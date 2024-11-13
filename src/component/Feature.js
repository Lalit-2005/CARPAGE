import React from 'react';


function Features() {
  return (
    <div className="features">
      <h1 className="headline">Find Your Best Dream Car For Rental</h1>
      <p className="subheading">Best rental cars in Goa. Brand new cars for self-drive in Goa. Get yours now.</p>
      <ul>
        <li>Manual & Automatic car rentals in Goa</li>
        <li>Pickup & Drop anywhere in Goa</li>
        <li>No Middleman, 100% success car deliveries</li>
        <li>Govt. approved self-drive cars</li>
        <li>Best prices & on-time delivery</li>
        <li>Unlimited KMs, Take anywhere in Goa</li>
        <li>No hidden charges, all prices include taxes</li>
        <li>90% repeat customers</li>
      </ul>
      <div className="map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
          width="400"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Features;
