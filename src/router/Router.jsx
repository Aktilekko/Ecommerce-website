import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import Cart from "../pages/cart/Cart";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
      <Route path="shop/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default Router;
