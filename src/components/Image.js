import React from 'react';
import image from '../Assets/Frame 600.png';
import './Pet.css';

const Image = () => {
  <button id='butt'>Buy Now!</button>
  return (
    <>
  <img  className="image" src={image} alt='image' />
  <div className="marquee-container">
  <div>Lalassa Pet Care Your Pet Deserve</div>
      <div className="marquee-content">
       We've Got You Covered &nbsp;&nbsp;&nbsp;&nbsp; From Playtime to Pawsitive Adventures &nbsp;&nbsp;&nbsp; 🐕🐾🐾
       We've Got You Covered &nbsp;&nbsp;&nbsp;&nbsp; From Playtime to Pawsitive Adventures &nbsp;&nbsp;&nbsp; 🐕🐾🐾
       We've Got You Covered &nbsp;&nbsp;&nbsp;&nbsp; From Playtime to Pawsitive Adventures &nbsp;&nbsp;&nbsp; 🐕🐾🐾
      </div>
    </div>
 </>
  )
};
export default Image;