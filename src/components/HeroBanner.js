import React from 'react';
import './HeroBanner.css';
import HeroBanner from "../Assets/Herro-Banner.png"

const HerroBanner = ({ 
  backgroundImage = 'HeroBanner',
  width = '1440px',
  height = '695px'
}) => {
  return (
    <div className="herro-banner" style={{
      width,
      height,
      backgroundImage: `url(${backgroundImage})`
    }}>
      <div className="herro-banner__content">
        <div className="herro-banner__decorative-shape"></div>
        <div className="herro-banner__image-container">
          <img 
            src={backgroundImage} 
            alt="Person with dog"
            className="herro-banner__image"
          />
        </div>
      </div>
    </div>
  );
};

export default HerroBanner;
