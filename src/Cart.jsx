import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import InterestForm from './InterestForm';
import './App.css';
import './Cart.css';

export default function Cart() {
    const { likedProducts } = useContext(CartContext);
    const [showFormFor, setShowFormFor] = useState(null);

    // Open the InterestForm for a specific product
    const handleOpenForm = (product) => {
        setShowFormFor(product);
    };

    // Close the InterestForm
    const handleCloseForm = () => {
        setShowFormFor(null);
    };

    let cartContent;

    if (likedProducts.length === 0) {
        cartContent = (
            <div className="text-center my-5">
                <h4 className="text-muted">No liked products yet.</h4>
            </div>
        );
    } else {
        cartContent = (
            <div className="row g-4">
                {likedProducts.map((item) => (
                    <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
                        <div className="product-card p-3 shadow-sm rounded text-center bg-white">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="product-image" 
                            />
                            <h5 className="product-title mb-1">{item.name}</h5>
                            <p className="product-seller mb-1 text-muted">☆ {item.seller}</p>
                            <p className="product-price mb-1">${item.price}</p>
                            <button
                                className="btn btn-cardinal btn-sm mt-3"
                                onClick={() => handleOpenForm(item)}
                            >
                                Contact Poster
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="container-fluid p-0">
            <div className="page-banner d-flex align-items-center justify-content-center text-white text-center mb-5">
                <h1>Liked Products</h1>
            </div>

            <div className="container">
                {cartContent}
            </div>

            {showFormFor && (
                <InterestForm product={showFormFor} onClose={handleCloseForm} />
            )}
        </div>
    );
}
