import React from 'react';
import logo from '../Assets/logo (1).png';

import HerroBanner from '../Assets/Herro-Banner.png';  
import './HeroBanner.css'
import HowWeWork from './Work';

const Banner = () => {
    return (
        <>
        
    <section id="header">
            <img src={logo} className="logo" alt="Logo" />
            <p id="des">Pet Care Your Pet Deserve </p>

            <div className="nav">
                <ul id="navbar" >
          
                    <li><a className="active" href="index.html">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="about.html">FAQs</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li id="bag" ><i className="fa-solid fa-bag-shopping"></i></li>
                </ul>
                <button className='button'>Login/Signup</button>
            </div>
            <div className="container">
      {/* Hero Image Section - Full Viewport Width */}
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Care, Comfort, And Joy</h1>
          <h2 className="hero-subtitle">Shop Lalassa's Collection Of Premium Pet Products</h2>
        </div>
        <div className="hero-image">
          <p className="hero-description">
            At Lalassa, we handpick the finest products to ensure your pet
            gets the care they deserve. Explore our range of food, toys, and
            grooming essentials today!
          </p>
          </div>
          <div className="buttons">
            <a href="#shop" ><button className="primaryi">Shop Now</button></a>
            <a href="#explore"><button className="secondary">Explore New Arrivals</button></a>
          </div>
        </div>
      </div>
    
            
        </section>
        </>
    );
}
export default Banner;