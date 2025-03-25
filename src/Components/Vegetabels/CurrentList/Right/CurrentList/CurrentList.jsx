import React from "react";
import styles from "./CurrentList.module.css";
import Item from "../Item/Item";

const CurrentList = () => {
  const items = ["Tomato", "Potato", "Carrot", "Onion"];

  return (
    <div className={styles.currentList}>
      {items.map((item, index) => (
        <Item key={index} name={item} />
      ))}
    </div>
  );
};

export default CurrentList;
