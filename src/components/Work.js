import React from 'react';
import './HeroBanner.css';
import image1 from '../Assets/image 34.png'
import image2 from '../Assets/image 35.png'
import image3 from '../Assets/image 36.png'
import image from  '../Assets/Group 1000005952.png'

const HowWeWork = () => {
  const steps = [
    {
      number: "01/",
      title: "BROWSE OUR STORE",
      description: "Explore our curated selection of premium pet products, from food and toys to grooming supplies.",
      image: image1,
    },
    {
      number: "02/",
      title: "ADD TO CART & CHECKOUT",
      description: "Easily add items to your cart, apply any discount codes, and complete your purchase through our secure checkout.",
      image: image2,
    },
    {
      number: "03/",
      title: "FREE & FAST DELIVERY",
      description: "Enjoy quick delivery of your order right to your doorstep, with tracking available for peace of mind.",
      image: image3,
      
    }
  ];

  return (
    <>
    <div className='content'>
       <h1 className="title">
          How we work?
        </h1>
    </div>
    <div className="how-we-work-container">
      <div className="timeline">
        <img src= {image} alt="Timeline" className="timeline-image" />
      </div>
      
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-content">
              <div className="step-header">
                <div className="step-number">{step.number}</div>
                <h2 className="step-title">{step.title}</h2>
              </div>
              <p className="step-description">{step.description}</p>
            </div>
            <div className="step-image-container">
              <img src={step.image} alt={`Step ${index + 1}`} className="step-background" />
            </div>
          </div>
        ))}
      </div>
      <div className="step-indicator">
            <div className="indicator-active">01</div>
            <div className="indicator-line"></div>
            <div className="indicator-inactive">02</div>
            <div className="indicator-inactive">03</div>
          </div>
    </div>
    </>
  );
};

export default HowWeWork;

