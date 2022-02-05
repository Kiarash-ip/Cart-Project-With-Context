import React, { useContext } from "react";

import { Link } from "react-router-dom";

// Styles
import styles from "./ShopCart.module.css";

// context
import { CartContext } from "../context/CartContextProvider";

// components
import Cart from "./Cart";

export default function ShopCart() {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((product) => (
          <Cart key={product.id} data={product} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <span>Total Items: </span> {state.itemsCounter}
          </p>
          <p>
            <span>Total Payments:</span>
            {state.total}
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.clear}
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              Clear
            </button>
            <button
              className={styles.checkout}
              onClick={() => dispatch({ type: "CHECKOUT" })}
            >
              Check Out
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className={styles.complete}>
          <h3>Checked out successfully</h3>
          <Link to="/products">Buy More</Link>
        </div>
      )}
      {!state.checkout && state.itemsCounter === 0 && (
        <div className={styles.complete}>
          <h3>Want to buy</h3>
          <Link to="/products">Go back to shop</Link>
        </div>
      )}
    </div>
  );
}
