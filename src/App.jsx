import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DealsPage from "./pages/DealsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

// Components
import Navbar from "./components/Navbar";

function App() {

  // Load Cart Items
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    } catch {
      return [];
    }
  });

  // Save Cart Items
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add Product to Cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1
              }
            : item
        );
      }

      return [
        ...prev,
        { ...product, quantity: 1 }
      ];
    });
  };

  // Update Product Quantity
  const updateCartQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, Number(quantity)) }
          : item
      )
    );
  };

  // Remove Product from Cart
  const removeCartItem = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/category/:categoryName"
          element={<CategoryPage />}
        />

        <Route
          path="/products"
          element={
            <ProductsPage onAddToCart={addToCart} />
          }
        />

        <Route
          path="/product/:productId"
          element={
            <ProductDetailsPage onAddToCart={addToCart} />
          }
        />

        <Route path="/deals" element={<DealsPage />} />

        <Route path="/about" element={<AboutUsPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              onUpdateQuantity={updateCartQuantity}
              onRemoveItem={removeCartItem}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <CheckoutPage
              cartItems={cartItems}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;