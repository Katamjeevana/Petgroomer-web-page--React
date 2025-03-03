import React from 'react';
import './NavigationArrows.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const NavigationArrows = ({ style, onPrevClick, onNextClick }) => {
  return (
    <div className="navigation-arrows" style={style}>
      <button 
        className="arrow-button"
        onClick={onPrevClick}
      ><span className="material-icons">arrow_back</span>
      </button>
      <button 
        className="arrow-button"
        onClick={onNextClick}
      >
        <span className="material-icons">arrow_forward</span>
      </button>
    </div>
  );
};

NavigationArrows.defaultProps = {
  style: {},
  onPrevClick: () => {},
  onNextClick: () => {}
};

export default NavigationArrows;


//  <div className="navigation-controls"> 
//           <button className="nav-button prev" onClick={handlePrevClick}>
//             <span className="material-icons">arrow_back</span>
//           </button>
//           <button className="nav-button next" onClick={handleNextClick}>
//             <span className="material-icons">arrow_forward</span>
//           </button>
//         </div>
      