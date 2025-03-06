import React from 'react';
import './ServiceProviders.css';
import image1 from '../Assets/image 22.png'
import image2 from '../Assets/image 18.png'
import image3 from '../Assets/image 19.png'
import image4 from '../Assets/image 20.png'
import image5 from '../Assets/rd-557-3x.png.png'
import image6 from '../Assets/rd-561-3x.png.png'
import bone from '../Assets/bone-1.png.png'


const ServiceProviders = () => {
  return (
    <div className="service-providers">
      <div className="bone-image">
        <img src={bone} alt="Bone" width="127" height="133" />
      </div>
      
      <h1 className="headings">Meet Our Service Providers</h1>
      
      <p className="description">
        At Lalassa, our success starts with our dedicated and passionate service providers. 
        As a startup, we've handpicked a team of experienced and certified groomers who share 
        our commitment to excellence and love for animals. Each member of our team brings a 
        unique set of skills and a deep understanding of pet care, ensuring your furry friend 
        receives the best possible treatment.
      </p>

      <button className="know-more-btn">Know More</button>

      <div className="features-container">
        <div className="feature-card green">
          <div className="icon-container">
            <img src={image1} alt="Certified" width="100" height="100" />
          </div>
          <h3>Certified<br />Professionals</h3>
          <img className="corner-icon" src={image5} alt="Icon" />
        </div>

        <div className="feature-card blue" id='attention'>
          <div className="icon-container">
            <img  src={image3} alt="Detail" width="100" height="100" />
          </div>
          <h3>Attention to<br />Detail</h3>
        </div>

        <div className="feature-card pink" id='passion'>
          <div className="icon-container">
            <img  src={image2} alt="Passion" width="100" height="100" />
          </div>
          <h3>Passion for Pets</h3>
        </div>

        <div className="feature-card purple" id='ongoing'>
          <div className="icon-container">
            <img src={image4} alt="Training" width="100" height="100" />
          </div>
          <h3>Ongoing Training</h3>
          <img className="corner-icon" src={image6} alt="Icon" />
        </div>
      </div>
    </div>
  );
};

export default ServiceProviders;

