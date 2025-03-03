import React from 'react';

const SectionHeader = ({ style }) => {
  const defaultStyle = {
    
    position: 'relative',
    top: '100px',
    fontSize: '42px',
    fontWeight: '600',
    color: '#FD9340',
    left:'100px',
    fontFamily: 'Nunito, sans-serif',
  };

  return (
    <div style={{ ...defaultStyle, ...style }}>
      Popular Products
    </div>
  );
};

// Default props
SectionHeader.defaultProps = {
  style: {}
};

export default SectionHeader;

