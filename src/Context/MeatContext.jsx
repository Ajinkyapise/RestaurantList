import React, { createContext, useContext, useState } from "react";

const MeatContext = createContext();
export const useMeats = () => useContext(MeatContext);

export const MeatProvider = ({ children }) => {
  const [meats, setMeats] = useState(["Chicken", "Beef", "Mutton"]);

  const addMeat = (meat) => {
    if (!meats.includes(meat)) {
      setMeats((prev) => [...prev, meat]);
    }
  };

  return (
    <MeatContext.Provider value={{ meats, addMeat }}>
      {children}
    </MeatContext.Provider>
  );
};
