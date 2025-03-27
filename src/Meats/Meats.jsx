import React from "react";
import { useMeats } from "../Context/MeatContext";
import styles from "./Meats.module.css";

const Meats = ({ onAddItem }) => {
  const { meats } = useMeats();

  const handleAdd = (item) => {
    if (onAddItem) {
      onAddItem(item);
    }
  };

  return (
    <div className={styles.Meats}>
      <h2>Meats</h2>
      {meats.map((meat) => (
        <div key={meat} className={styles.item}>
          <span>{meat}</span>
          <button onClick={() => handleAdd(meat)}>Add</button>
        </div>
      ))}
    </div>
  );
};

export default Meats;
