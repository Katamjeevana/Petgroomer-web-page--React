import React from 'react';
import './Pet.css';
import images from '../Assets/pet treats.png'

const PetTreatsComponent = ({ imageUrl = images, title = 'Pet Treats' }) => {
  return (
    <div className="pet-treats-container">
      <div className="pet-treats-content">
        <img 
          src={imageUrl} 
          alt={title} 
          className="pet-treats-image"
        />
        <span className="pet-treats-text">{title}</span>
      </div>
    </div>
  );
};

export default PetTreatsComponent;

