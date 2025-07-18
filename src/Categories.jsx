import { useState } from 'react';

export default function Categories({ onSelectCategory }) {
    const categoryList = [
        'Fashion',
        'Beauty',
        'Lifestyle',
        'Stationary',
        'Furniture',
        'Sports',
        'Events',
        'Others'
    ];

    return (
        <div id="category" className="container mt-4">
          <div className="d-flex flex-wrap gap-3 mt-3">
            {categoryList.map((category, index) => (
              <button
                key={index}
                className="btn btn-outline-dark category-btn"
                onClick={() => onSelectCategory(category.toLowerCase())}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
    );
}
