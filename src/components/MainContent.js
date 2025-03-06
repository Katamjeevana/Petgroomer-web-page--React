import React from 'react';
import './MainContent.css';
import { SlCalender } from "react-icons/sl";
import { BsClock } from "react-icons/bs";

const MainContent = () => {
  return (
    <div className="main-content">
      {[1, 2, 3].map((item, index) => (
        <div key={index} className="article">
        <div className="article-title">
            Keeping Your Yorkie Sparkling: A Guide to <br></br>Fur and Skin Care
          </div>
          <div className="article-header">
            <div className="article-info">
              <div className="date">
                {/* <img src="https://dashboard.codeparrot.ai/api/image/Z8bQaW9e-96e2cZ3/uil-cale-4.png" alt="calendar" /> */}
                 <SlCalender />
                <span>24 Sep 2024</span>
              </div>
              <div className="read-time">
                {/* <img src="https://dashboard.codeparrot.ai/api/image/Z8bQaW9e-96e2cZ3/mingcute-4.png" alt="time" /> */}
                <BsClock />
                <span>10 mins read</span>
              </div>
            </div>
            <div className="arrow">
            <span className="material-icons">arrow_forward</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContent;

