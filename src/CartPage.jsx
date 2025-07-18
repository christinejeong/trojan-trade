import { useContext } from 'react';
import { CartContext } from './CartContext';

export default function CartPage() {
    const { cartItems, removeFromCart } = useContext(CartContext);

    const finalTotal = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    return (
        <div className="container mt-5">
            <h2>Cart</h2>

            {cartItems.length === 0 && (
                <p className="text-muted">Your cart is empty.</p>
            )}

            {cartItems.length > 0 && (
                <>
                    <div className="table-responsive">
                    <table className="table align-middle">
                    <thead>
                        <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td>
                                <div className="d-flex align-items-center">
                                    <img 
                                    src={item.image} 
                                    alt={item.name}
                                    style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '1rem' }}
                                    className="rounded"
                                    />
                                    <div>
                                    <h6 className="mb-1">{item.name}</h6>
                                    <small className="text-muted">★ {item.seller}</small>
                                    </div>
                                </div>
                                </td>
                                <td>${item.price}</td>
                                <td>{item.quantity}</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                <button 
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => removeFromCart(item)}
                                >
                                    Remove
                                </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                    </div>

                    <div className="text-end mt-4">
                        <h4>Total: <strong>${finalTotal.toFixed(2)}</strong></h4>
                    </div>
                </>
            )}
        </div>
    )
}