import React from "react";
import styles from "./Plastics.module.css";

const Plastics = () => {
  const items = ["Tomato", "Potato", "Carrot", "Onion"]; // Example list of items

  return (
    <div className={styles.Plastics}>
      <div>16Oz</div>
      <button>Add</button>
    </div>
  );
};

export default Plastics;
