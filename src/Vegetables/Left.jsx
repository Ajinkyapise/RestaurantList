import React from "react";
import styles from "./Left.module.css";
import { useVegetables } from "../Context/VegetableContext"; // adjust path if needed

const Left = ({ onAddItem }) => {
  const { vegetables } = useVegetables();

  const handleAddButton = (item) => {
    if (onAddItem) {
      onAddItem(item);
    }
  };

  return (
    <div className={styles.Left}>
      <h2>Vegetables</h2>
      {vegetables.map((veg) => (
        <div key={veg} className={styles.vegItem}>
          <span>{veg}</span>
          <button onClick={() => handleAddButton(veg)}>Add</button>
        </div>
      ))}
    </div>
  );
};

export default Left;
