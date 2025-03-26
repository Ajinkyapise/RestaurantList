import React from "react";
import styles from "./Header.module.css";
import Buttons from "../Button/Buttons";

const Header = () => {
  return (
    <div className={styles.header}>
      <Buttons text="Restaurant List" />
      <Buttons text="Old Lists" />
    </div>
  );
};

export default Header;
