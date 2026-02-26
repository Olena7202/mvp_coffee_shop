import { useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import RandomCoffee from "../../components/RandomCoffee/RandomCoffee";
import WhyUs from "../../components/WhyUs/WhyUs"; // імпорт нового блоку
import { products } from "../../data/product";
import "./Home.css";

export default function Home() {
  const topProducts = products;

  const [randomCoffee, setRandomCoffee] = useState(() => {
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
  });

  const handleRandomCoffee = () => {
    const randomIndex = Math.floor(Math.random() * products.length);
    setRandomCoffee(products[randomIndex]);
  };

  return (
    <>
      <section className="home">
        <div className="hero-content">
          <h1>Смак, який пробуджує ранок</h1>
          <div className="buttons">
            <button className="hero-btn">Переглянути каталог</button>
            <button className="hero-btn" onClick={handleRandomCoffee}>
  Кава дня
            </button>
          </div>
        </div>
      </section>

      <section className="top-offers">
        <h2>Наші топові пропозиції</h2>
        <ProductList products={topProducts} />
      </section>

      <section className="coffee-day-section">
        <RandomCoffee coffee={randomCoffee} />
      </section>

      {/* Новий блок */}
      <WhyUs />
    </>
  );
}
