// WhyChooseUsSection.js
import React from 'react';
import './WhyChooseUsSectionLayout.css';

const WhyChooseUsSection = ({ title, description, imageUrl }) => {
  return (
    <div className="section-card">
      <div className="images-containers">
        <img src={imageUrl} alt={title} />
      </div>
      <h3 className="section-title">{title}</h3>
      <p className="section-description">{description}</p>
    </div>
  );
};

export default WhyChooseUsSection;
