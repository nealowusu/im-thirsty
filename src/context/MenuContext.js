import React, { useState, createContext } from "react";

export const MenuContext = createContext();

export const MenuContextProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};
