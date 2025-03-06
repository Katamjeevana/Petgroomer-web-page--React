import React from 'react';
import image4 from '../Assets/image 37.png';
import ExploreElementsCard from './ExploreElementsCard';




const ExploreElements = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100vh',
      gap: '20px',
      padding: '20px',
      backgroundColor: 'white',
    }}>
      <div style={{
        position:'relative',
        display: 'flex',
        flexDirection: 'row',
        gap:'10px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <ExploreElementsCard image={image4} />
        <ExploreElementsCard image={image4} />
        <ExploreElementsCard image={image4} />
        <ExploreElementsCard image={image4} />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <ExploreElementsCard image={image4} />
        <ExploreElementsCard image={image4} />
        <ExploreElementsCard image={image4} />
        <ExploreElementsCard image={image4} />
      </div>
    </div>
  );
};

export default  ExploreElements; 
  

