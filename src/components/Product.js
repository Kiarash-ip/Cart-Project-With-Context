import React, { useContext } from "react";
import { shorten, isInCart, quantityCount } from "../functions/helper";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import { BsTrash } from "react-icons/bs";
import styles from "./Product.module.css";

export default function Product({ productData }) {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <img
        className={styles.cartImage}
        src={productData.image}
        alt="product__picture"
      />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price} $</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {quantityCount(state, productData.id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <BsTrash />
            </button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}
          {quantityCount(state, productData.id) > 0 && (
            <span className={styles.counter}>
              {quantityCount(state, productData.id)}
            </span>
          )}
          {isInCart(state, productData.id) ? (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              className={styles.addButton}
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add to Card
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
