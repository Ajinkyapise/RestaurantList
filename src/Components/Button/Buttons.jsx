import React from "react";
import styles from "./Buttons.module.css";
const Buttons = ({ isOutline, text, ...rest }) => {
  return (
    <>
      <button {...rest} className={styles.primary_button}>
        {text}
      </button>
    </>
  );
};

export default Buttons;
