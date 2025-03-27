import React, { createContext, useContext, useState } from "react";

const PlasticContext = createContext();
export const usePlastics = () => useContext(PlasticContext);

export const PlasticProvider = ({ children }) => {
  const [plastics, setPlastics] = useState(["Bottle", "Container", "Wrap"]);

  const addPlastic = (plastic) => {
    if (!plastics.includes(plastic)) {
      setPlastics((prev) => [...prev, plastic]);
    }
  };

  return (
    <PlasticContext.Provider value={{ plastics, addPlastic }}>
      {children}
    </PlasticContext.Provider>
  );
};
