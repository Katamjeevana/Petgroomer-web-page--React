import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './ViewAllButton.css';

const ViewAllButton = ({ style }) => {
  return (
      <button 
        className="view-all-button"
        style={style}
      >
        View all Products
      </button>
  
  );
};

ViewAllButton.defaultProps = {
  style: {}
};

export default ViewAllButton;


