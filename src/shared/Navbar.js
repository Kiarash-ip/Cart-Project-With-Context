import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./Navbar.module.css";

// Context
import { CartContext } from "../context/CartContextProvider";

export default function Navbar() {
  const { state } = useContext(CartContext);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">
          Products
        </Link>
        <div className={styles.iconContainer}>
          <Link to="/cart">
            <AiOutlineShoppingCart />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
}
