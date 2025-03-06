import React from 'react';
import './Sidebar.css';
import image1 from '../Assets/Rectangle 41.png';
import image2 from '../Assets/Ellipse 39.png';
import { SlCalender } from "react-icons/sl";
import { BsClock } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Sidebar = ({
  title = "Keeping Your Yorkie Sparkling: A Guide to Fur and Skin Care",
  description = "Yorkshire Terriers, with their silky, floor-length coats and feisty personalities, are true charmers.",
  author = "Vinay Pabba",
  date = "24 Sep 2024",
  readTime = "10 mins read",
  category = "Grooming Tips",
  image = image1,
  authorImage = image2,
}) => {
   const navigate = useNavigate();
  return (
    <div className="sidebar" onClick={() => navigate("/blog")}>
      <div className="image-container">
        <img src={image} alt="Article" className="main-image" />
        <div className="category-tag">{category}</div>
      </div>
      
      <div className="content-container">
        <div className="author-section">
          <img src={authorImage} alt="Author" className="author-image" />
          <span className="author-name">{author}</span>
        </div>

        <div className="article-content">
          <h1 className="article-title" id="t">{title}</h1>
          <p className="article-description">{description}</p>
          
          <div className="article-meta">
            <div className="meta-item">
              <div className="meta-icon"><SlCalender /></div>
              <span>{date}</span>
            </div>
            <div className="meta-item">
              <div className="meta-icon"><BsClock /></div>
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

