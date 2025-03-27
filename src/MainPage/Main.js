import React, { useState } from "react";
import CurrentList from "../Components/CurrentList/CurrentList";
import styles from "./Main.module.css";
import Left from "../Vegetables/Left";
import Buttons from "../Components/Button/Buttons";
import Meats from "../Meats/Meats";
import Plastics from "../Plastics/Plastics";
import jsPDF from "jspdf";

const pages = ["Vegetables", "Meats", "Plastics"];

const Main = () => {
  const [pageLoaded, setPageLoaded] = useState("Vegetables");
  const [itemsList, setItemsList] = useState([]);

  const handlePageChange = (page) => {
    setPageLoaded(page);
  };

  const handleAddItem = (newItem) => {
    setItemsList((prevList) => {
      const existingItem = prevList.find((item) => item.name === newItem);
      if (existingItem) {
        return prevList.map((item) =>
          item.name === newItem ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevList, { name: newItem, count: 1 }];
      }
    });
  };

  const handleDeleteItem = (itemToDelete) => {
    setItemsList((prevList) =>
      prevList.filter((item) => item.name !== itemToDelete)
    );
  };

  const handleExportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Exported Items List", 20, 20);

    itemsList.forEach((item, index) => {
      doc.text(
        `${index + 1}. ${item.name} (x${item.count})`,
        20,
        30 + index * 10
      );
    });

    doc.save("ItemsList.pdf");
  };

  const handleClearList = () => {
    setItemsList([]);
  };

  const pageComponents = {
    Vegetables: <Left onAddItem={handleAddItem} />,
    Meats: <Meats onAddItem={handleAddItem} />,
    Plastics: <Plastics onAddItem={handleAddItem} />,
  };
  const handleIncrementItem = (itemName) => {
    setItemsList((prevList) =>
      prevList.map((item) =>
        item.name === itemName ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrementItem = (itemName) => {
    setItemsList((prevList) =>
      prevList.map((item) =>
        item.name === itemName && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  return (
    <div className={styles.ontainer}>
      <div className={styles.Main}>
        {pages.map((page) => (
          <Buttons
            key={page}
            text={page}
            onClick={() => handlePageChange(page)}
          />
        ))}
      </div>

      <div className={styles.Main}>
        <CurrentList
          items={itemsList}
          onDeleteItem={handleDeleteItem}
          onIncrementItem={handleIncrementItem}
          onDecrementItem={handleDecrementItem}
        />

        {pageComponents[pageLoaded] || null}
      </div>

      <div className={styles.actions}>
        <button onClick={handleExportToPDF} className={styles.exportBtn}>
          Export to PDF
        </button>
        <button onClick={handleClearList} className={styles.clearBtn}>
          Clear List
        </button>
      </div>
    </div>
  );
};

export default Main;
