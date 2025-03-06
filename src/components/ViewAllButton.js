import React from "react";
import "./ViewAllButton.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ViewAllButton = ({ style }) => {
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  return (
    <button
      className="views-all-button"
      style={style}
      onClick={() => navigate("/products")} // Use navigate instead of history.push
    >
      View all Products
    </button>
  );
};

ViewAllButton.defaultProps = {
  style: {},
};

export default ViewAllButton;


