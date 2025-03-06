import React from 'react';
import './FooterContact.css';
import { FaInstagramSquare } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
const FooterContact = () => {
  const socialLinks = [
    { icon: <SiFacebook />, link: '#', className: 'facebook' },
    { icon: <FaInstagramSquare />, link: '#', className: 'instagram' },
    { icon: <FaTwitter />, link: '#', className: 'twitter' },
    { icon: <IoLogoYoutube />, link: '#', className: 'youtube' },
    { icon: <FaLinkedin />, link: '#', className: 'linkedin' }
  ];

  return (
    <div className="footer-contact">
      <div className="contact-list">
        <a href="tel:9533287337" className="contact-item">
          Info on Service - 9533287337
        </a>
        <a href="tel:9043651721" className="contact-item">
          Join as a Pet carer - 9043651721
        </a>
        <a href="mailto:lalassaworld@gmail.com" className="contact-item">
          Email id- lalassaworld@gmail.com
        </a>
      </div>

      <div className="social-links">
        {socialLinks.map((social, index) => (
          <a 
            key={index} 
            href={social.link}
            className={`social-link ${social.className}`}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <button className="connect-button">
        Connect with us
      </button>
    </div>
  );
};

export default FooterContact;

