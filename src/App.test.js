/* eslint-env jest */
import React from "react";
<<<<<<< HEAD
import { render, screen, fireEvent } from "@testing-library/react";
=======
import { render, screen } from "@testing-library/react";
>>>>>>> 21c82c1163d177ee55f8a47198d1063fe53a9356
import { MemoryRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import RandomCoffee from "./components/RandomCoffee/RandomCoffee";
import WhyUs from "./components/WhyUs/WhyUs";
import CartPage from "./pages/CartPage/CartPage";

// ---------- Header ----------
test("Header renders logo", () => {
<<<<<<< HEAD
  render(<MemoryRouter><Header /></MemoryRouter>);
=======
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
>>>>>>> 21c82c1163d177ee55f8a47198d1063fe53a9356
  expect(screen.getByText("☕ Coffee Shop")).toBeInTheDocument();
});

test("Header highlights Catalog link when on /catalog", () => {
  render(
    <MemoryRouter initialEntries={["/catalog"]}>
      <Header />
    </MemoryRouter>
  );
  expect(screen.getByText("Каталог")).toHaveClass("active");
});

test("Header does not highlight Catalog link when on /", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Header />
    </MemoryRouter>
  );
  expect(screen.getByText("Каталог")).not.toHaveClass("active");
});

// ---------- ProductCard ----------
<<<<<<< HEAD
const product = { id:1, name:"Espresso", description:"Strong coffee", price:50, image:"test.jpg" };
=======
const product = {
  id: 1,
  name: "Espresso",
  description: "Strong coffee",
  price: 50,
  image: "test.jpg",
};
>>>>>>> 21c82c1163d177ee55f8a47198d1063fe53a9356

test("ProductCard renders product info", () => {
  render(<ProductCard product={product} addToCart={() => {}} />);
  expect(screen.getByText("Espresso")).toBeInTheDocument();
  expect(screen.getByText("Strong coffee")).toBeInTheDocument();
});

<<<<<<< HEAD
test("ProductCard calls addToCart on click", () => {
  const mockAdd = jest.fn();
  render(<ProductCard product={product} addToCart={mockAdd} />);
  fireEvent.click(screen.getByText("Додати в кошик"));
  expect(mockAdd).toHaveBeenCalledWith(product);
=======
test("ProductCard has add button", () => {
  render(<ProductCard product={product} addToCart={() => {}} />);
  expect(screen.getByRole("button")).toBeInTheDocument();
>>>>>>> 21c82c1163d177ee55f8a47198d1063fe53a9356
});

// ---------- RandomCoffee ----------
test("RandomCoffee renders coffee of the day", () => {
<<<<<<< HEAD
  const coffee = { name:"Cappuccino", description:"Foamy", price:70 };
=======
  const coffee = { name: "Cappuccino", description: "Foamy", price: 70 };
>>>>>>> 21c82c1163d177ee55f8a47198d1063fe53a9356
  render(<RandomCoffee coffee={coffee} />);
  expect(screen.getByText("Кава дня")).toBeInTheDocument();
  expect(screen.getByText("Cappuccino")).toBeInTheDocument();
});

// ---------- WhyUs ----------
test("WhyUs renders reasons", () => {
  render(<WhyUs />);
  expect(screen.getByText("Свіже обсмаження")).toBeInTheDocument();
  expect(screen.getByText("Швидка доставка")).toBeInTheDocument();
  expect(screen.getByText("Натуральні зерна")).toBeInTheDocument();
});

// ---------- CartPage ----------
<<<<<<< HEAD
test("CartPage shows empty cart message", () => {
  render(<CartPage cartItems={[]} setCartItems={() => {}} />);
  expect(screen.getByText("Ваш кошик порожній")).toBeInTheDocument();
});

test("CartPage renders items in cart", () => {
  const items = [{ id:1, name:"Latte", price:60, quantity:2, image:"latte.jpg" }];
  render(<CartPage cartItems={items} setCartItems={() => {}} />);
  expect(screen.getByText("Latte")).toBeInTheDocument();
  expect(screen.getByText("2")).toBeInTheDocument();
});

test("CartPage removes item from cart", () => {
  const items = [{ id:1, name:"Latte", price:60, quantity:1, image:"latte.jpg" }];
  const setCartItems = jest.fn();
  render(<CartPage cartItems={items} setCartItems={setCartItems} />);
  fireEvent.click(screen.getByText("Видалити"));
  expect(setCartItems).toHaveBeenCalled();
});

test("CartPage increases item quantity", () => {
  const items = [{ id:1, name:"Latte", price:60, quantity:1, image:"latte.jpg" }];
  const setCartItems = jest.fn();
  render(<CartPage cartItems={items} setCartItems={setCartItems} />);
  fireEvent.click(screen.getByText("+"));
  expect(setCartItems).toHaveBeenCalled();
});

test("CartPage decreases item quantity", () => {
  const items = [{ id:1, name:"Latte", price:60, quantity:2, image:"latte.jpg" }];
  const setCartItems = jest.fn();
  render(<CartPage cartItems={items} setCartItems={setCartItems} />);
  fireEvent.click(screen.getByText("-"));
  expect(setCartItems).toHaveBeenCalled();
});

test("CartPage shows total price", () => {
  const items = [
    { id:1, name:"Latte", price:60, quantity:1, image:"latte.jpg" },
    { id:2, name:"Espresso", price:50, quantity:2, image:"espresso.jpg" }
  ];
  render(<CartPage cartItems={items} setCartItems={() => {}} />);
  // Використовуємо regex, бо текст розбитий на вузли
  expect(screen.getByText(/Разом:\s*160\s*грн/)).toBeInTheDocument();
=======
test("CartPage renders cart title", () => {
  render(<CartPage cartItems={[]} setCartItems={() => {}} />);
  expect(screen.getByText("Кошик")).toBeInTheDocument();
});

test("CartPage renders default cart item", () => {
  render(<CartPage cartItems={[]} setCartItems={() => {}} />);
  expect(screen.getByText("Latte Macchiato")).toBeInTheDocument();
});

test("CartPage shows quantity", () => {
  render(<CartPage cartItems={[]} setCartItems={() => {}} />);
  expect(screen.getByText("1")).toBeInTheDocument();
});

test("CartPage has remove button", () => {
  render(<CartPage cartItems={[]} setCartItems={() => {}} />);
  expect(screen.getByText("Видалити")).toBeInTheDocument();
});

test("CartPage has quantity controls", () => {
  render(<CartPage cartItems={[]} setCartItems={() => {}} />);
  expect(screen.getByText("+")).toBeInTheDocument();
  expect(screen.getByText("-")).toBeInTheDocument();
});

test("CartPage shows total price", () => {
  render(<CartPage cartItems={[]} setCartItems={() => {}} />);
  expect(screen.getByText(/Разом/i)).toBeInTheDocument();
>>>>>>> 21c82c1163d177ee55f8a47198d1063fe53a9356
});