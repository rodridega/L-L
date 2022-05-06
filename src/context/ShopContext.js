import React, { useEffect, useState } from "react";
import { getCarousel } from "../helpers/getCarousel";
import { getProducts } from "../helpers/getProducts";

export const ShopContext = React.createContext();

export const ShopProvider = ({ children }) => {
  const [prodCarrito, setProdCarrito] = useState([]);

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    setLoading(true);
    getProducts().then((data) => {
      setCards(data);
    });

    getCarousel()
      .then((data) => {
        setCarousel(data);
      })

      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleProduct = (prod) => {
    const prodObj = {
      title: prod.title,
      price: prod.price,
      image: prod.image,
      id: prod.id,
      cantidad: 1,
    };

    const existe = prodCarrito.some((prod) => prod.title === prodObj.title);
    if (existe) {
      const compras = prodCarrito.map((compra) => {
        if (compra.title === prodObj.title) {
          compra.cantidad++;
          compra.price += prodObj.price;
          return compra;
        } else {
          return compra;
        }
      });
      setProdCarrito([...compras]);
    } else {
      setProdCarrito([...prodCarrito, prodObj]);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        prodCarrito,
        setProdCarrito,
        cards,
        setCards,
        loading,
        carousel,
        handleProduct,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
