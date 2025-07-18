import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import InterestForm from './InterestForm';
import './App.css';

export default function LikedProducts() {
  const { likedItems } = useContext(CartContext);
  const [showFormFor, setShowFormFor] = useState(null);

  const handleOpenForm = (product) => {
    setShowFormFor(product);
  };

  const handleCloseForm = () => {
    setShowFormFor(null);
  };

  return (
    <div id="liked-products" className="container mt-5">
      <h2>Liked Products</h2>

      {likedItems.length === 0 && (
        <div className="text-muted">No liked products yet.</div>
      )}

      {likedItems.length > 0 && (
        <div className="d-flex overflow-auto py-3">
          {likedItems.map(product => (
            <div
              key={product.id}
              className="card mx-2 d-flex flex-column"
              style={{ minWidth: '200px', maxWidth: '200px' }}
            >
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title mb-2">{product.name}</h5>
                <p className="card-text mb-1">★ {product.seller}</p>
                <p className="card-text mb-2">${product.price}</p>
                <button
                  className="btn btn-cardinal btn-sm mt-auto"
                  onClick={() => handleOpenForm(product)}
                >
                  Contact Poster
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showFormFor && (
        <InterestForm product={showFormFor} onClose={handleCloseForm} />
      )}
    </div>
  );
}
