import React from 'react';
import image from '../Assets/Card600.png'
import './Explore.css';

const Discount = () => {
  return (
    <div className='dis'>
    <button id='but'>Buy Now!</button>
     <img  className="discount" src={image} alt='image' />
    </div>
    
  
  )
}

export default Discount