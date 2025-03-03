import React from 'react';
import './Pet.css';
import images from '../Assets/pet combo.png'

const PetComboComponent = ({ imageSrc = images, title = "Pet Combo" }) => {
  return (
    <div className="pet-combo-container">
      <div className="pet-combo-content">
        <img 
          src={imageSrc} 
          alt={title} 
          className="pet-combo-image"
        />
        <span className="pet-combo-text">{title}</span>
      </div>
    </div>
  );
};

export default PetComboComponent;
