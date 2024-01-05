import React, { createContext, useState } from "react";

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [number, setNumber] = useState(0);

  return (
    <MyContext.Provider value={{ number, setNumber }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
