import React from 'react';
import './Pet.css';
import images from '../Assets/pet accessories.png'

const PetAccessoriesComponent = ({ imageUrl = images, label = "Pet Accessories" }) => {
  return (
    <div className="pet-accessories-container">
      <div className="pet-accessories-content">
        <img 
          src={imageUrl} 
          alt={label} 
          className="pet-accessories-image"
        />
        <span className="pet-accessories-text">{label}</span>
      </div>
    </div>
  );
};

export default PetAccessoriesComponent;

