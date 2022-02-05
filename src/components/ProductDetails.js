import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./ProductDetails.module.css";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={product.image} alt="product" />
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.category}>
          <span>category :</span> {product.category}
        </p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{product.price} $</span>
          <Link to="/products">Back to Shop</Link>
        </div>
      </div>
    </div>
  );
}
