import React from "react";
import Item from "../Item/Item";
import styles from "./CurrentList.module.css";

const CurrentList = ({
  items,
  onDeleteItem,
  onIncrementItem,
  onDecrementItem,
}) => {
  if (!items || items.length === 0) {
    return <div className={styles.emptyMessage}>No items added yet.</div>;
  }

  return (
    <div className={styles.listContainer}>
      {items.map((item) => (
        <Item
          key={item.name}
          name={item.name}
          count={item.count}
          onDelete={() => onDeleteItem(item.name)}
          onIncrement={() => onIncrementItem(item.name)}
          onDecrement={() => onDecrementItem(item.name)}
        />
      ))}
    </div>
  );
};

export default CurrentList;
