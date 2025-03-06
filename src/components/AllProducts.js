import React from 'react';
import ExploreElements from './ExploreElements';
import './AllProducts.css';
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const navigate = useNavigate();
  return (
    <>
    <div id='alp'>AllProducts
    <div id='ele'>
    <h1  id='hh' className='h' onClick={() => navigate("/")}>Home</h1>
    <h1  id='hh' className='s'>Shop</h1>
    <h1  id='hh' className='b'onClick={() => navigate("/blog")}>Blog</h1>
    <h1  id='hh' className='f'>FAQs</h1>
    <h1 id='hh' className='c'>Contact</h1>
    </div>
    </div>
   <div id="ex"> <ExploreElements/></div>
   <div id="ex2"> <ExploreElements/></div>
    </>
  )
}

export default AllProducts