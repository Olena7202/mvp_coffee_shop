import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
<<<<<<< HEAD
      <div className="logo">☕ Coffee Shop</div>
=======
      <div className="logo">☕ Coffee Shop</div>
>>>>>>> feature/initial-layout
      <nav className="nav">
        <Link className={isActive("/") ? "active" : ""} to="/">Головна</Link>
        <Link className={isActive("/catalog") ? "active" : ""} to="/catalog">Каталог</Link>
        <Link className={isActive("/cart") ? "active" : ""} to="/cart">Кошик</Link>
      </nav>
    </header>
  );
}
