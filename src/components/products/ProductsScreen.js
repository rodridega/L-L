import { Box, Container, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Card } from "../Layout/Card";

export const ProductsScreen = () => {
  const [loading, setLoading] = useState(true);

  const { cards, setCards } = useContext(ShopContext);

  useEffect(() => {
    setLoading(true);

    const url =
      "https://docs.google.com/spreadsheets/d/1jtWHp8GC9AXWp92L6is8ADLJ9u-14W2cVvDCG3V3WIA/gviz/tq?";

      
    fetch(url)
      .then((res) => res.text())
      .then((rep) => {
        const data = JSON.parse(rep.substr(47).slice(0, -2));
        const objetos = data.table.rows.map(({ c }) => ({
          title: c[0]?.v,
          price: c[1]?.v,
          description: c[2]?.v,
          image: c[3]?.v,
          id: c[4]?.v,
        }));
        setCards(objetos);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="pink.500"
          size="xl"
          display={"flex"}
          mx={"auto"}
          my={"20"}
        />
      ) : (
        <Box maxW="90rem" centerContent id="titulo">
          <Heading
            as="h2"
            py={28}
            pb={8}
            fontSize={{ base: "4xl", md: "6xl" }}
            textAlign="center"
            color={"purple.800"}
          >
            Productos
          </Heading>

          <SimpleGrid columns={[2, 2, 2, 3]} spacing={"10"} >
            {cards.map((prod) => {
              return <Card prod={prod} key={prod.id} />;
            })}
          </SimpleGrid>
        </Box>
      )}
    </>
  );
};
