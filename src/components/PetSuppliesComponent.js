import React from 'react';
import './Pet.css';
import images from '../Assets/pet supplies.png'

const PetSuppliesComponent = () => {
  return (
    <div className="pet-supplies-container">
      <div className="pet-supplies-content">
        <img 
          src={images}
          alt="Pet Supplies" 
          className="pet-supplies-image"
        />
        <span className="pet-supplies-text">Pet Supplies</span>
      </div>
    </div>
  );
};

export default PetSuppliesComponent;

