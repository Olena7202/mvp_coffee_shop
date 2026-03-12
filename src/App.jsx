import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import CartPage from "./pages/CartPage/CartPage";
import "./styles/App.css";

export default function App() {
  // Глобальний state кошика
  const [cart, setCart] = useState([]);

  // Функція додавання товару в кошик
  const addToCart = (product) => {
    // перевірка чи товар вже є в кошику
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <BrowserRouter>
      <Header cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cart} setCartItems={setCart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}