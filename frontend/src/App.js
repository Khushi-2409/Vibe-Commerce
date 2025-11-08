import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { fetchProducts, getCart, addToCart, updateCartItem, removeCartItem, checkout } from "./api";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import CartPage from "./components/Cart";
import "./styles.css";

function AppContent() {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState({ items: [], total: 0 });
  const [allProducts, setAllProducts] = useState([]); // for resetting search

  useEffect(() => {
    loadProducts();
    loadCart();
  }, []);

  async function loadProducts() {
    const data = await fetchProducts();
    setProducts(data);
    setAllProducts(data);
  }

  async function loadCart() {
    const data = await getCart();
    setCartData(data);
  }

  // 🟢 Add this new handler
  function handleSearch(query) {
    if (!query.trim()) {
      setProducts(allProducts);
      return;
    }
    const filtered = allProducts.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filtered);
  }

  async function handleAddToCart(pid) {
    await addToCart(pid, 1);
    await loadCart();
  }

  async function handleQtyChange(itemId, qty) {
    const data = await updateCartItem(itemId, qty);
    setCartData(data);
  }

  async function handleRemove(itemId) {
    const data = await removeCartItem(itemId);
    setCartData(data);
  }

  async function handleCheckout(customer) {
    const cartItems = cartData.items.map(it => ({
      product: it.product._id || it.product,
      qty: it.qty,
    }));
    const res = await checkout(cartItems, customer);
    const receiptData = {
      orderId: res?.receipt?.orderId || "ORD" + Math.floor(Math.random() * 100000),
      name: customer.name,
      email: customer.email,
      total: res?.receipt?.total || cartData.total,
    };
    await loadCart();
    return receiptData;
  }

  return (
    <>
      <Navbar cartCount={cartData.items.length} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* 🟢 Pass the function here */}
              <HeroSection onSearch={handleSearch} />
              <Products products={products} onAdd={handleAddToCart} />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              data={cartData}
              onQty={handleQtyChange}
              onRemove={handleRemove}
              onCheckout={handleCheckout}
            />
          }
        />
      </Routes>
    </>
  );
}


export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
