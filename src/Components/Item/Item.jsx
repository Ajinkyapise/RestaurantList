import React from "react";
import styles from "./Item.module.css";

const Item = ({ name, count, onDelete, onIncrement, onDecrement }) => {
  return (
    <div className={styles.item}>
      <p>
        {name} <span className={styles.count}>x{count}</span>
      </p>

      <div className={styles.controls}>
        <button onClick={onDecrement} disabled={count <= 1}>
          −
        </button>
        <button onClick={onIncrement}>+</button>
        <button className={styles.delete} onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
