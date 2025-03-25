import React, { useState } from "react";
import styles from "./NameAdd.module.css";

const NameAdd = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.NameAdd}>
      <p>Count: {count}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Remove</button>
    </div>
  );
};

export default NameAdd;
