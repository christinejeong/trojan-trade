import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [likedProducts, setLikedProducts] = useState([]); // Change likedItems to likedProducts
    const [cartItems, setCartItems] = useState([]);

    const toggleLike = (product) => {
        setLikedProducts((prevLikedProducts) => {
            if (prevLikedProducts.some(item => item.id === product.id)) {
                // If the product is already liked, remove it from the liked products array
                return prevLikedProducts.filter(item => item.id !== product.id);
            } else {
                // If the product is not liked, add it to the liked products array
                return [...prevLikedProducts, product];
            }
        });
    };

    return (
        <CartContext.Provider value={{ likedProducts, toggleLike }}>
            {children}
        </CartContext.Provider>
    );
}
