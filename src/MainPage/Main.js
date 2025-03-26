import React, { useState } from "react";
import CurrentList from "../Components/CurrentList/CurrentList";
import styles from "./Main.module.css";
import Left from "../Vegetables/Left";
import Buttons from "../Components/Button/Buttons";
import Meats from "../Meats/Meats";
import Plastics from "../Plastics/Plastics";

const pages = ["Vegetables", "Meats", "Plastics", "Edit"];

const Main = () => {
  const [pageLoaded, setPageLoaded] = useState("Vegetables");
  const [itemsList, setItemsList] = useState([]);

  const handlePageChange = (page) => {
    setPageLoaded(page);
  };

  const handleAddItem = (item) => {
    setItemsList((prevList) => [...prevList, item]);
  };

  const handleDeleteItem = (itemToDelete) => {
    setItemsList((prevList) =>
      prevList.filter((item) => item !== itemToDelete)
    );
  };

  const pageComponents = {
    Vegetables: <Left onAddItem={handleAddItem} />,
    Meats: <Meats />,
    Plastics: <Plastics />,
    Edit: <div>Edit Page Placeholder</div>,
  };

  return (
    <div>
      <div className={`${styles.thingsHeader} container`}>
        {pages.map((page) => (
          <Buttons
            key={page}
            text={page}
            onClick={() => handlePageChange(page)}
          />
        ))}
      </div>

      <div className={styles.Main}>
        <CurrentList items={itemsList} onDeleteItem={handleDeleteItem} />
        {pageComponents[pageLoaded] || null}
      </div>
    </div>
  );
};

export default Main;
