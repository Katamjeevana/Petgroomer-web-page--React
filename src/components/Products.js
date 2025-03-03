// export default PopularProductsLayout import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import NavigationArrows from './NavigationArrows';
import ProductPage from './ProductPage';
import ViewAllButton from './ViewAllButton';
import { FaEye, FaStar } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa";
import image4 from '../Assets/image 37.png';
import { useState } from 'react';
import  PetLayout from './PetLayout';
import './Pet.css';

const PopularProductsLayout = () => {
  const products = [
    // Add all your products here
    {
      id:1,
      imageUrl: image4,
      heartIcon: <FaRegHeart />,
      viewIcon: <FaEye />,
      ratingIcon: <FaStar />,
      title: "Himalaya Adult meet & Rice 3kg",
      price: "120",
      originalPrice: "160",
      discount: "40",
      ratings: "88"
    },
    {
      id:2,
      imageUrl: image4,
      heartIcon: <FaRegHeart />,
      viewIcon: <FaEye />,
      ratingIcon: <FaStar />,
      title: "Himalaya Adult meet & Rice 3kg",
      price: "150",
      originalPrice: "200",
      discount: "50",
      ratings: "95"
    },
    {
      id:3,
      imageUrl: image4,
      heartIcon: <FaRegHeart />,
      viewIcon: <FaEye />,
      ratingIcon: <FaStar />,
      title: "Himalaya Adult meet & Rice 3kg",
      price: "180",
      originalPrice: "220",
      discount: "40",
      ratings: "100"
    },
    { 
      id:4,
      imageUrl: image4,
      heartIcon: <FaRegHeart />,
      viewIcon: <FaEye />,
      ratingIcon: <FaStar />,
      title: "Himalaya Adult meet & Rice 3kg",
      price: "150",
      originalPrice: "200",
      discount: "50",
      ratings: "95"
    },
    {
      id:5,
      imageUrl: image4,
      heartIcon: <FaRegHeart />,
      viewIcon: <FaEye />,
      ratingIcon: <FaStar />,
      title: "Himalaya Adult meet & Rice 3kg",
      price: "150",
      originalPrice: "200",
      discount: "50",
      ratings: "95"
    },
    {  
      id:6,
      imageUrl: image4,
      heartIcon: <FaRegHeart />,
      viewIcon: <FaEye />,
      ratingIcon: <FaStar />,
      title: "Himalaya Adult meet & Rice 3kg",
      price: "150",
      originalPrice: "200",
      discount: "50",
      ratings: "95"
    },
    {
      id:7,
      imageUrl: image4,
      heartIcon: <FaRegHeart />,
      viewIcon: <FaEye />,
      ratingIcon: <FaStar />,
      title: "Himalaya Adult meet & Rice 3kg",
      price: "150",
      originalPrice: "200",
      discount: "50",
      ratings: "95"
    },
    {
      id:8,
      imageUrl: image4,
      heartIcon: <FaRegHeart />,
      viewIcon: <FaEye />,
      ratingIcon: <FaStar />,
      title: "Himalaya Adult meet & Rice 3kg",
      price: "150",
      originalPrice: "200",
      discount: "50",
      ratings: "95"
    },
   
    
    
    

    // Add more products as needed...
  ];

  const productsPerPage = 4; // Number of products to display per page
  const totalPages = Math.ceil(products.length / productsPerPage); // Calculate total pages

  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : totalPages - 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages - 1 ? prevPage + 1 : 0));
    console.log("Current Page:", currentPage);
console.log("Total Pages:", totalPages);
console.log("Products for Page:", getProductsForPage(currentPage));
console.log("TranslateX Value:", `translateX(-${currentPage * 100}%)`);
  };

  // Split products into pages
  const getProductsForPage = (pageIndex) => {
    const startIndex = pageIndex * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return products.slice(startIndex, endIndex);
   
  };
  
  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      backgroundColor: '#fff',
      padding: '40px 20px'
    }}>
      {/* Section Header */}
      <div style={{ 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '40px'
      }}>
        <SectionHeader />
        <NavigationArrows onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
      </div>

      {/* Product Pages */}
      <div style={{ 
        width: '100%',
        maxWidth: '1440px',
        overflow: 'hidden',
        position: 'relative',
        marginBottom: '40px'
      }}>
        <div style={{ 
          display: 'flex',
          transform: `translateX(-${currentPage * 55}%)`,
          transition: 'transform 1s ease-in-out',
          width: `${totalPages * 110}%`
        }}>
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div 
              key={pageIndex} 
              style={{ 
                width: `${100/ totalPages}%`,
                flexShrink: 0,
                display: 'flex',
                gap: '20px',
                padding: '0 12px',
                height: '900px'
              }}
            >
              {getProductsForPage(pageIndex).map((product) => (
                 <div key={product.id} style={{ width: `${100/ productsPerPage - 2}%`,flexShrink: 0 }}>
                <ProductPage key={product.id} product={product} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <ViewAllButton />

      <div style={{
        position: 'relative',
    top: '-340px',
    fontSize: '20px',
    fontWeight: '700px',
    color: '#FD9340',
    left:'-370px',
    fontFamily: 'Nunito, sans-serif',
      }}>
      <h1 className='browse'>Browse By Category</h1>
      </div>   
    <PetLayout />
   </div>
  );
};

export default PopularProductsLayout;

