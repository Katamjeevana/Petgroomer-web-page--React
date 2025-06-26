import React from 'react';
import './Blog.css';
import logo from '../Assets/logo (1).png';
import { useNavigate } from "react-router-dom";
import Bloger from './bloger';
import Bloger2  from './Bloger2';
import  { useState } from 'react';

const Blog = () => {
  const [showBloger, setShowBloger] = useState(false); 
  const [showBloger2, setShowBloger2] = useState(false); 
  const [showInitialCards, setShowInitialCards] = useState(true); 
  const [activeButton, setActiveButton] = useState('all');
  const handleAllClick = () => {
    setShowBloger(false); 
    setShowBloger2(false); 
    setShowInitialCards(true);
    setActiveButton('all'); 
  };

  const handleAdoptionClick = () => {
    setShowBloger2(true); 
    setShowBloger(false); 
    setShowInitialCards(false);
    setActiveButton('adoption');
  };

  const handleGroomingClick = () => {
    setShowBloger(true); 
    setShowBloger2(false); 
    setShowInitialCards(false);
    setActiveButton('grooming');
  };
  const navigate = useNavigate();
  return (
    <>
     <img onClick={() => navigate("/")} src={logo} className="logo" alt="Logo" />
    <div id='blog'>
    <div id='bl'>Blog</div>
    <div id='ele'>
    <h1  id='hh' className='h' onClick={() => navigate("/")}>Home</h1>
    <h1  id='hh' className='s'>Shop</h1>
    <h1  id='hh' className='active' onClick={() => navigate("/blog")}>Blog</h1>
    <h1  id='hh' className='f' onClick={() => navigate("/faq")}>FAQs</h1>
    <h1 id='hh' className='c' onClick={() => navigate("/aboutus")}>About us</h1>
    </div>
    <p id='exx'>Explore our latest articles on everything from grooming advice to nutrition and wellness,<br></br> helping you keep your furry friend happy and healthy</p>
    </div>
    <div id='adop'>
      <h1 id="all"
      className={activeButton === 'all' ? 'active-button' : ''}
       onClick={handleAllClick}>All</h1>
      <h1 id= "adoption" 
      className={activeButton === 'adoption' ? 'active-button' : ''}
       onClick={handleAdoptionClick}>Adoption</h1>
      <h1 id="grooming"
       className={activeButton === 'grooming' ? 'active-button' : ''}
       onClick={handleGroomingClick}>Grooming tips</h1>
    </div>
    {showInitialCards && (
        <>
          <Bloger />
          <Bloger2 />
        </>
      )}
    <div id="set">{showBloger2 && <Bloger2 />} </div>
   <div id=''> {showBloger && <Bloger/>}</div>
    </>

  )
}

export default Blog

// import React, { useState } from 'react';
// import './Blog.css';
// import logo from '../Assets/logo (1).png';
// import { useNavigate } from 'react-router-dom';
// import Bloger from './bloger';
// import Bloger2 from './Bloger2';

// const Blog = () => {
//   const [showBloger, setShowBloger] = useState(true); // Show Bloger by default
//   const [showBloger2, setShowBloger2] = useState(true); // Show Bloger2 by default
//   const [activeButton, setActiveButton] = useState('all'); // Set 'all' as the default active button

//   const handleAllClick = () => {
//     setShowBloger(true); // Show Bloger
//     setShowBloger2(true); // Show Bloger2
//     setActiveButton('all'); // Set 'all' as active
//   };

//   const handleAdoptionClick = () => {
//     setShowBloger2(true); // Show Bloger2
//     setShowBloger(false); // Hide Bloger
//     setActiveButton('adoption'); // Set 'adoption' as active
//   };

//   const handleGroomingClick = () => {
//     setShowBloger(true); // Show Bloger
//     setShowBloger2(false); // Hide Bloger2
//     setActiveButton('grooming'); // Set 'grooming' as active
//   };

//   const navigate = useNavigate();

//   return (
//     <>
//       <img src={logo} className="logo" alt="Logo" />
//       <div id='blog'>
//         <div id='bl'>Blog</div>
//         <div id='ele'>
//           <h1 id='hh' className='h' onClick={() => navigate("/")}>Home</h1>
//           <h1 id='hh' className='s'>Shop</h1>
//           <h1 id='hh' className='active' onClick={() => navigate("/blog")}>Blog</h1>
//           <h1 id='hh' className='f'>FAQs</h1>
//           <h1 id='hh' className='c'>Contact</h1>
//         </div>
//         <p id='exx'>
//           Explore our latest articles on everything from grooming advice to nutrition and wellness,
//           <br />
//           helping you keep your furry friend happy and healthy
//         </p>
//       </div>
//       <div id='adop'>
//         <h1 id="all"
//           className={activeButton === 'all' ? 'active-button' : ''}
//           onClick={handleAllClick}>
//           All
//         </h1>
//         <h1 id="adoption"
//           className={activeButton === 'adoption' ? 'active-button' : ''}
//           onClick={handleAdoptionClick}>
//           Adoption
//         </h1>
//         <h1 id="grooming"
//           className={activeButton === 'grooming' ? 'active-button' : ''}
//           onClick={handleGroomingClick}>
//           Grooming tips
//         </h1>
//       </div>

//       {/* Render Bloger and Bloger2 based on state */}
//      {showBloger2 && <Bloger2 />} 
//       {showBloger2 && <Bloger2 />}
//     </>
//   );
// };

// export default Blog;