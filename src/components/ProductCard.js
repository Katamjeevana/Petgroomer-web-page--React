import React from 'react';
import './ProductCard.css';
import {  FaEye, FaStar } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa";
import image4 from '../Assets/image 37.png';
import {  FaShoppingCart } from "react-icons/fa";



const ProductCard = ({ 
  imageUrl = image4,
  heartIcon = <FaRegHeart />,
  viewIcon = <FaEye />,
  ratingIcon = <FaStar />,
  title = "Himalaya Adult meet & Rice 3kg",
  price = "120",
  originalPrice = "160",
  discount = "40",
  ratings = "88"
}) => {
  return (
    <div className="productcards"   >
      <div className="product-image-container">
        <img src={imageUrl} alt="Product" className="product-image"/>
        
        <div className="discount-badge">
          -{discount}%
        </div>
        
        <div className="actions-buttons">
          <button className="icon-button">
           <h1 className="icon"> {heartIcon}</h1>
          </button>
          <button className="icon-button">
          <h1 className="icon"> {viewIcon} </h1>
          </button>
        </div>
        <button className="add-to-cart-btn">
          <FaShoppingCart /> 
        </button>
      </div>

      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        
        <div className="price-container">
          <span className="current-price">₹{price}</span>
          <span className="original-price">₹{originalPrice}</span>
        </div>
        <div className="rating-container">
          {ratingIcon} {ratingIcon} {ratingIcon} {ratingIcon} {ratingIcon}
          <span className="rating-count">({ratings})</span>
        </div>
        
        
      </div>
    </div>
  );
};

export default ProductCard;

