import React, { useContext } from "react";
import { shorten } from "../functions/helper";

// Styles
import styles from "./Cart.module.css";

// Icons
import { BsTrash } from "react-icons/bs";

// Context
import { CartContext } from "../context/CartContextProvider";

export default function Cart(props) {
  const { image, quantity, price, title } = props.data;
  const { dispatch } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={image} alt="product__picture" />
      <div className={styles.data}>
        <h3>{shorten(title)}</h3>
        <p>{price}</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            -
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <BsTrash />
          </button>
        )}
        <button
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          +
        </button>
      </div>
    </div>
  );
}
