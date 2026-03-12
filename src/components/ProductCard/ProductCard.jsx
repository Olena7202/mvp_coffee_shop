import "./ProductCard.css";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">

      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price} грн</p>
      <button onClick={() => addToCart(product)}>
        Додати в кошик
      </button>

    </div>
  );
}