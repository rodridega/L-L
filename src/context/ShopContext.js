import React, { useState } from "react";

export const ShopContext = React.createContext();

export const ShopProvider = ({ children }) => {

  const [prodCarrito, setProdCarrito] = useState([]);

  const [cards, setCards] = useState([]);
  


  return (
    <ShopContext.Provider
      value={{
        prodCarrito,
        setProdCarrito,
        cards,
        setCards,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
