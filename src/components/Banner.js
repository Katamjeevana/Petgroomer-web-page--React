import React from 'react';
import logo from '../Assets/logo (1).png';
import { useState, useRef, useEffect } from 'react';
import './HeroBanner.css';
import { useNavigate } from "react-router-dom";  


const Banner = () => {
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);
  const popupRef = useRef(null);
  const [showLoginForm, setShowLoginForm] = useState(true);
  
  const handleShowRegister = (e) => {
    e.preventDefault();
    setShowLoginForm(false);
  };
  const handleShowLogin = (e) => {
    e.preventDefault();
    setShowLoginForm(true);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpenPopup(false);
      }
    };

    if (openPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openPopup]);
    return (
        <>
        
    <section id="header">
            <img src={logo} className="logo" alt="Logo" />
            <p id="des">Pet Care Your Pet Deserve </p>

            <div className="nav">
                <ul id="navbar" >
                
                
          
                  <h1 className="active" onClick={() => navigate("/")}>  <li><a>Home</a></li></h1>
                  <h1>  <li><a href="shop.html">Shop</a></li></h1>
                  <h1 onClick={() => navigate("/blog")}><li ><a >Blog</a></li></h1>
                    <h1><li><a href="about.html">FAQs</a></li></h1>
                   <h1> <li><a href="contact.html">Contact</a></li></h1>
                  <h1>  <li id="bag" ><i className="fa-solid fa-bag-shopping"></i></li></h1>
                </ul>
                <button className='button'  onClick={()=> setOpenPopup(true)}>Login/Signup</button>
                { openPopup && 
                <div id='lpage' className="spage" ref={popupRef} style={{position:'relative', left:'500px'}}> <h1 id='wel'>Hi! Welcome To Lalassa <br/>Happy to see You here🐶🐾</h1>
                     <div  id="cl"style={{cursor:'pointer'}} onClick={(e)=>{ e.stopPropagation();
                               setOpenPopup(false);}}> x</div>
                            
                    <div className="modal-content">
                    <form
              id="loginForm"
              className={`form ${showLoginForm ? '' : 'hidden'}`}
              onSubmit={(e) => {
                e.preventDefault();
                alert('Login submitted');
              }}
            >
              <h1 id='log'>Login</h1>
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              <button id="logins" type="submit">Login</button>
              <p id="do">
                Don't have an account?{' '}
                <a href="#" id="showRegister" onClick={handleShowRegister}>
                  Register
                </a>
              </p>
            </form>
            {/* Registration Form */}
            <form
              id="registerForm"
              className={`form ${showLoginForm ? 'hidden' : ''}`}
              onSubmit={(e) => {
                e.preventDefault();
                alert('Registration submitted');
              }}
            >
              <h1 id='log'>Register</h1>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button id="logins" type="submit">Register</button>
              <p id="do">
                Already have an account?{' '}
                <a href="#" id="showRegister" onClick={handleShowLogin}>
                  Login
                </a>
              </p>
            </form>
                    </div>
                </div>}
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