import React from 'react';
import './PamperSpa.css';
import img1 from '../Assets/WhatsApp Image 2024-08-20 at 02.44.49_f02818ec.png';
import img2 from '../Assets/image (1).png';
import img3 from '../Assets/image (2).png';
import img4 from '../Assets/image.png';
import vector from '../Assets/Vector.png';

const PamperSpa = () => {
  return (
    <>
    <div className='head'>
    Service Highlights

    </div>
    <div className="pamper-spa-container">
      <div className="content-frame">
        <div className="text-content">
          <div className="text-group">
            <h1 className="title">Anti-Ticks Spa</h1>
            <p className="des">
              Ensure your pet is protected from ticks and fleas with our Anti-Ticks Spa,offering specialized treatments to keep pests at bay
            </p>
          </div>
          
          <div className="download-section">
            <div className="download-group">
              <span className="download-text">Download Lalassa</span>
              <img src={vector} alt="arrow" className="arrow-icon" />
            </div>
            <div className="underlines"></div>
          </div>
        </div>

        <div className="images-container">
          <img src={img1} alt="spa-1" className="spa-image spa-1" />
          <img src={img2} alt="spa-2" className="spa-image spa-2" />
          <img src={img3} alt="spa-3" className="spa-image spa-3" />
          <img src={img4} alt="spa-4" className="spa-image spa-4" />
        </div>
      </div>

      <div className="navigation-buttons">
        <button className="nav-button prev">
        <span className="material-icons">arrow_back</span>
        </button>
        <button className="nav-button next">
        <span className="material-icons">arrow_forward</span>
        </button>
      </div>
    </div>
    </>
  );
};

export default PamperSpa;

