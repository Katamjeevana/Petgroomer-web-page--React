import React from 'react';
import ProductCard from './ProductCard';

const ProductPage = ({ product }) => {
  return (
    <div>
      <ProductCard  {...product} />
    </div>
  );
};

export default ProductPage;