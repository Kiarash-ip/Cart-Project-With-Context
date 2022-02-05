import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./app.css";

// context
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";

// components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./shared/Navbar";
import ShopCart from "./components/ShopCart";

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
