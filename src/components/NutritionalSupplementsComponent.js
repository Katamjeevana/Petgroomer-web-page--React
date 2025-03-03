import React from 'react';
import './Pet.css';
import images from '../Assets/nutirional suppliments.png'

const NutritionalSupplementsComponent = ({ imageSrc = images, title = 'Nutritional Supplements' }) => {
  return (
    <div className="nutritional-supplements">
      <div className="content-container">
        <div className="image-container">
          <img 
            src={imageSrc} 
            alt={title}
            className="supplement-image"
          />
        </div>
        <div className="text-container">
          {title}
        </div>
      </div>
    </div>
  );
};

export default NutritionalSupplementsComponent;

