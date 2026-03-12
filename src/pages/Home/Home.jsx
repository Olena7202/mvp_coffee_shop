import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import RandomCoffee from "../../components/RandomCoffee/RandomCoffee";
import WhyUs from "../../components/WhyUs/WhyUs";
import { products } from "../../data/product";
import "./Home.css";

export default function Home({ addToCart }) {
  const topProducts = products;
  const navigate = useNavigate();

  const [randomCoffee, setRandomCoffee] = useState(() => {
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
  });

  const handleRandomCoffee = () => {
    const randomIndex = Math.floor(Math.random() * products.length);
    setRandomCoffee(products[randomIndex]);
    coffeeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const goToCatalog = () => {
    navigate("/catalog");
  };

  const coffeeRef = useRef(null);

  return (
    <>
      <section className="home">
        <div className="hero-content">
          <h1>Смак, який пробуджує ранок</h1>

          <div className="buttons">
            <button className="hero-btn" onClick={goToCatalog}>
              Переглянути каталог
            </button>

            <button className="hero-btn" onClick={handleRandomCoffee}>
              Кава дня
            </button>
          </div>
        </div>
      </section>

      <section className="top-offers">
        <h2>Наші топові пропозиції</h2>
        <ProductList
          products={topProducts.slice(0, 4)}
          addToCart={addToCart} // тепер працює
        />
      </section>

      <section className="coffee-day-section" ref={coffeeRef}>
        <RandomCoffee coffee={randomCoffee} />
      </section>

      <WhyUs />
    </>
  );
}