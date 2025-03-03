import React from 'react';
import './Pet.css';
import images from '../Assets/pet apparels.png';

const PetApparelsComponent = () => {
  return (
    <div className="pet-apparels-container">
      <div className="pet-apparels-content">
        <img 
          src= {images}
          alt="Pet Apparels" 
          className="pet-apparels-image"
        />
        <span className="pet-apparels-text">Pet Apparels</span>
      </div>
    </div>
  );
};

export default PetApparelsComponent;

