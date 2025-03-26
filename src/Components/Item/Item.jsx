import React from "react";
import NameAdd from "../NamesAdd/NameAdd";
import styles from "./Item.module.css";

const Item = ({ name, onDelete }) => {
  return (
    <div className={styles.item}>
      <p>{name}</p>
      <NameAdd />
      <button className={styles.delete} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Item;
