import React, { useEffect, useState } from 'react';
const testimonials = [
    {
      name: "Rahul Sharma",
      feedback: "Excellent service! The car was in perfect condition, and the booking process was smooth. Highly recommend!",
      rating: "★★★★★",
    },
    {
      name: "Anjali Verma",
      feedback: "Affordable rates and friendly service. The car made our Goa trip unforgettable!",
      rating: "★★★★★",
    },
    {
      name: "Ravi Kumar",
      feedback: "Great experience overall! The pickup and drop-off were hassle-free. Will definitely book again.",
      rating: "★★★★☆",
    },
    {
      name: "Priya Singh",
      feedback: "The car was clean, well-maintained, and exactly as advertised. Customer support was prompt and helpful.",
      rating: "★★★★★",
    },
  ];
  
  const CustomerFeedback = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const feedbackSection = document.getElementById('feedback-section');
        if (feedbackSection) {
          const rect = feedbackSection.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            setIsVisible(true);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <div className="feedback-container" id="feedback-section">
        <h2 className="feedback-title">What Our Customers Say</h2>
        <div className={`testimonials ${isVisible ? 'fade-in' : ''}`}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="feedback">{testimonial.feedback}</p>
              <p className="rating">{testimonial.rating}</p>
              <p className="customer-name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CustomerFeedback;