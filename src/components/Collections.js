import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../Assets/logo (1).png';
import './Collection.css';
import pethapppy from '../Assets/pethappy.png'

const Collections = () => {
  const navigate = useNavigate();
  return (
    <><img onClick={() => navigate("/")} src={logo} className="logo" alt="Logo" />
    <p id="pet1">Pet Care Your Pet Deserve</p>
    <div id='ad'>
    <div id='ele'>
    <h1  id='hh' className='h' onClick={() => navigate("/")}>Home</h1>
    <h1  id='hh' className='s'>Shop</h1>
    <h1  id='hh' className='c' onClick={() => navigate("/blog")}>Blog</h1>
    <h1  id='hh' className='f'  onClick={() => navigate("/faq")}>FAQs</h1>
    <h1 id='hh' className='active' onClick={() => navigate("/aboutus")}>About us</h1>
    </div>
    <div id="sss"> Explore pet E-commerce</div>
    <p id='h'>Home &gt; <span>All  </span></p>
    <img  id="pethappy"src={pethapppy} alt='happy'></img>
    <div id='filterbys'>Filter by price</div>
    <div id="linee"></div>
    <p id="pricess">PRICE:₹0.00 - ₹19,992.00</p>
    <div id="ll"></div>
    <select id = "optionss">
    <option>Select a category</option>
    <option>Pet Food</option>
    <option>Pet Accessories</option>
    <option>Pet Supplies</option>
    <option>Pet Treats</option>
    <option>Nutritional Suppliments </option>
    <option>Pet Grooming</option>
    <option>Pet Beds</option>
    <option>Pet Apparels</option>
    <option>Pet combo</option>
    <option>Outdoor Accessories</option>
    </select>

    </div>
    </>
  )
}

export default Collections