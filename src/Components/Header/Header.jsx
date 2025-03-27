import React from "react";
import styles from "./Header.module.css";
import Buttons from "../Button/Buttons";
import { useNavigate } from "react-router-dom"; // ✅ Removed duplicate Route import

const Header = () => {
  const navigate = useNavigate();

  const handleEdit = () => {
    console.log("Edit button clicked");
    navigate("/Edit");
  };
  const handleRestaurantList = () => {
    console.log("Restaurant List button clicked");
    navigate("/");
  };

  return (
    <div className={styles.header}>
      <Buttons onClick={handleRestaurantList} text="Restaurant List" />
      <Buttons text="Old Lists" />
      <Buttons onClick={handleEdit} text="Edit" />
    </div>
  );
};

export default Header;
