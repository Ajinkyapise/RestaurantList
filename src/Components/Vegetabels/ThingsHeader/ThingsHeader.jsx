import React from "react";
import styles from "./ThingsHeader.module.css";
import Buttons from "../../Buttons";
const ThingsHeader = () => {
  return (
    <div className={`${styles.thingsHeader} container`}>
      <Buttons text="Vegetables" />
      <Buttons text="Meats" />
      <Buttons text="Plastics" />
      <Buttons text="Edit" />
    </div>
  );
};

export default ThingsHeader;
