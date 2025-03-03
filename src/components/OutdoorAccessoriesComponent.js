import React from 'react';
import './Pet.css';
import images from '../Assets/outdoor accessories.png'

const OutdoorAccessoriesComponent = ({ imageSrc = images, title = 'Outdoor Accessories' }) => {
  return (
    <div className="outdoor-accessories-container">
      <div className="outdoor-accessories-content">
        <div className="outdoor-accessories-image">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="outdoor-accessories-text">
          {title.split(' ').map((word, index) => (
            <React.Fragment key={index}>
              {word}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutdoorAccessoriesComponent;

