import "./CartPage.css";
import { useState } from "react";
import { products } from "../../data/product";

export default function CartPage() {
  // для прикладу — кошик з одним продуктом
  const [cartItems, setCartItems] = useState([
    { ...products[0], quantity: 1 }
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleIncrease = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrease = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="cart">
      <h1 className="cart-title">Кошик</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Ваш кошик порожній</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>{item.price} грн</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  Видалити
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-total">
        <h2>Разом: {totalPrice} грн</h2>
        <button className="checkout-btn">Оформити замовлення</button>
      </div>
    </section>
  );
}
