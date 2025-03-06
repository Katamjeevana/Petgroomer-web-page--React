import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './Layout.css';
import vector from '../Assets/Vector.png';
import { useNavigate } from "react-router-dom";


const Latest = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className ="latest">Latest Articles</div>
    <div className="layout">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="main-content-container">
        <MainContent />
      </div>
    </div>
    <div id='d'>
    <button id="read"onClick={() => navigate("/blog")}>Read More</button>
    <img src={vector} alt="arrow" className="read" />
    <div className="under"></div>
    </div>
    </>
  );
};

export default Latest;

