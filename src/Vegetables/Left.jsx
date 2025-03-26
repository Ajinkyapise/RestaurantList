import React from "react";
import styles from "./Left.module.css";

const Left = ({ onAddItem }) => {
  const handleAddButton = () => {
    if (onAddItem) {
      onAddItem("Tomato"); // You can change this to a dynamic value if needed
    }
  };

  return (
    <div className={styles.Left}>
      <div>Tomato</div>
      <button onClick={handleAddButton}>Add</button>
    </div>
  );
};

export default Left;
