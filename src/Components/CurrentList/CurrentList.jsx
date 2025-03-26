import React from "react";
import styles from "./CurrentList.module.css";
import Item from "../Item/Item";

const CurrentList = ({ items, onDeleteItem }) => {
  return (
    <div className={styles.currentList}>
      {items.map((item, index) => (
        <Item key={index} name={item} onDelete={() => onDeleteItem(item)} />
      ))}
    </div>
  );
};

export default CurrentList;
