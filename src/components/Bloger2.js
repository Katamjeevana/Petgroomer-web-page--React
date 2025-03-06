import React from 'react';
import './Blog.css';
import image1 from '../Assets/adopting.jpg';
import image2 from '../Assets/Ellipse 39.png';
import { SlCalender } from "react-icons/sl";
import { BsClock } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const Bloger2 = ({
  title = "Keeping Your Yorkie Sparkling: A Guide to Fur and Skin Care",
  description = "Yorkshire Terriers, with their silky, floor-length coats and feisty personalities, are true charmers.",
  author = "Vinay ",
  date = "24 Sep 2024",
  readTime = "10 mins read",
  category = "Adoption",
  image = image1,
  authorImage = image2,
})  => {
   const navigate = useNavigate();
  return (
   <div className="sidebars1" onClick={() => navigate("/adoption")}>
         <div className="image-container">
           <img src={image} alt="Article" className="main2-image" />
           <div className="category-tag">{category}</div>
         </div>
         
         <div className="content-container">
           <div className="author-section">
             <img src={authorImage} alt="Author" className="author2-image" />
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
  )
}

export default Bloger2