import React, { createContext, useContext, useState } from "react";

const VegetableContext = createContext();

export const useVegetables = () => useContext(VegetableContext);

export const VegetableProvider = ({ children }) => {
  const [vegetables, setVegetables] = useState(["Tomato", "Carrot", "Onion"]);

  const addVegetable = (veg) => {
    if (!vegetables.includes(veg)) {
      setVegetables((prev) => [...prev, veg]);
    }
  };

  return (
    <VegetableContext.Provider value={{ vegetables, addVegetable }}>
      {children}
    </VegetableContext.Provider>
  );
};
