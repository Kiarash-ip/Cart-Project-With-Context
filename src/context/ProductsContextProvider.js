import React, { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/api";

export const ProductsContext = createContext();

export default function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setProducts(await getProducts());
    };
    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}
