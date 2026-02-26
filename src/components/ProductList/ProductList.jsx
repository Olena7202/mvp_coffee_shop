import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
export default function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
