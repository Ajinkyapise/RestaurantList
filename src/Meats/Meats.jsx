import React from "react";
import styles from "./Meats.module.css";

const Meats = () => {
  const items = ["Tomato", "Potato", "Carrot", "Onion"]; // Example list of items
  const handleAddButton = () => {
    console.log("Add button clicked");
  };

  return (
    <div className={styles.Meats}>
      <div>Chicken</div>
      <button onClick={handleAddButton}>Add</button>
    </div>
  );
};

export default Meats;
