import React from 'react';
import './Pet.css';
import images from '../Assets/pet food.jpg'

const PetFoodComponent = ({ image = images, title = 'Pet Food' }) => {
  return (
    <div className="pets-foods-containers" id='pf'>
      <div className="pet-food-content">
        <div className="pet-food-image">
          <img src={image} alt={title} />
        </div>
        <div className="pet-food-title">{title}</div>
      </div>
    </div>
  );
};

export default PetFoodComponent;

