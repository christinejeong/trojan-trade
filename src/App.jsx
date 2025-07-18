import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Navigation.jsx';
import Header from './Header.jsx';
import Categories from './Categories.jsx';
import RecommendedProducts from './RecommendedProducts.jsx';
import Footer from './Footer.jsx';
import Cart from './Cart.jsx';
import { CartProvider } from './CartContext.jsx';
import { useState } from 'react';
import LikedProducts from './LikedProducts.jsx';
import ProfilePage from './ProfilePage';
import Listings from './Listings';
import UpdatePage from './UpdatePage';

function App() {
  const [page, setPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleNavigate = (newPage) => {
    setPage(newPage);
    if (newPage === 'home') {
      setSelectedCategory(null);
    }
  };

  return (
    <CartProvider>
      <Navigation onNavigate={handleNavigate} />

      {page === 'home' && (
        <>
          <Header />
          <UpdatePage />
          <RecommendedProducts selectedCategory={selectedCategory} />
        </>
      )}

      {page === 'listings' && <Listings />}

      {page === 'cart' && <Cart />}

      {/* {page === 'liked' && (
        <div className="container mt-5">
          <h2>Liked Products</h2>
        </div>
      )} */}
      
      {page === 'profile' && <ProfilePage />}

      <Footer />
    </CartProvider>
  );
}

export default App;
