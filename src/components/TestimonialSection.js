import React, { useState } from 'react';
import './TestimonialSection.css';

const TestimonialSection = ({ 
  testimonials = [
    {
      id: 1,
      name: 'Anika',
      rating: 4,
      image: 'https://dashboard.codeparrot.ai/api/image/Z8cIkhQ2u-KHiHWE/ellipse.png',
      text: '"Rocky has never looked better! The Celebrity Spa made him look like a star. From the professional haircut to the anti-hairfall shampoo, every detail was perfect. Lalassa\'s service is top-notch, and we couldn\'t be happier!"'
    },
    {
      id: 2,
      name: 'Anika',
      rating: 4,
      image: 'https://dashboard.codeparrot.ai/api/image/Z8cIkhQ2u-KHiHWE/ellipse-2.png',
      text: '"Rocky has never looked better! The Celebrity Spa made him look like a star. From the professional haircut to the anti-hairfall shampoo, every detail was perfect. Lalassa\'s service is top-notch, and we couldn\'t be happier!"'
    }
  ]
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="testimonial-section">
      <div className="paw-icon">
        <img src="https://dashboard.codeparrot.ai/api/image/Z8cIkhQ2u-KHiHWE/fi-95139.png" alt="Paw icon" />
      </div>
      
      <div className="testimonial-header">
        <h1>Pawsitive Feedback from our<br />Lalassa's Families</h1>
        <p>Read the heartfelt experiences shared by our satisfied<br />pet parents</p>
      </div>

      <div className="testimonial-container">
        <div className="testimonial-card main-card">
          <div className="card-content">
            <div className="profile-section">
              <div className="profile-image">
                <img src={testimonials[currentSlide].image} alt="Profile" />
              </div>
              <div className="profile-info">
                <h3>{testimonials[currentSlide].name}</h3>
                <img src="https://dashboard.codeparrot.ai/api/image/Z8cIkhQ2u-KHiHWE/stars.png" alt="Rating" className="rating-stars" />
              </div>
            </div>
            <p className="testimonial-text">{testimonials[currentSlide].text}</p>
          </div>
        </div>

        <button className="nav-button" onClick={handleNextSlide}>
          <div className="arrow-circle">
            <img src="https://dashboard.codeparrot.ai/api/image/Z8cIkhQ2u-KHiHWE/icons-ar.png" alt="Next" />
          </div>
        </button>

        <div className="testimonial-card secondary-card">
          <div className="cards-content">
            <div className="profile-section">
              <div className="profile-image">
                <img id="ti"src={testimonials[(currentSlide + 1) % testimonials.length].image} alt="Profile" />
              </div>
              <div className="profile-info">
                <h3 id="ti">{testimonials[(currentSlide + 1) % testimonials.length].name}</h3>
                <img id="ti" src="https://dashboard.codeparrot.ai/api/image/Z8cIkhQ2u-KHiHWE/stars-2.png" alt="Rating" className="rating-stars" />
              </div>
            </div>
            <p className="testimonial-text" id="ti">{testimonials[(currentSlide + 1) % testimonials.length].text}</p>
          </div>
        </div>
      </div>

      <div className="slider-dots">
        {testimonials.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
