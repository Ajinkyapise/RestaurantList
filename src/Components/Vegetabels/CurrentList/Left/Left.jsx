import React from "react";
import styles from "./Left.module.css";

const Left = () => {
  const items = ["Tomato", "Potato", "Carrot", "Onion"]; // Example list of items

  return (
    <div className={styles.Left}>
      <div>tomato</div>
      <button>Add</button>
    </div>
  );
};

export default Left;
