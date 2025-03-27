import React from "react";
import { usePlastics } from "../Context/PlasticContext";
import styles from "./Plastics.module.css";

const Plastics = ({ onAddItem }) => {
  const { plastics } = usePlastics();

  const handleAdd = (item) => {
    if (onAddItem) {
      onAddItem(item);
    }
  };

  return (
    <div className={styles.Plastics}>
      <h2>Plastics</h2>
      {plastics.map((item) => (
        <div key={item} className={styles.item}>
          <span>{item}</span>
          <button onClick={() => handleAdd(item)}>Add</button>
        </div>
      ))}
    </div>
  );
};

export default Plastics;
