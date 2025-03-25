import React from "react";
import NameAdd from "../../../NameAdd";
import styles from "./Item.module.css";

const Item = ({ name }) => {
  return (
    <div className={styles.item}>
      <p>{name}</p>
      <NameAdd />
      <button className={styles.delete}>Delete</button>
    </div>
  );
};

export default Item;
