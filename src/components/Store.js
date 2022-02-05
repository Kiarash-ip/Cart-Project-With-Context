import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContextProvider";

import styles from "./Store.module.css";

import Product from "./Product";

export default function Store() {
  const data = useContext(ProductsContext);

  return (
    <div className={styles.container}>
      {data.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
}
