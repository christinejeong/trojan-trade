import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';

export default function Product({ product }) {
  const { addToCart, toggleLike, likedProducts } = useContext(CartContext);

  // Check if the product is liked by searching in the likedProducts array
  const isLiked = likedProducts.some(item => item.id === product.id);

  // Dynamically set the class based on the like status
  let likeButtonClass = 'btn position-absolute top-0 start-0 m-2';
  if (isLiked) {
    likeButtonClass += ' btn-danger';  // If liked, apply 'btn-danger' class
  } else {
    likeButtonClass += ' btn-outline-danger';  // If not liked, apply 'btn-outline-danger' class
  }

  return (
    <div className="col-md-3">
      <div className="product-card position-relative">
        
        {/* Like button */}
        <button
          className={likeButtonClass}  // Dynamically set class for like button
          onClick={() => toggleLike(product)}  // Toggle like when clicked
        >
          ♥
        </button>

        {/* Product Image */}
        <img src={product.image} alt={product.name} className="product-image" />

        {/* Product Title */}
        <h3 className="product-title">{product.name}</h3>

        {/* Product Seller */}
        <p className="card-text mb-1">☆ {product.seller}</p>

        {/* Product Price */}
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
}
