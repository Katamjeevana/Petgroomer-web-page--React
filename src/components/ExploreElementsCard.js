import React from 'react'
import  { useState } from 'react';
import {  FaEye, FaStar } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa";
import image4 from '../Assets/image 37.png';
import {  FaShoppingCart } from "react-icons/fa";
import './Explore.css';




const ExploreElementsCard = ({
  image = {image4},
  title = 'Himalaya Adult meet & Rice 3kg',
  originalPrice = '₹160',
  discountedPrice = '₹120',
  discount = '-40%',
  ratings = '(88)',
  heartIcon = <FaRegHeart />,
    viewIcon = <FaEye />,
    ratingIcon = <FaStar />,
}) => {
  const [isHeartActive, setIsHeartActive] = useState(false);
  const [isQuickViewActive, setIsQuickViewActive] = useState(false);

  return (
    <div className="products-cards">
      <div className="products-image-containers" id='card'>
        <img src={image} alt={title} className="products-image" />
        
        <div className="discount-badge">
          {discount}
        </div>
        
        <div className="action-buttons">
          <button 
            className={`action-button ${isHeartActive ? 'active' : ''}`}
            onClick={() => setIsHeartActive(!isHeartActive)}
          >
           <h1 className="icon"> {heartIcon}</h1>
          </button>
          
          <button 
            className={`action-button ${isQuickViewActive ? 'active' : ''}`}
            onClick={() => setIsQuickViewActive(!isQuickViewActive)}
          >
            <h1 className="icon"> {viewIcon} </h1>
          </button>
          <button className="cart-btn">
          <FaShoppingCart /> 
        </button>
        </div>
      </div>

      <div className="products-details">
        <h3 className="products-title">{title}</h3>
        
        <div className="products-pricing">
          <span className="discounted-price">{discountedPrice}</span>
          <span className="original-price">{originalPrice}</span>
        </div>
        
        <div className="product-rating">
        
          {ratingIcon} {ratingIcon} {ratingIcon} {ratingIcon} {ratingIcon}
          <span className="rating-count">({ratings})</span>
        </div>
      </div>
    </div>
  );
};

export default ExploreElementsCard;

