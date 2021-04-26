import React, { useState, createContext } from "react";

export const colorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  const [colors, setColors] = useState({
    primary: "#482ff7",
    secondary: "#0e153a",
    third: "#fc85ae",
  });

  return (
    <colorContext.Provider value={{ colors, setColors }}>
      {children}
    </colorContext.Provider>
  );
};
