import React, { useState } from "react";
import Buttons from "../Components/Button/Buttons";
import { useVegetables } from "../Context/VegetableContext";
import { useMeats } from "../Context/MeatContext";
import { usePlastics } from "../Context/PlasticContext";
import styles from "./Edit.module.css"; // optional CSS styling

const Edit = () => {
  const [category, setCategory] = useState("Vegetables");
  const [name, setName] = useState("");

  const { addVegetable } = useVegetables();
  const { addMeat } = useMeats();
  const { addPlastic } = usePlastics();

  const handleAdd = () => {
    if (!name.trim()) return;

    switch (category) {
      case "Vegetables":
        addVegetable(name.trim());
        break;
      case "Meats":
        addMeat(name.trim());
        break;
      case "Plastics":
        addPlastic(name.trim());
        break;
      default:
        break;
    }

    setName(""); // reset input
    alert(`${name} added to ${category}`);
  };

  return (
    <div className={styles.editPage}>
      <h1>Edit Page</h1>

      <div className={styles.formRow}>
        <label>Choose Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={styles.select}
        >
          <option value="Vegetables">Vegetables</option>
          <option value="Meats">Meats</option>
          <option value="Plastics">Plastics</option>
        </select>
      </div>

      <div className={styles.formRow}>
        <label>Item Name:</label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
      </div>

      <Buttons onClick={handleAdd} text={`Add to ${category}`} />
    </div>
  );
};

export default Edit;
