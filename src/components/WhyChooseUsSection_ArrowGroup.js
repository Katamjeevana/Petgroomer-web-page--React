import React from 'react';
import './WhyChooseUsSection_ArrowGroup.css';
import ArrowGroup from './Content';

const WhyChooseUsSection_ArrowGroup = () => {
  return (
    <div className="why-choose-us-container">
      <div className="title-section">
        <h3 className="subtitle">Five Reasons</h3>
        <h2 className="title">Why Choose Us?</h2>
      </div>
      
      <div className="arrow-group">
        <div className="circle-container">
          <div className="arrow-circle arrow-1">
            <span>1</span>
          </div>
          <div className="arrow-circle arrow-2">
            <span>2</span>
          </div>
          <div className="arrow-circle arrow-3">
            <span>3</span>
          </div>
          <div className="arrow-circle arrow-4">
            <span>4</span>
          </div>
          <div className="arrow-circle arrow-5">
            <span>5</span>
          </div>
          <div className="circle-outline"></div>
        </div>
      </div>
      <ArrowGroup />
    </div>
  );
};

export default WhyChooseUsSection_ArrowGroup;

