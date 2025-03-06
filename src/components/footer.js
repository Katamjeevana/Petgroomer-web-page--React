import React from 'react';
import './footer.css';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import logo from '../Assets/logo (1).png';
import qrcode from '../Assets/Qrcode.png';
import gplay from '../Assets/googleplay.png';
import apple from '../Assets/apple3.png'


const Footer = () => {
  return (
    <>
    <div id='footer'>
      <h1>STAY UPTO DATE ABOUT <br></br>OUR LATEST OFFERS</h1>
      <input type='text' placeholder='Enter your email address'></input>
      <button id='b'>Subscribe to NewsLetter </button>
    </div>
    <div className="footer-layout">
      <div className="footer-header">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p className="footer-subtitle">Pet Care Your Pet Deserve</p>
      </div>
      <p className="footer-community">Join our community of 1000+ pet lovers and 50000+ pet parents all over Telangana!!</p>
      <div className="footer-content">
        <FooterLinks />
        <FooterContact />
      </div>
      <div className="footer-apps">
        <p className="footer-apps-text">Get flat 30% with App New User Only</p>
        <div className="footer-apps-images">
          <img src={qrcode} alt="QR Code" className="footer-qr-code" />
          <img src={gplay} alt="Google Play" className="footer-google-play" />
          <img src={apple} alt="App Store" className="footer-app-store" />
        </div>
      </div>
      <div className="footer-divider"></div>
      <p className="footer-copyright">© 2024 - LALASSA PRIVATE LIMITED - All Rights Are Reserved</p>
    </div>
    </>
  )
}

export default Footer