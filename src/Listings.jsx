import React, { useState } from 'react';
import Categories from './Categories';
import RecommendedProducts from './RecommendedProducts';
import Navigation from './Navigation';
import Footer from './Footer';
import { CartProvider } from './CartContext';

export default function Listings({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <CartProvider>
      <div className="container mt-4">
        <div className="listings-banner">
          <h2>Browse All Listings</h2>
          <div className="listings-categories">
            <Categories onSelectCategory={setSelectedCategory} />
          </div>
        </div>

        <RecommendedProducts selectedCategory={selectedCategory} showTitle={false} />
      </div>
    </CartProvider>
  );
}