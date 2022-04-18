import React, { useEffect, useState } from "react";

export const ShopContext = React.createContext();

export const ShopProvider = ({ children }) => {
  const [prodCarrito, setProdCarrito] = useState([]);

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [carousel, setCarousel] = useState([]);


  useEffect(() => {
    setLoading(true);

    const url =
      "https://docs.google.com/spreadsheets/d/1jtWHp8GC9AXWp92L6is8ADLJ9u-14W2cVvDCG3V3WIA/gviz/tq?";

    fetch(url)
      .then((res) => res.text())
      .then((rep) => {
        const data = JSON.parse(rep.substr(47).slice(0, -2));
        const carouselImages = data.table.rows.map(({ c }) => ({
          image: c[5]?.v,
          id: c[4]?.v,
          price: c[6]?.v
        }));
        const objetos = data.table.rows.map(({ c }) => ({
          title: c[0]?.v,
          price: c[1]?.v,
          description: c[2]?.v,
          image: c[3]?.v,
          id: c[4]?.v,
        }));
        setCards(objetos);
        setCarousel(carouselImages);

      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);

      });
  }, [setCards, setCarousel]);

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
        handleProduct
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
