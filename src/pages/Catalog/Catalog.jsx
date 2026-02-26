import ProductList from "../../components/ProductList/ProductList";
import { products } from "../../data/product";
import "./Catalog.css";

export default function Catalog() {
  return (
    <section className="catalog">
      <h1 className="catalog-title">Каталог кави</h1>
      <ProductList products={products} />
    </section>
  );
}
