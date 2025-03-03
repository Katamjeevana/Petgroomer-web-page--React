import React from 'react';
import './Pet.css';
import images from '../Assets/pet beds.png'

const PetBedsComponent = ({ imageSrc = images, label = 'Pet Beds' }) => {
  return (
    <div className="pet-beds-container">
      <div className="pet-beds-content">
        <img 
          src={imageSrc} 
          alt={label} 
          className="pet-beds-image"
        />
        <span className="pet-beds-text">{label}</span>
      </div>
    </div>
  );
};

export default PetBedsComponent;

