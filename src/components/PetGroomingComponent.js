import React from 'react';
import './Pet.css';
import images from '../Assets/pet grooming.png';

const PetGroomingComponent = ({ imageSrc = images, label = 'Pet Grooming' }) => {
  return (
    <div className="pet-grooming-container">
      <div className="pet-grooming-content">
        <img 
          src={imageSrc} 
          alt={label} 
          className="pet-grooming-image"
        />
        <span className="pet-grooming-text">{label}</span>
      </div>
    </div>
  );
};

export default PetGroomingComponent;

