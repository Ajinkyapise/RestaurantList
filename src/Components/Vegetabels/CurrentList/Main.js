import React from "react";
import CurrentList from "./Right/CurrentList/CurrentList";
import styles from "./Main.module.css";
import Left from "./Left/Left";

const Main = () => {
  return (
    <div className={styles.Main}>
      <CurrentList />
      <Left />
    </div>
  );
};

export default Main;
